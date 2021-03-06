import { API_URL } from "src/utils/const";
import { fetcher } from "src/utils/fetcher";
import useSWRImmutable from "swr/immutable";

export const useFetchArray = (url) => {
	const { data, error } = useSWRImmutable(url, fetcher);
	return {
		data,
		error,
		isLoading: !error && !data,
		isEnpty: data && data.length === 0,
	};
};

// Posts
export const usePosts = () => {
	return useFetchArray(`${API_URL}/posts`);
};
export const usePostsByUserId = (id) => {
	return useFetchArray(id ? `${API_URL}/posts?userId=${id}` : null);
};

// Users
export const useUsers = () => {
	return useFetchArray(`${API_URL}/users`);
};

// Comments
export const useComments = () => {
	return useFetchArray(`${API_URL}/comments`);
};
export const useCommentsByPostId = (id) => {
	return useFetchArray(id ? `${API_URL}/comments?postId=${id}` : null);
};
