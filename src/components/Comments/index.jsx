import Link from "next/link";
import { useComments } from "src/hooks/useFetchArray";

export const Comments = (props) => {
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
		<ul className="space-y-2">
			{data.map((post) => {
				return (
					<li key={post.id} className="border-b pb-2">
						<Link href={`/comments/${post.id}`} prefetch={false}>
							<a className="block hover:text-blue-500">
								{post.body}
							</a>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default Comments;
