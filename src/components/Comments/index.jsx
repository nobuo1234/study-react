import Link from "next/link";
import { useComments } from "src/hooks/useComments";

export const Comments = () => {
	const { data, error, isLoading, isEnpty } = useComments();

	/* console.log({ data, error }); */

	if (isLoading) {
		return <div>ローディング中</div>;
	}
	if (error) {
		return <div>{error.message}</div>;
	}
	if (isEnpty) {
		return <div>データは空です</div>;
	}

	return (
		<ol>
			{data.map((post) => {
				return (
					<li key={post.id}>
						<Link href={`/comments/${post.id}`}>
							<a>{post.body}</a>
						</Link>
					</li>
				);
			})}
		</ol>
	);
};

export default Comments;
