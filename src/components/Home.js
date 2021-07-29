import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
	const [blogs, setBlogs] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setTimeout(() => {
			fetch("http://localhost:8000/blogs")
				.then((res) => {
					if (!res.ok) {
						// throw Error("Unable to fetch the data from the server");
						throw Error(`${res.url} - ${res.statusText}`);
					}
					return res.json();
				})
				.then((data) => {
					setBlogs(data);
					setIsLoading(false);
					setError(null);
				})
				.catch((e) => {
					setIsLoading(false);
					setError(e.message);
				});
		}, 5000);
	}, []);

	return (
		<div className="home">
			{error && <div>{error}</div>}
			{isLoading && <div>Fetching the blogs. Please wait...</div>}
			{blogs && <BlogList blogs={blogs} title="All blogs" />}
		</div>
	);
};

export default Home;
