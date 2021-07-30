import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./components/BlogDetails";
import CreateBlog from "./components/CreateBlog";

import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
	return (
		<Router>
			<div className="App">
				{/* define navbar component here */}
				<Navbar />
				<div className="content">
					<Switch>
						<Route component={Home} exact path="/" />
						<Route component={CreateBlog} path="/create" />
						<Route component={BlogDetails} path="/blogs/:id" />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
