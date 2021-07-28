const Home = ({ greetingText, likes, users }) => {
	function usersList() {
		return users.map((user) => {
			return user.name + "\n";
		});
	}

	return (
		<div className="home">
			<h1>{greetingText}</h1>
			<p>Liked {likes} times!</p>
			<p>{usersList()}</p>
		</div>
	);
};

export default Home;
