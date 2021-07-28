const Home = ({ greetingText }) => {
	const handleClick = () => {
		console.log("This is a test");
	};

	const handleClickAgain = (name) => {
		console.log(`hello, ${name}`);
	};

	return (
		<div className="home">
			<h1>{greetingText}</h1>
			<button onClick={handleClick}>Click Me!</button>
			<button onClick={() => handleClickAgain("irfan")}>Click me again!</button>
		</div>
	);
};

export default Home;
