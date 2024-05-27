import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

const BannerContainer = styled.div`
  display: flex;
  height: 300px;
  flex-direction: column;
  background-image: url("../img/infoback.jpg");
  background-size: cover;
  text-align: center;
`;
const Title = styled.h2`
  color: white;
  text-align: center;
  font-size: 34px;
  font-weight: 500;
`;
const RedLine = styled.hr`
  height: 5px;
  width: 20px;
  background-color: red;
  border: none;
`;
const SubTitle = styled.p`
  color: white;
  text-align: center;
  font-size: 15px;
  font-weight: 300;
`;

const SubNavBar = styled.ul`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 150px;
  align-items: center;
  margin: -70px auto;
  list-style: none;
`;
const Li = styled.li`
  height: 38px;
  width: 155px;
  background-color: white;
  display: inline;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: black;
  padding: 10px;
  cursor: pointer;
  border: solid 1px #6666;
  &:hover {
    color: white;
    background-color: #c40f39;
  }
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
const MainText2 = styled.h1`
  font-size: 38px;
  color: #c40f39;
  text-align: center;
  letter-spacing: 2px;
  font-weight: 600;
  padding: 5px;
`;

const CEOImg = styled.img`
  width: 80%;
  height: auto;
  display: block;
  margin: 0 auto;
`;

const InfoTextContainer = styled.div`
  width: 80%;
  margin: 100px auto;
  display: flex;
  height: auto;
  flex-direction: row;
  justify-content: space-between;
`;
const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  color: gray;
  font-size: 15px;
  line-height: 0.8;
`;

function CompanyInfo() {
  return (
    <Container>
      <BannerContainer>
        <Title>모나미소개</Title>
        <RedLine />
        <SubTitle>언제 어디서나 모나미는 당신 곁에 있습니다.</SubTitle>
      </BannerContainer>
      <SubNavBar>
        {itemArray.map((item) => (
          <Link to={item.path}>
            <Li>{item.name}</Li>
          </Link>
        ))}
      </SubNavBar>
      <TextContainer>
        <MainText1>CEO</MainText1>
        <MainText2>MESSAGE</MainText2>
      </TextContainer>
      <CEOImg src="../img/ceoImg.png" />
      <InfoTextContainer>
        <InfoText>
          {companyInfo1.map((item) => (
            <p>{item}</p>
          ))}
        </InfoText>
        <InfoText>
          {companyInfo2.map((item) => (
            <p>{item}</p>
          ))}
        </InfoText>
      </InfoTextContainer>
    </Container>
  );
}
const itemArray = [
  { name: "CEO 메시지", path: "/introduction" },
  { name: "회사정보", path: "/introduction/company-info" },
  { name: "회사연혁", path: "/introduction/history" },
  { name: "윤리강령", path: "/introduction/ethics" },
  { name: "투자정보", path: "/introduction/investor-info" },
  { name: "CI", path: "/introduction/ci" },
  { name: "채용정보", path: "/introduction/careers" },
  { name: "찾아오시는 길", path: "/introduction/directions" },
  { name: "안전보건 경영방침", path: "/introduction/safety-management" },
];

const companyInfo1 = [
  "안녕하십니까? (주)모나미 대표이사 송하경입니다.",
  "언제나 한결같이 모나미에 애정과 관심을 보여주시는 고객 및 주주 여러분들께 깊은 감사를 드립니다.",
  "1960년 창립된 광신화학공업사에서 출발한 모나미의 역사가 어느덧 반백년이 넘었습니다.",
  "지금의 모나미를 있게한 ‘모나미 153’볼펜은 지난 50여 년간 꾸준한 사랑을 받으며",
  "모나미를 필기구의 대명사이자 국민 브랜드로 성장시켰습니다.",
  "이처럼 많은 분들의 사랑에 힘입어 문구 업계의 혁신을 주도할 수 있었으며,",
  "사인펜, 프러스펜, 네임펜, 보드 마카 등 수 많은 히트작들을 선보일 수 있었습니다.",
  "필기구를 넘어 종합문구 분야의 선도적인 기업으로 건실한 성장을 이뤄온 모나미는 국내시장 뿐 아니라",
  "해외시장에서도 꾸준한 성장을 거둬 전세계 다양한 국가로 수출되고 있습니다.",
  "하지만 모나미는 지난 50여 년간의 성과에 만족하지 않고 새로운 출발에 나서려고 합니다.",
];

const companyInfo2 = [
  "종합문구분야의 선두 자리를 넘어 문구와 유통을 아우르는 새로운 비즈니스 모델을 만들어 나가고 있습니다.",
  "하루가 다르게 변하는 트렌드와 시대의 변화에 대처하기 위해서",
  "모나미의 기업 문화 역시 새롭게 만들어 나가고 있습니다.",
  "미래를 긍정적으로 바라보면서 준비하고, 항상 즐거운 변화를 추구하는 기업이 되겠습니다.",
  "시장에 대해서는 항상 겸손하고, 고객에 대해서는 항상 함께하는 친구 같은 마음과 자세로 대할 것입니다.",
  "앞으로 모나미는",
  "'오래된 친구지만 항상 신선하고 놀라움으로 가득찬, 그리고 미래를 위해 쉼 없이 노력하는' 기업이 되고자",
  "합니다. 모나미의 새로운 변화와 도전을 지켜봐 주시길 바라며,",
  "앞으로도 변함없는 사랑과 격려를 부탁드립니다.",
  "감사합니다.",
];
export default CompanyInfo;
