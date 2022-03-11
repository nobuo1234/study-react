import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Posts as PostsCompornent } from "src/components/Posts";

const Posts = () => {
	return (
		<div className={styles.container}>
			<Header />

			<Posts />
		</div>
	);
};

export default Posts;
