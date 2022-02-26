import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Header } from "../components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
	const [foo, setFoo] = useState(1);
	const [text, setText] = useState("");
	const [isShow, setIsShow] = useState(true);
	const [array, setArray] = useState([]);

	const handleClick = useCallback(
		(e) => {
			if (foo < 10) {
				setFoo((foo) => foo + 1);
			}
		},
		[foo]
	);

	const handleDisplay = useCallback(() => {
		setIsShow((prevIsShow) => !prevIsShow);
	}, []);

	const handleChange = useCallback((e) => {
		if (e.target.value.length > 5) {
			alert("5文字以内で！");
			return;
		}
		setText(e.target.value);
	}, []);

	const handleAdd = useCallback(() => {
		setArray((prevArray) => {
			if (prevArray.some((item) => item === text)) {
				alert("同じ要素が存在します。");
				return prevArray;
			}
			return [...prevArray, text];
		});
	}, [text]);

	useEffect(() => {
		// マウント時
		document.body.style.backgroundColor = "lightblue";
		return () => {
			// アンマウント時
			document.body.style.backgroundColor = "";
		};
	}, [foo]);

	return (
		<div className={styles.container}>
			<Head>
				<title>Index Page</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
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
