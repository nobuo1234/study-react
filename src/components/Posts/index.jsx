import Link from "next/link";
import { usePosts } from "src/hooks/useFetchArray";

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
		<ul className="space-y-4">
			{data.map((post) => {
				return (
					<li key={post.id}>
						<Link href={`/posts/${post.id}`}>
							<a className="block group">
								<h1 className="text-xl font-bold group-hover:text-blue-500">
									{post.title}
								</h1>
								<p className="text-gray-400 group-hover:text-blue-500">
									{post.body}
								</p>
							</a>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default Posts;
