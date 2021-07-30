import { Link } from "react-router-dom";

const Page404 = () => {
	return (
		<div className="not-found">
			<h2>Opsss</h2>
			<p>The page cannot be found</p>
			<Link to="/">Home</Link>
		</div>
	);
};

export default Page404;
