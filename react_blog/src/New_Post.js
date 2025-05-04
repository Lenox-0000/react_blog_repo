function New_Post( {handle_submit,post_title, set_post_title, post_body,set_post_body})
{
    return(
        <main className="New_post">
            <h2>New Post</h2>
            <form className="new_post_form" onSubmit={handle_submit}>
                <label htmlFor="post_title">Title:</label>
                <input id="post_title" type="text" required value={post_title} onChange={(event) => set_post_title(event.target.value)}/>

                <label htmlFor="post_body">Post:</label>
                <textarea id="post_body" required value={post_body} onChange={(event)=>set_post_body(event.target.value)}/>
                <button type="Submit">Submit</button>
            </form>
        </main>
    )
}

export default New_Post