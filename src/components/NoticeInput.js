import React, { useState } from 'react'
import styled from 'styled-components'

const Title = styled.input`
    outline : none;
    border : 1px solid #f1f1f1;
    width : 100%;
    border-radius : 5px;
    height : 35px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    box-sizing : border-box;
    padding : 5px 10px;
`;

const TextArea = styled.textarea`
    width : 100%;
    height : 350px;
    margin : 10px 0;
    box-sizing : border-box;
    padding : 10px;
    outline : none;
    border : none;
    border-radius : 5px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    font-size : 15px;
    resize : none;
`;

const Btn = styled.button`
    border : none;
    border-radius : 10px;
    width : 100px;
    height : 40px;
    padding : 15px 15px;
    margin-right : 15px;
    display : flex;
    justify-content : center;
    align-items : center;
    font-size : 20px;
    font-weight : 600;
    float : right;
    background-color : ${props => props.bgColor};
    transition : 0.2s;
    cursor: pointer;

    &:hover{
        opacity : 0.9;
        /* color : #fff; */
        box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 8px;
    }
`;

const NoticeInput = ({ setPost, toUpdatePost, post, setToUpdatePost}) => {
    
    const [title, setTitle] = useState(toUpdatePost ? toUpdatePost.title : "");
    const [description, setDescription] = useState(toUpdatePost ? toUpdatePost.description : "");
    const [author, setAuthor] = useState(toUpdatePost ? toUpdatePost.author : "kim");
    
    const addPost = (e) => { 

        const id = toUpdatePost ? toUpdatePost.id : post.length+1;
        console.log('id', id);
        // console.log('toUpdatePost.id', toUpdatePost.id);

        
        if (toUpdatePost) { 
            setPost(prev => prev.map(el => {
                if (el.id === toUpdatePost.id) {
                    console.log("excuted");
                    return { id: toUpdatePost.id, title, description, author};
                } else {
                    return el;
                }
            }));
            setToUpdatePost(null);
        }
        else {
            setPost(prev => [...prev, { id : id, title, description, author: "kim" }]);
        }

    }

  return (
      <div>
          <Title onChange={(event) => setTitle(event.target.value)} value={title}></Title>
          <TextArea onChange={(event) => setDescription(event.target.value)} value={description}></TextArea>
          <Btn bgColor="#77dd77" onClick={(e) => addPost(e)}>POST</Btn>
    </div>
  )
}

export default NoticeInput