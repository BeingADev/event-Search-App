import moment from "moment-timezone";

const CardUi = ({ item }) => {
	const { title, time, body } = item;
	return (
		<section className={`resultBox ${title ? "active" : ""}`}>
			<time>
				{moment.tz(time, "America/Chicago").format("MMMM Do YYYY, h:mm a")}
			</time>
			<p>{body}</p>
		</section>
	);
};

export default CardUi;
