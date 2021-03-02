import React, { useEffect, Fragment, useState } from "react";
import Data from "./data.json";
import Form from "./components/form";
import CardUi from "./components/message";
import Error from "./components/error";
import "./app.scss";

function App() {
	let obj = {
		title: "",
		time: "",
		body: "",
		mentions: [],
	};
	const [event, setEvent] = useState(obj);
	const [result, setResult] = useState();
	const [item, setItem] = useState(obj);
	const appName = "Event Search App";

	useEffect(() => {
		document.title = appName;

		setItem(event);
	}, [event, item]);

	return (
		<Fragment>
			<header className='header'>{appName}</header>
			<main className='main'>
				<Form
					setEvent={setEvent}
					result={result}
					setResult={setResult}
					data={Data}
				/>
				{typeof item === "object" ? (
					<CardUi item={item} />
				) : (
					<Error text={item} />
				)}
				{console.log(typeof item === "object")}
			</main>
		</Fragment>
	);
}

export default App;
