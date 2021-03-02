const Error = ({ text }) => {
	return (
		<section className='errorPage'>
			<h1>Opps</h1>
			<p>{text}</p>
		</section>
	);
};

export default Error;
