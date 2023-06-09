import { Link } from "react-router-dom";

export default function BlogList(props) {
    const blogs = props.blogs;
    const title = props.title;

    return (
        <div className="blog-list">
            <h1>{ title }</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by: {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}