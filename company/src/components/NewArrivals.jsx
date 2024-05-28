import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  font-size: 30px;
  font-weight: 600;
  font-family: Montserrat;
  justify-content:left;
  text-align: left;
  margin-bottom: 10px;
  margin-top: 10px;
`;
const RedLine=styled.hr`
    height: 5px;
    width: 20px;
    background-color: red;
    border: none;
    margin-left: 0%;
`

const SubTitle = styled.p`
  font-size: 12px;
  justify-content: left;
  color: black;
  text-align: left;
`;


const TitleContainer = styled.div`
  text-align: left;
  width: 80%;
  
`;
const ProductContainer = styled.div`
  width: 80%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-template-rows: repeat(2, 2fr);
  gap: 10px;
  justify-items: center;
  align-items: center;
  margin: 10px;
`;
const Img = styled.img`
  width: 800px;
  height: 500px;
`;

const imgArray = [
  "/img/arrival1.jpg",
  "/img/arrival2.jpg",
  "/img/arrival3.jpg",
  "/img/arrival4.jpg",
];
function NewArrivals() {
  return (
    <Container>
      <TitleContainer>
        <Title>NEW</Title>
        <Title>ARRIVALS</Title>
        <RedLine/>
        <SubTitle>가장 먼저 만나는 설레는 기다림</SubTitle>
      </TitleContainer>
      <ProductContainer>
        {imgArray.map((item) => {
          return <Img src={item}></Img>;
        })}
      </ProductContainer>
    </Container>
  );
}
export default NewArrivals;
