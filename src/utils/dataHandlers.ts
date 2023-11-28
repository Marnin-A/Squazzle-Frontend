import { ApiResponse, Endpoint } from "@/types";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
export const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export function useFetchData(
	endpoint: Endpoint,
	enabled: boolean = false,
	urlParams?: string
) {
	const queryKey: string[] = [endpoint + urlParams];
	return useQuery({
		queryKey: queryKey,
		queryFn: async () => {
			const { data } = await axios.get(
				`${baseURL}${endpoint}${urlParams ? "/" + urlParams : ""}`
			);
			return data as ApiResponse;
		},
		enabled: enabled,
	});
}
export function usePostData() {
	return useMutation({
		async mutationFn({
			endpoint,
			postData,
			urlParams,
		}: {
			endpoint: Endpoint;
			postData: any;
			urlParams?: string;
		}) {
			const { data: response } = await axios.post(
				`${baseURL}${endpoint}${urlParams ? "/" + urlParams : ""}`,
				postData
			);
			return response;
		},
		onSuccess(data) {
			return data as unknown;
		},
		onError(error) {
			return error as unknown;
		},
	});
}

// async function postData(endpoint: Endpoint, param?: string, config?: any) {
// 	try {
// 		const { data } = await axios.post(`${baseURL}/${endpoint}`, param, config); // Replace with your API endpoint
// 		return {
// 			data: data,
// 			isSuccess: true,
// 			isError: false,
// 		};
// 	} catch (error) {
// 		return {
// 			data: error,
// 			isSuccess: false,
// 			isError: true,
// 		};
// 	}
// }
