import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
	const [blogs, setBlogs] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			fetch("http://localhost:8000/blogs")
				.then((res) => res.json())
				.then((data) => {
					setBlogs(data);
					setIsLoading(false);
				})
				.catch((e) => console.error(e));
		}, 5000);
	}, []);

	return (
		<div className="home">
			{isLoading && <div>Fetching the blogs. Please wait...</div>}
			{blogs && <BlogList blogs={blogs} title="All blogs" />}
		</div>
	);
};

export default Home;
