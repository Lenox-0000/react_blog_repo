import Feed from "./Feed"

function Home({posts, is_loading, fetch_error})
{
    return(
    <main className="Home">
        <main className="Home">
            {is_loading && <p className="statusMsg">Loading posts...</p>}
            {!is_loading && fetch_error && <p className="statusMsg" style={{ color: "red" }}>{fetch_error}</p>}
            {!is_loading && !fetch_error && (posts.length ? <Feed posts={posts} /> : <p className="statusMsg">No posts to display.</p>)}
        </main>
    </main>

    )
}

export default Home