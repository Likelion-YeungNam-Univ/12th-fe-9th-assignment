import styled from "styled-components";

const Home = () => {
  return (
    <Box>
      <Title>LIKELION UNIV. YU 12th</Title>
      <hr />
      <SubTitle>'의미 있는 관계 속에서 의미 있는 일을 하자'</SubTitle>
      <BtnBox>
        <Btn>FrontEnd</Btn>
        <Btn>BackEnd</Btn>
        <Btn>P & D</Btn>
      </BtnBox>
    </Box>
  );
};

const Box = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 50px;
  color: #0d3f7a;
`;

const SubTitle = styled.h2`
  font-size: 40px;
  font-style: italic;
`;

const BtnBox = styled.div`
  display: flex;
  gap: 20px;
`;

const Btn = styled.button`
  width: 500px;
  height: 700px;
  font-size: 100px;
  border-radius: 30px;
  border-color: #0d3f7a;
  border-width: 10px;
  &:hover {
    background-color: white;
  }
`;

export default Home;
