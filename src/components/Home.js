import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
	const [blogs, setBlogs] = useState([
		{
			title: "First blog",
			body: "Lorem ipsum...",
			author: "john doe",
			id: 1,
		},
		{
			title: "Second blog",
			body: "Lorem ipsum...",
			author: "jane doe",
			id: 2,
		},
		{
			title: "Third blog",
			body: "Lorem ipsum...",
			author: "john doe",
			id: 3,
		},
	]);

	const handleDelete = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);

		setBlogs(newBlogs);
	};

	return (
		<div className="home">
			<BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
			<BlogList
				blogs={blogs.filter((blog) => blog.author === "john doe")}
				title="My Favorite"
				handleDelete={handleDelete}
			/>
		</div>
	);
};

export default Home;
