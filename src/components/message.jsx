import moment from "moment-timezone";
import getNextTime from "../components/getNextDay";

const CardUi = ({ item }) => {
	const { time, body, mentions } = item;
	const timestamp = date.toLocaleTimeString([], { hour12: false });
	let date = new Date();
	let newTime = moment.tz(time, "MMM Do YYYY hA", "America/Toronto");

	let nextDayTime = newTime.format("HH:mm");
	let day = newTime.format("YYYY-MM-DD");
	let cDay = moment(date.toDateString().split(" ").slice(1).join(" ")).format(
		"YYYY-MM-DD"
	);
	let tomorrow = getNextTime(day, cDay, timestamp, nextDayTime, date);

	return (
		<section className={`resultBox ${body ? "active" : ""}`}>
			<time>
				{time && tomorrow !== undefined ? tomorrow : newTime.format()}
			</time>
			<p>{body}</p>
			<ul className='d-flex'>
				{mentions && mentions.map((i, index) => <li key={index}>{i}</li>)}
			</ul>
		</section>
	);
};

export default CardUi;
