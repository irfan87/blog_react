import { useParams } from "react-router-dom";

import useFetch from "../custom_hooks/useFetch";

const BlogDetails = () => {
	const { id } = useParams();

	const url = `http://localhost:8000/blogs/${id}`;

	const { data: blog, error, isLoading } = useFetch(url);

	return (
		<div className="blog-details">
			{isLoading && <div>Loading your selected blog...</div>}
			{error && <div>Unable to load your selected blog...</div>}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>Written By: {blog.author}</p>
					<div>{blog.body}</div>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
