export default function useLocalStorage() {
	const setItem = (key: string, value: unknown) => {
		try {
			window.localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.log(error);
		}
	};
	const getItem = (key: string) => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item as string) : `${key} is ${undefined}`;
		} catch (error) {
			console.log(error);
		}
	};
	const removeItem = (key: string) => {
		try {
			window.localStorage.removeItem(key);
		} catch (error) {
			console.log(error);
		}
		return;
	};

	return { setItem, getItem, removeItem };
}
