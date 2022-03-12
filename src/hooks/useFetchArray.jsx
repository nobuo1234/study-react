import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useFetchArray = (url) => {
	const { data, error } = useSWR(url, fetcher);
	return {
		data,
		error,
		isLoading: !error && !data,
		isEnpty: data && data.length === 0,
	};
};

const API_URL = "https://jsonplaceholder.typicode.com";

export const useComments = () => {
	return useFetchArray(`${API_URL}/comments`);
};
export const usePosts = () => {
	return usePosts(`${API_URL}/posts`);
};
export const useUsers = () => {
	return useUsers(`${API_URL}/users`);
};
