import styles from "../styles/Home.module.css";
import { Header } from "../components/Header";
import { Posts } from "../components/Posts";

const Home = () => {
	return (
		<div className={styles.container}>
			<Header />

			<Posts />
		</div>
	);
};

export default Home;
