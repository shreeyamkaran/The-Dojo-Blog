import { useNavigate, useParams } from "react-router-dom";
import useFetch from './useFetch';

export default function BlogDetails() {
    const { id } = useParams();

    const { data: blog, isLoading, error } = useFetch(`http://localhost:8000/blogs/${id}`);

    const navigate = useNavigate();

    function handleDelete() {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        });
    }

    return (
        <div className="blog-details">
            { isLoading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by: { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleDelete}>Delete blog</button>
                </article>
            ) }
        </div>
    );
}