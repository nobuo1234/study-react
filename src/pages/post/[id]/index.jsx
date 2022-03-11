import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { useRouter } from "next/router";

const PostId = () => {
	const router = useRouter();
	console.log(router.query.id);
	return (
		<div className={styles.container}>
			<Header />
			<div>{router.query.id}</div>
		</div>
	);
};

export default PostId;
