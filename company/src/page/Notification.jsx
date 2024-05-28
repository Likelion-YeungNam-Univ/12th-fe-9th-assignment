import styled from "styled-components";
import { Banner, NavigationBar } from "../components/SupportComponent";
import { useEffect, useState } from "react";
const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;
const TextContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
`;
const MainText1 = styled.h1`
  font-size: 38px;
  color: black;
  text-align: center;
  letter-spacing: 2px;
  font-weight: 600;
  padding: 5px;
`;

const BoardContainer = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
`;
const BoradList = styled.div`
  width: 50%;
  height: 800px;
  background-color: #fff;
  overflow: auto;
  border: solid 1px black;
  border-radius: 15px;
`;

const BoardWrite = styled.div`
  height: 800px;
  width: 50%;
  background-color: #fff;
  padding: 0 20px;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
`;
const Input = styled.input`
  padding: 10px;
  font-size: 15px;
  width: 100%;
  border: 1px solid black;
  border-radius: 15px;
  margin-bottom: 20px;
  height: 30px;
`;

const TextArea = styled.textarea`
  margin-bottom: 20px;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 400px;
`;

const Button = styled.button`
  font-size: 16px;
  width: 100%;
  height: 50px;

  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const PostItem = styled.div`
  height: auto;
  padding: 10px;
  border: 1px solid black;
  border-radius: 15px;
`;
const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 90%;
`;

const Id=styled.div`
  width: 20px;
  height: 20px;
  background-color: #007bff;
  align-content:center;
  color:white;
  text-align: center;
  border-radius: 50%;

`

function Notification() {
  const [posts, setPosts] = useState([]);

  const submitPost = (e) => {
    e.preventDefault();
    const form = e.target;
    const newPost = {
      id: posts.length + 1,
      title: form.title.value,
      author: form.author.value,
      content: form.content.value,
    };
    setPosts([...posts, newPost]);
    form.reset();
  };

  const deletPost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <Container>
      <Banner></Banner>
      <NavigationBar />
      <TextContainer>
        <MainText1>NOTIFICATION</MainText1>
      </TextContainer>
      <BoardContainer>
        <BoradList>
          {posts.map((post) => (
            <PostItem key={post.id}>
              <div style={{display:"flex",flexDirection:"column"}}>
                <Id>{post.id}</Id>
                <strong>{post.title} 글쓴이 {post.author}</strong>
              </div>
              <div>{post.content}</div>
              <DeleteButton onClick={() => deletPost(post.id)}>
                삭제
              </DeleteButton>
            </PostItem>
          ))}
        </BoradList>
        <BoardWrite>
          <Form onSubmit={submitPost}>
            <span>
              제목:
              <Input
                type="text"
                name="title"
                placeholder="제목을 입력하세요."
              ></Input>
            </span>
            <span>
              글쓴이:
              <Input type="text" name="author" placeholder="글쓴이"></Input>
            </span>
            <span>내용:</span>
            <TextArea
              name="content"
              placeholder="내용을 입력하세요."
            ></TextArea>

            <Button type="submit">제출</Button>
          </Form>
        </BoardWrite>
      </BoardContainer>
    </Container>
  );
}
export default Notification;
