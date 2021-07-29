import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="App">
			{/* define navbar component here */}
			<Navbar />
			<div className="content">
				<Home />
			</div>
		</div>
	);
}

export default App;
