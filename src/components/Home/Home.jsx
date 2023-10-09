import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h2>This is Home</h2>
            <Link to="/">Home</Link> <br />
            <Link to="/login">Login</Link>
        </div>
    );
};

export default Home;