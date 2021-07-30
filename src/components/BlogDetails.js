import { useParams, useHistory, Link } from "react-router-dom";

import useFetch from "../custom_hooks/useFetch";

const BlogDetails = () => {
	const { id } = useParams();

	const url = `http://localhost:8000/blogs/${id}`;

	const { data: blog, error, isLoading } = useFetch(url);
	const blogHistory = useHistory();

	const handleDelete = () => {
		fetch(url, {
			method: "DELETE",
		}).then(() => {
			blogHistory.push("/");
		});
	};

	return (
		<div className="blog-details">
			{isLoading && <div>Loading your selected blog...</div>}
			{error && (
				<div>
					<h2>Opppsss</h2>
					<p>The blog that you are looking for is not exists...</p>
					<Link to="/">Home</Link>
				</div>
			)}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>Written By: {blog.author}</p>
					<div>{blog.body}</div>
					<button onClick={handleDelete}>Delete This Blog</button>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
