import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The page cannot be found :(</p>
            <Link to='/'>Back to homepage...</Link>
        </div>
    );
}