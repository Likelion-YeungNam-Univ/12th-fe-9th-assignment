import { useState } from "react"

const Notice = () => {

    const [posts,setPosts] = useState(['hi','hello'])

    const createNotice = () => {
        const newPost = document.getElementById('post').value
        setPosts([...posts, newPost])
        console.log(posts)
    }

    return(
        <div>
            <h2>Notice Page</h2>
            <div>
                <input type="text" placeholder="내용입력" id="post"></input>
                <input type="button" value="create" onClick={createNotice}></input>
                <ul>
                    {posts.map((e)=>
                    <li className="post">{e}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Notice;