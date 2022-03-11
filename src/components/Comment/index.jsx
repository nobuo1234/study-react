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
			<h1>postId：{post?.postId}</h1>
			<p>ID：{post?.id}</p>
			<p>Name：{post?.name}</p>
			<p>email：{post?.email}</p>
			<p>body：{post?.body}</p>
			<p>{post?.name ? <div>Created by {post?.name}</div> : null}</p>
		</div>
	);
};

export default Comment;
