import { useRouter } from "next/router";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useComment = () => {
	const router = useRouter();
	const { data: post, error: postError } = useSWR(
		router.query.id
			? `https://jsonplaceholder.typicode.com/comments/${router.query.id}`
			: null,
		fetcher
	);

	return {
		post,
		error: postError,
		isLoading: !post && !postError,
	};
};
