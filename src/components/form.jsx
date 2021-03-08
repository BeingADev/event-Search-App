import Input from "./input";
import Button from "./button";

const Form = ({ setEvent, result, setResult }) => {
	const getTimeZone = /((1[0-2]|0?[1-9]):([0-5][0-9])?([AaPp][Mm]))|((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))|((1[0-2]|0?[1-9])( ?[AaPp][Mm]))|((1[0-2]|0?[1-9])[ ]([AaPp][.][Mm]))/g;
	const getDate = /(\d{1})[/](\d{2})[/](\d{4})/g;
	const regExMentions = /(@)(?!\.)(?!\S*\.\.)(?!\S*\.[\s|$])([a-zA-Z0-9,\.]+?)(?=\s|$)/g;
	const removeChar = /([.])([,])|(at)|([-])|(with)|(from)|(Today)|(Tomorrow)|(and)/g;

	const getDateTime = (string) => {
		let time = string.match(getTimeZone);
		let date = string.match(getDate);

		let text = string.replace(getTimeZone, "");
		let textString = text.replace(getDate, "");
		let message = textString.replaceAll(regExMentions, "");
		let newMessage = message.replaceAll(removeChar, "");

		let people = textString.match(regExMentions);

		let newDate = date !== null ? new Date(date) : new Date();

		let obj = {
			time:
				time !== null
					? `${newDate.toDateString().split(" ").slice(1).join(" ")} ${time}`
					: null,
			body: newMessage,
			mentions: people,
		};

		time !== null
			? setEvent(obj)
			: setEvent(
					"Datetime required for an event something like: 2/12/2021 8am | 8 AM with subject of the event "
			  );
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (result !== undefined) getDateTime(result);
	};

	const handleChange = (e) => {
		let query = e.target.value;
		setResult(query);
	};

	return (
		<form className='searchForm d-flex' onSubmit={onSubmit}>
			<Input onChange={handleChange} type='text' placeholder='Event Search' />
			<Button btnClass='btnPrimary' text='Submit' />
		</form>
	);
};

export default Form;
