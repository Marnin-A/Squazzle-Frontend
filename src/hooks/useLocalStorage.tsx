export default function useLocalStorage() {
	const setLocalStorage = (key: string, value: unknown) => {
		try {
			window.localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.log(error);
		}
	};
	const getLocalStorage = (key: string) => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? (item as string) : undefined;
		} catch (error) {
			console.log(error);
		}
	};
	const removeLocalStorage = (key: string) => {
		try {
			window.localStorage.removeItem(key);
		} catch (error) {
			console.log(error);
		}
		return;
	};
	const clearLocalStorage = () => localStorage.clear();

	return {
		setLocalStorage,
		getLocalStorage,
		removeLocalStorage,
		clearLocalStorage,
	};
}
