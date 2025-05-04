import { Link } from "react-router-dom"

function Missing()
{
    return(
        <main className="Missing">
            <h2>Page not found</h2>
            <p> <Link to='/'> To Homepage</Link> </p>
        </main>
    )
}

export default Missing