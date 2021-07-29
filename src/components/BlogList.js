const BlogList = ({ blogs, title, handleDelete }) => {
	return (
		<div className="blog-list">
			<h1>{title}</h1>
			{blogs.map((blog) => (
				<div key={blog.id} className="blog-preview">
					<h2>{blog.title ?? title}</h2>
					<p>{blog.author}</p>
					<button onClick={() => handleDelete(blog.id)}>Delete</button>
				</div>
			))}
		</div>
	);
};

export default BlogList;
