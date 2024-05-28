import styled from "styled-components";

const Introduction = () => {
  return (
    <Box>
      <Title>Introduction</Title>
      <hr />
      <h1>Introduction 페이지 입니다.</h1>
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

export default Introduction;
