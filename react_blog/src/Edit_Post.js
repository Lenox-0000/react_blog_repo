import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function Edit_Post({posts, handle_edit, edit_body, set_edit_body, edit_title, set_edit_title})
{
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    useEffect(() => {
        if (post) {
            set_edit_title(post.title);
            set_edit_body(post.body);
        }
    }, [post, set_edit_title, set_edit_body])

    return (
        <main className="New_post">
            {edit_title &&
                <>
                    <h2>Edit Post</h2>
                    <form className="new_post_form" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="post_title">Title:</label>
                        <input
                            id="post_title"
                            type="text"
                            required
                            value={edit_title}
                            onChange={(e) => set_edit_title(e.target.value)}
                        />
                        <label htmlFor="post_body">Post:</label>
                        <textarea
                            id="post_body"
                            required
                            value={edit_body}
                            onChange={(e) => set_edit_body(e.target.value)}
                        />
                        <button type="submit" onClick={() => handle_edit(post.id)}>Submit</button>
                    </form>
                </>
            }
            {!edit_title &&
                <>
                    <h2>Post Not Found</h2>
                    <p>Unable to find post.</p>
                    <p>
                        <Link to='/'>Visit Our Homepage</Link>
                    </p>
                </>
            }
        </main>
    )
}
export default Edit_Post