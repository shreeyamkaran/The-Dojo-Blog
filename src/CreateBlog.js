import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(ev) {
        ev.preventDefault();
            const blog = { title, body, author };
            setIsLoading(true);

            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(blog)
            }).then(() => {
                setIsLoading(false);
                navigate('/');
            });
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" required value={title} onChange={ev => setTitle(ev.target.value)}/>

                <label>Content:</label>
                <textarea required value={body} onChange={ev => setBody(ev.target.value)}></textarea>

                <label>Author:</label>
                <select value={author} onChange={ev => setAuthor(ev.target.value)}>
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>

                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Adding blog...</button>}
            </form>
        </div>
    );
}