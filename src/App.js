import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
	const greetingText = "Welcome to the Dojo Blog!";
	const likes = 50;
	const users = [
		{
			name: "johnny",
			age: 33,
		},
		{
			name: "bulma",
			age: 21,
		},
	];

	return (
		<div className="App">
			{/* define navbar component here */}
			<Navbar />
			<Home greetingText={greetingText} likes={likes} users={users} />
		</div>
	);
}

export default App;
