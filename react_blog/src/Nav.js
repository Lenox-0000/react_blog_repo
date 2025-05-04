import { Link } from "react-router-dom";


function Nav({ search, set_search})
{
    return(
    <nav className="Nav">
        <form className="search_form" onSubmit={(event) => event.preventDefault()}>
            <label htmlfor="search">Search Posts</label>
            <input id="search" type="text" placeholder="Search Posts" value={search} onChange={(event)=> set_search(event.target.value)}/>
        </form>
        <ul>
            <li> <Link to="/"> Home </Link> </li>

            <li> <Link to="/post"> Post </Link> </li>

            <li> <Link to="/about"> About </Link> </li>
        </ul>
    </nav>

    )
}

export default Nav