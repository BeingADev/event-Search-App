import Input from "./input";
import Button from "./button";

const Form = ({ setEvent, result, setResult, data }) => {
	const onSubmit = (e) => {
		e.preventDefault();

		const { Data } = data;
		setEvent(Data.find((obj) => obj.title === result));
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
