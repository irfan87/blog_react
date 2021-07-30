import { useParams, useHistory } from "react-router-dom";

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
			{error && <div>Unable to load your selected blog...</div>}
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
