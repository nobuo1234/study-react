import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Header } from "../components/Header";

export default function Home(props) {
	const {
		foo,
		isShow,
		handleClick,
		handleDisplay,
		text,
		array,
		handleChange,
		handleAdd,
	} = props;

	return (
		<div className={styles.container}>
			<Header />

			{isShow ? <h1>{foo}</h1> : null}
			<button type="button" onClick={handleClick}>
				ボタン
			</button>
			<button type="button" onClick={handleDisplay}>
				{isShow ? "非表示" : "表示"}
			</button>

			<input type="text" name="" value={text} onChange={handleChange} />
			<button onClick={handleAdd}>追加</button>
			<ul>
				{array.map((item) => {
					return <li key={item}>{item}</li>;
				})}
			</ul>
			<Main page="index" />
			<Footer />
		</div>
	);
}