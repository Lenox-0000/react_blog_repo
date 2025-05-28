import { useParams, Link } from "react-router-dom"

function Post_Page( {posts, handle_delete})
{
    const {id} = useParams();

    const post = posts.find(post => (post.id).toString() === id)

    return(
    <main className="Post_page">
        <article className="post">
            {post && <> <h2>{post.title}</h2> <p className="post_date">{post.datetime}</p> <p className="post_body">{post.body}</p>
            <Link to={`/edit/${post.id}`}><button className="edit_button">Edit Post</button></Link>
            <button className="delete_button" onClick={() => handle_delete(post.id)}> Delete Post</button> </>}
            {!post && <> <h2>Unable to locate post</h2> <p> <Link to='/'> To Homepage </Link> </p> </>}
        </article>
    </main>

    )
}

export default Post_Page