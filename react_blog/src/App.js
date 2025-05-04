import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import New_Post from './New_Post';
import Post_Page from './Post_Page';
import About from './About'
import Missing from './Missing';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {format} from 'date-fns';

function App()
{
  const [posts, set_posts] = useState([
  {
    id: 1,
    title: "My First Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 2,
    title: "My 2nd Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 3,
    title: "My 3rd Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 4,
    title: "My Fourth Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  }
])

  const [search, set_search] = useState('')

  const [search_results, set_search_results] = useState([])

  const navigate = useNavigate()

  const [post_title, set_post_title] = useState('')

  const [post_body, set_post_body] = useState('')

  useEffect(() => { const filtered_results = posts.filter((post) => ((post.body).toLowerCase()).includes(search.toLowerCase()) || ((post.title).toLowerCase()).includes(search.toLowerCase()));
  set_search_results(filtered_results.reverse()); }, [posts, search])

  function handle_submit(event)
  {
    event.preventDefault()

    const id = posts.length ? posts[posts.length - 1].id + 1 : 1

    const datetime = format(new Date(), 'MMMM dd, yyyy pp')

    const new_post = { id, title: post_title, datetime, body: post_body}

    const all_posts = [...posts, new_post]

    set_posts(all_posts)

    set_post_title('')

    set_post_body('')

    navigate('/')

  }

  function handle_delete(id)
  {
    const posts_list = posts.filter(post => post.id !== id)
    set_posts(posts_list)
    navigate('/')
  }


  return(
    <div className="App">
      <Header title="React blog"/>

      <Nav search={search} set_search={set_search}/>

      <Routes>

        <Route exact path="/" element={<Home posts={search_results}/>}/>

        <Route exact path="/post" element={<New_Post handle_submit={handle_submit} post_title={post_title} set_post_title={set_post_title} post_body={post_body} set_post_body={set_post_body}/>}/>

        <Route path="/post/:id" element={<Post_Page posts={posts} handle_delete={handle_delete}/>}/>
        
        <Route path="/about" element={<About/>}/>

        <Route path="*" element={<Missing/>}/>

      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
