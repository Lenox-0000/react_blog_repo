import { Link } from "react-router-dom"

function Post({post})
{
    return(

        <article className="Post">
            <Link to={`/post/${post.id}`}> 
            <h2>{post.title}</h2>
            <p className="post_date">{post.datetime}</p>
            </Link>
            <p className="post_body">
                { (post.body).length <= 25 ? post.body : `${(post.body).slice(0,25)}...`}
            </p>
        </article>

    )
    
}

export default Post