import { Header } from "src/components/Header";
import Comment from "src/components/Comment";
import { useComment } from "src/hooks/useComment";

const CommentsId = () => {
	const { post, error, isLoading } = useComment();
	console.log({ post, error, isLoading });

	return (
		<div>
			<Header />
			<Comment />
		</div>
	);
};

export default CommentsId;
