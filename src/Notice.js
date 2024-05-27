import { useState } from "react"
import NoticeList from "./NoticeList";

const postlist = [
    {id: 1, body:'hi'},
    {id: 2, body:'hello'},
    {id: 3, body:'notice'}
]

const Notice = () => {

    const [posts,setPosts] = useState(postlist);

    const createNotice = (e) => {
        e.preventDefault()
        const newPosts = [...posts, {id: Date.now(), body: document.getElementById('post').value}];
        setPosts(newPosts);
        console.log(posts);
    }

    const deletePost = (id) => {
        const newPosts = posts.filter((e)=>{
            if (e.id === id){
                return false
            } else{
                return true
            }
        })
        setPosts(newPosts);
    }
    
    console.log(posts)

    return(
        <div>
            <h2>Notice Page</h2>
            <div>
                <input type="text" placeholder="내용입력" id="post"></input>
                <input type="button" value="create" onClick={createNotice}></input>
                <ul>
                    <NoticeList id={posts.id} body={posts.body} deletePost={deletePost}/>
                </ul>
            </div>
        </div>
    )
}

export default Notice;