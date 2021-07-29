import { useState, useEffect } from "react";
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

	// dummy useState data
	const [name, setName] = useState("irfan");

	const handleDelete = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);

		setBlogs(newBlogs);
	};

	useEffect(() => {
		console.log(name);
	}, [name]);

	return (
		<div className="home">
			<BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
			<BlogList
				blogs={blogs.filter((blog) => blog.author === "john doe")}
				title="My Favorite"
				handleDelete={handleDelete}
			/>
			<button onClick={() => setName("luigi")}>change name</button>
			<p>{name}</p>
		</div>
	);
};

export default Home;
