import {Link} from "react-router-dom"

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="links">
            <Link to="/hello">Hello</Link>
            <Link to="/sdc">State</Link>
            <Link to="/getposts">Posts</Link>
            <Link to="/todo">To Do</Link>
            </div>
        </div>
    );
}
export default Navbar;