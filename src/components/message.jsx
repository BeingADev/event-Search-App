import moment from "moment-timezone";

const CardUi = ({ item }) => {
	const { time, body, mentions } = item;
	return (
		<section className={`resultBox ${body ? "active" : ""}`}>
			<time>
				{time &&
					moment().utc(time, "MM-MM-YYYY HH:mm").tz("America/Chicago").format()}
			</time>
			<p>{body}</p>
			<ul className='d-flex'>
				{mentions && mentions.map((i, index) => <li key={index}>{i}</li>)}
			</ul>
		</section>
	);
};

export default CardUi;
