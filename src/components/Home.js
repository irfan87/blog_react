import { useState } from "react";

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
			author: "john wick",
			id: 3,
		},
	]);

	return (
		<div className="home">
			{blogs.map((blog) => (
				<div key={blog.id} className="blog-preview">
					<h2>{blog.title}</h2>
					<p>{blog.body}</p>
					<small>Written by {blog.author}</small>
				</div>
			))}
		</div>
	);
};

export default Home;
