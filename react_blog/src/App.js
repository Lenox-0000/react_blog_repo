import Home from './Home';
import New_Post from './New_Post';
import Post_Page from './Post_Page';
import About from './About'
import Missing from './Missing';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {format} from 'date-fns';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import api from './api/Posts';

function App()
{
  const [posts, set_posts] = useState([])

  const [search, set_search] = useState('')

  const [search_results, set_search_results] = useState([])

  const navigate = useNavigate()

  useEffect( () => { const fetch_posts = async () => { try { const response = await api.get('/posts'); set_posts(response.data)} catch(error) {if(error.response) { /*Not in the 200 HTTP response range*/ console.log(error.response.data); console.log(error.response.status); console.log(error.response.headers) } else {console.log(`Error: ${error.message}`)} } }; fetch_posts() }, [])

  const [post_title, set_post_title] = useState('')

  const [post_body, set_post_body] = useState('')

  useEffect(() => { const filtered_results = posts.filter((post) => ((post.body).toLowerCase()).includes(search.toLowerCase()) || ((post.title).toLowerCase()).includes(search.toLowerCase()));
  set_search_results(filtered_results.reverse()); }, [posts, search])

  async function handle_submit(event)
  {
    event.preventDefault()

    const id = posts.length ? posts[posts.length - 1].id + 1 : 1

    const datetime = format(new Date(), 'MMMM dd, yyyy pp')

    const new_post = { id, title: post_title, datetime, body: post_body}

    try
    {
      const response = await api.post('/posts', new_post)

      const all_posts = [...posts, response.data]

      set_posts(all_posts)

      set_post_title('')

      set_post_body('')

      navigate('/')
    }
    catch(error)
    {
      console.log(`Error: ${error.message}`)
    }
  }

  async function handle_delete(id)
  {
    try
    {
      await api.delete(`/posts/${id}`)

      const posts_list = posts.filter(post => post.id !== id)

      set_posts(posts_list)

      navigate('/')
    }
    catch(error)
    {
      console.log(`Error: ${error.message}`)
    }
  }

  const [edit_title, set_edit_title] = useState('')

  const [edit_body, set_edit_body] = useState('')

  async function handle_edit(id)
  {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')

    const updated_post = { id, title: post_title, datetime, body: post_body}
  }


  return(
    <div className="App">

      <Header title="React blog"/>

      <Nav search={search} set_search={set_search} />

      <Routes>

        <Route index element={<Home posts={search_results}/>}/>

        <Route path='/post'>

          <Route index element={<New_Post handle_submit={handle_submit} post_title={post_title} set_post_title={set_post_title} post_body={post_body} set_post_body={set_post_body}/>}/>

          <Route path=":id" element={<Post_Page posts={posts} handle_delete={handle_delete}/>}/>

        </Route>
          
          <Route path="/about" element={<About/>}/>

          <Route path="*" element={<Missing/>}/>

      </Routes>

      <Footer/>

    </div>
  );
}

export default App;
