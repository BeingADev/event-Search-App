import React, { useEffect, Fragment, useState } from "react";
import moment from "moment-timezone";
import Form from "./components/form";
import Data from "./data.json";
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
				{item.title && (
					<section className={`resultBox ${item.title ? "active" : ""}`}>
						<h1>{item.title}</h1>
						<time>
							{moment
								.tz(item.time, "America/Chicago")
								.format("MMMM Do YYYY, h:mm a")}
						</time>
						<p>{item.body}</p>
						<ul className='d-flex'>
							{item.mentions.map((i, index) => (
								<li key={index}>{i}</li>
							))}
						</ul>
					</section>
				)}
			</main>
		</Fragment>
	);
}

export default App;
