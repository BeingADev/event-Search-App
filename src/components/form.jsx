import Input from "./input";
import Button from "./button";

const Form = ({ setEvent, result, setResult, data }) => {
	const onSubmit = (e) => {
		e.preventDefault();

		const { Data } = data;
		let obj = Data.find((obj) => obj.title === result);

		typeof obj !== "undefined"
			? setEvent(obj)
			: setEvent("Your query doesn't match!");
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
