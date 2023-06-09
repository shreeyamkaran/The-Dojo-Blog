import BlogList from "./BlogList";
import useFetch from "./useFetch";

export default function Home() {

    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>{ error }</div>}
            {isLoading && <p>Loading blogs...</p> }
            {blogs && <BlogList blogs={blogs} title="All blogs" />}
        </div>
    );
}