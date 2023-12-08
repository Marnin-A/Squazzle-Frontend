import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function ManageSearchParams() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	// Get a new searchParams string by merging the current
	// searchParams with a provided key/value pair
	const params = new URLSearchParams(searchParams);
	const createQueryString = (name: string, value: string) => {
		params.set(name, value);

		return params.toString();
	};

	const setURLParam = (name: string, value: string) => {
		// Prevent adding params to url that already exist
		if (window.location.href.includes(name)) return;

		// Add params to url
		router.push(pathname + "?" + createQueryString(name, value));
	};

	const getURLParam = (name: string) => searchParams.get(name);

	const updateURLParam = (name: string, value: string) => {
		console.log("Params:", params.has(name));

		// Remove the url param if it already exists
		if (params.has(name)) params.delete(name);

		// Add back param with a new value
		params.set(name, value);

		// Push new url
		router.push(pathname + "?" + params.toString());
	};

	const memoizedUpdateURLParam = React.useCallback(
		(name: string, value: string) => updateURLParam(name, value),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	return {
		setURLParam,
		getURLParam,
		updateURLParam,
		memoizedUpdateURLParam,
		params,
	};
}
