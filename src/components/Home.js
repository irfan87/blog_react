import useFetch from "../custom_hooks/useFetch";
import BlogList from "./BlogList";

const Home = () => {
	const url = "http://localhost:8000/blogs";
	const { data: blogs, isLoading, error } = useFetch(url);

	return (
		<div className="home">
			{error && <div>{error}</div>}
			{isLoading && <div>Fetching the blogs. Please wait...</div>}
			{blogs && <BlogList blogs={blogs} title="All blogs" />}
		</div>
	);
};

export default Home;
