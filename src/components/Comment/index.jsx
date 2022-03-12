import PostByCommentId from "src/components/Post/PostByCommentId";
import { useComment } from "src/hooks/useComment";

export const Comment = () => {
	const { post, error, isLoading } = useComment();

	/* console.log({ data, error }); */

	if (isLoading) {
		return <div>ローディング中</div>;
	}
	if (error) {
		return <div>{error.message}</div>;
	}
	return (
		<div>
			<div>
				{post.name}({post.email})
			</div>
			<h1 className="text-3xl font-bold">{post.body}</h1>
			<h2 className="text-xl font-bold mt-10">元の記事</h2>
			<div className="mt-2"></div>
			<PostByCommentId id={post.postId} />
		</div>
	);
};

export default Comment;
