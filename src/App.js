import "./App.css";

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

	function usersList() {
		return users.map((user) => {
			return user.name + "\n";
		});
	}

	return (
		<div className="App">
			<div className="content">
				<h1>{greetingText}</h1>
				<p>Liked {likes} times!</p>
				<p>{usersList()}</p>
			</div>
		</div>
	);
}

export default App;
