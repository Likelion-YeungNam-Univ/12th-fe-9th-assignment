import { useParams } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.p`
  font-size: 30px;
  font-weight: 600;
  font-family: Montserrat;
`;

const SubTitle = styled.p`
  font-size: 12px;
  
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
`;
const Btn = styled.button`
  width: 150px;
  height: 30px;
  margin: 5px;
  border: solid 2px #ced4da;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    border: solid 2px red;
    color: red;
  }
`;
const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 15px;
`;
const ProductImg = styled.img`
  width: 200px;
  height: 350px;
  cursor: pointer;
`;
const ProdctContainer=styled.div`
    background-color: white;
    width: 266px;
    height: auto;
    margin:10px;
`

const ProductNameText=styled.p`
    color: black;
    font-size: 15px;
    font-weight: 500;
    padding: 0 10px;
`

const RedLine=styled.hr`
    height: 5px;
    width: 20px;
    background-color: red;
    border: none;
    margin-top: -15px;
`
const ProductSubText=styled.p`
    color: gray;
    font-size: 12px;
    padding: 0 10px;
`
const menuItem = ["프리미엄 펜", "펜•펜슬", "마카•컬러링", "노트•사무용품"];

const productInfo=[
    {img:"/img/product1.jpg",cate:"프리미엄 펜",name:"60주년 프러스펜 3000 데스크펜 스페셜 에디션"},
    {img:"/img/product2.jpg",cate:"프리미엄 펜",name:"153 리스펙트 리파인"},
    {img:"/img/product3.jpg",cate:"프리미엄 펜",name:"프러스펜 3000 프라임"},
    {img:"/img/product4.jpg",cate:"만년필",name:"153 아이디 만년필"},
    {img:"/img/product5.jpg",cate:"프리미엄 펜",name:"153 골드"},
    {img:"/img/product6.jpg",cate:"프리미엄 펜",name:"153 블랙 & 화이트"},

];
function BestProduct() {
    const {id}=useParams();
  return (
    <Container>
      <Title>BEST PRODUCT</Title>
      <RedLine></RedLine>
      <SubTitle>언제 어디서나 생활 속에 함께하는 모나미</SubTitle>
      <BtnContainer>
        {menuItem.map((item) => {
          return <Btn>{item}</Btn>;
        })}
      </BtnContainer>
      <ImgContainer>
        {productInfo.map((item, index) => {
          return <ProdctContainer>
            <ProductImg src={item.img} key={index} id={index}/>
            <ProductSubText>{item.cate}</ProductSubText>
            <ProductNameText>{item.name}</ProductNameText>
          </ProdctContainer>;
        })}
      </ImgContainer>
    </Container>
  );
}
export default BestProduct;
