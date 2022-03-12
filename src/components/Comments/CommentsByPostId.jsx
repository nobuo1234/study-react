import Link from "next/link";
import { useCommentsByPostId } from "src/hooks/useFetchArray";

export const CommentsByPostId = (props) => {
	const { data, error, isLoading, isEmpty } = useCommentsByPostId(props.id);

	if (isLoading) {
		return <div>ローディング中</div>;
	}
	if (error) {
		return <div>{error.message}</div>;
	}
	if (isEmpty) {
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
