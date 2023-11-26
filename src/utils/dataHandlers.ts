import { ApiResponse, Endpoint } from "@/types";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export function FetchData(endpoint: Endpoint, param: string) {
	const queryKey: string[] = [endpoint + param];
	return useQuery({
		queryKey: queryKey,
		queryFn: async () => {
			const { data } = await axios.get(`${baseURL}/${endpoint}/${param}`);
			return data as ApiResponse;
		},
	});
}
export function PostData(endpoint: Endpoint, postData: any, param?: string) {
	return useMutation({
		mutationFn: async () => {
			const { data: response } = await axios.post(
				`${baseURL}/${endpoint}/${param}`,
				postData
			);
			return response as ApiResponse;
		},
	});
}
