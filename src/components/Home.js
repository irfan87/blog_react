import { useState } from "react";

const Home = ({ greetingText }) => {
	const [name, setName] = useState("irfan");
	const [age, setAge] = useState(34);

	const handleClick = () => {
		setName("ivy");
		setAge(23);
	};

	const handleClickAgain = (name) => {
		console.log(`hello, ${name}`);
	};

	return (
		<div className="home">
			<h1>{greetingText}</h1>
			<p>{`Hey, ${name}! You are ${age} years old!`}</p>
			<button onClick={handleClick}>Change name</button>
			<button onClick={() => handleClickAgain("irfan")}>Click me again!</button>
		</div>
	);
};

export default Home;
