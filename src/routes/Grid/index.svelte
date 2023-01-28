<script lang="ts">
	import CircularProgress from '@smui/circular-progress';
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';

	import type { IOlympicData, ModalCloseEvent } from './types';

	import ModalContent from './modalContent.svelte';

	import AgGridSvelte from 'ag-grid-svelte';
	import type {
		ColDef,
		GridApi,
		ColumnApi,
		GridOptions,
		GridSizeChangedEvent
	} from 'ag-grid-community';

	import { useLocation } from 'svelte-navigator';

	const location = useLocation();

	let openId: string | null;

	const onLocationChange = () => {
		const params = new URLSearchParams($location.search);
		openId = params.get('openId');
	};

	const defaultColDef: ColDef = { resizable: true, editable: true, sortable: true, width: 90 };
	let rowData: IOlympicData[] = [];

	const columnDefs: ColDef[] = [
		{
			headerName: 'id',
			field: 'id',
			pinned: 'left',
			editable: false
		},
		{ field: 'athlete', width: 150, pinned: 'left' },
		{ field: 'age', pinned: 'left' },
		{ field: 'country', width: 150 },
		{ field: 'year' },
		{ field: 'date', width: 110 },
		{ field: 'sport', width: 150 },
		{ field: 'gold', width: 100 },
		{ field: 'silver', width: 100 },
		{ field: 'bronze', width: 100 },
		{ field: 'total', width: 100, pinned: 'right', editable: false }
	];

	let api: GridApi;
	let columnApi: ColumnApi;

	const gridOptions: GridOptions = {
		onGridReady: () => {
			if (rowData.length === 0) {
				setTimeout(() => {
					fetch('/olympic-winners.json')
						.then((resp) => resp.json())
						.then((data) => {
							rowData = data;
						});
				}, 750);
			}
		},
		onGridSizeChanged: (event: GridSizeChangedEvent) => {
			if (event.clientWidth > 1200) {
				api.sizeColumnsToFit();
			}
		}
	};

	let filterString = '';
	const onFilterStringChange = () => {
		console.log({ filterString });
		api?.setQuickFilter(filterString);
	};

	function closeHandler(e: ModalCloseEvent) {
		console.log(e.detail.action);
	}

	// bind to changes of filterString to our eventHandler :)
	$: filterString, onFilterStringChange();
	$: $location.search, onLocationChange();
</script>

<ModalContent open={!!(openId && rowData.length > 0)} {closeHandler} />

<div style:display="flex" style:flex-direction="column" style:height="100%">
	{#if rowData.length > 0}
		<div style:text-align="end" style:margin-bottom="35px">
			<Textfield
				class="shaped-outlined"
				variant="outlined"
				bind:value={filterString}
				label="Search"
			>
				<Icon class="material-icons" slot="leadingIcon">search</Icon>
			</Textfield>
		</div>
	{/if}

	<div
		class="ag-theme-svelte-material"
		style:width="100%"
		style:flex="1"
		style:position="relative"
		style:overflow="hidden"
	>
		{#if rowData.length > 0}
			<AgGridSvelte {rowData} {columnDefs} {defaultColDef} {gridOptions} bind:api bind:columnApi />
		{:else}
			<div class="spinner-wrapper">
				<CircularProgress style="height: 64px; width: 64px;" indeterminate />
			</div>
			<div style:display="none">
				<AgGridSvelte {gridOptions} />
			</div>
		{/if}
	</div>
</div>

<style>
	.spinner-wrapper {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	* :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__leading) {
		border-radius: 28px 0 0 28px;
		width: 28px;
	}

	* :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__trailing) {
		border-radius: 0 28px 28px 0;
	}
</style>
