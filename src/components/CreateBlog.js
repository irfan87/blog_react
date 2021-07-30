import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("mario");
	const [isLoading, setIsLoading] = useState(false);
	const blogHistory = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();

		const blog = { title, body, author };
		const url = "http://localhost:8000/blogs";

		setIsLoading(true);

		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(blog),
		}).then(() => {
			console.log("new blog added");
			setIsLoading(false);

			// will go back to the previous page after the blog created
			blogHistory.push("/");
		});
	};

	return (
		<div className="create">
			<h2>Add A New Blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Title</label>
				<input
					type="text"
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label>Content</label>
				<textarea
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}
				></textarea>
				<label>Author</label>
				<select value={author} onChange={(e) => setAuthor(e.target.value)}>
					<option value="mario">mario</option>
					<option value="luigi">luigi</option>
					<option value="yoshi">yosgi</option>
				</select>
				{!isLoading && <button>Add This Blog</button>}
				{isLoading && <button disabled>Adding New Blog...</button>}
			</form>
		</div>
	);
};

export default CreateBlog;
