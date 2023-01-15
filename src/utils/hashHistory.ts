import { createHashHistory } from "history";
import type { HistorySource } from "svelte-navigator";

function createHashSource(): HistorySource {
	const history = createHashHistory();
	let listeners: any[] = [];

	history.listen(location => {
		if (history.action === "POP") {
			listeners.forEach(listener => listener(location));
		}
	});

	return {
		// @ts-ignore
		get location() {
			return history.location;
		},
		addEventListener(name, handler) {
			if (name !== "popstate") return;
			listeners.push(handler);
		},
		removeEventListener(name, handler) {
			if (name !== "popstate") return;
			listeners = listeners.filter(fn => fn !== handler);
		},
		history: {
			// @ts-ignore
			get state() {
				return history.location.state;
			},
			pushState(state, _title, uri) {
				history.push(uri, state);
			},
			replaceState(state, _title, uri) {
				history.replace(uri, state);
			},
			go(to) {
				history.go(to);
			},
		},
	};
}

export default createHashSource;
