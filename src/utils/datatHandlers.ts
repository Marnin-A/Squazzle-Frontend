import { ApiResponse } from "@/types";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
const baseURL = "http://localhost:3000";

export function FetchData(endpoint: string, param: string) {
	const queryKey: string[] = [endpoint + param];
	return useQuery({
		queryKey: queryKey,
		queryFn: async () => {
			const { data } = await axios.get(`${baseURL}/${endpoint}/${param}`);
			return data as ApiResponse;
		},
	});
}
export function PostData(endpoint: string, param: string) {
	return useMutation({
		mutationFn: async () => {
			const { data } = await axios.post(`${baseURL}/${endpoint}/${param}`);
			return data as ApiResponse;
		},
	});
}
