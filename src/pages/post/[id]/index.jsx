import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { usePost } from "src/hooks/usePost";
import { Post } from "src/components/Post";

const PostId = () => {
	const { post, user, error, isLoading } = usePost();
	console.log({ post, user, error, isLoading });

	return (
		<div className={styles.container}>
			<Header />
			<Post />
		</div>
	);
};

export default PostId;
