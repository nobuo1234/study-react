import { useRouter } from "next/router";
import { API_URL } from "src/utils/const";
import { fetcher } from "src/utils/fetcher";
import useSWRImmutable from "swr/immutable";

export const useComment = () => {
	const router = useRouter();
	const { data: post, error: postError } = useSWRImmutable(
		router.query.id ? `${API_URL}/comments/${router.query.id}` : null,
		fetcher
	);

	return {
		post,
		error: postError,
		isLoading: !post && !postError,
	};
};
