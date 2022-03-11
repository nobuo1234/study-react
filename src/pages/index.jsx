import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";

const About = () => {
	return (
		<div className={styles.container}>
			<Header />
			<h1>Next.jsで学ぶReact講座</h1>
			<p>JSONPlaceholderのAPIを叩くよ</p>
		</div>
	);
};

export default About;
