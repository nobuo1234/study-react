import { usePosts } from "src/hooks/usePosts";
import Link from "next/link";

export const Posts = () => {
	const { data, error, isLoading, isEnpty } = usePosts();

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
						<Link href={`/posts/${post.id}`}>
							<a>{post.title}</a>
						</Link>
					</li>
				);
			})}
		</ol>
	);
};

export default Posts;
