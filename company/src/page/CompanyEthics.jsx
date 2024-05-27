import styled from "styled-components";
import { Banner, NavigationBar } from "../components/InfoComponents";
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
const MainText2 = styled.h1`
  font-size: 38px;
  color: #c40f39;
  text-align: center;
  letter-spacing: 2px;
  font-weight: 600;
  padding: 5px;
`;

const ContentContainer=styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 0px auto;
    padding-top: 50px;
`
const TitleContainer=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

`
const Box=styled.div`
    width: 25px;
    height: 25px;
    text-align: center;
    background-color: #c40f39;
    color: white;
    font-size: 20px;
    border: none;
`
const BoxText=styled.p`
    color: black;
    font-size: 25px;
    margin: 0;
    padding-left:15px;
`

const MainText=styled.div`
    color: black;
    font-size: 15px;
    line-height: 1.5;
    padding: 15px 0px;
    letter-spacing: 2px;
`
function CompanyEthics() {
  return (
    <Container>
      <Banner></Banner>
      <NavigationBar></NavigationBar>
      <TextContainer>
        <MainText1>MONAMI </MainText1>
        <MainText2>Code of Conduct</MainText2>
      </TextContainer>
      {itemArray.map((item,index)=>{
        return(
            <ContentContainer>
                <TitleContainer>
                    <Box>{index+1}</Box>
                    <BoxText>{item.title}</BoxText>
                </TitleContainer>
                <MainText>{item.content}</MainText>
            </ContentContainer>
        )
      })}
    </Container>
  );
}

const itemArray = [
  {
    title: "소개",
    content:
      "해당 직속관리자에게 보고가 이루어졌을 때, 그 관리자는 즉시 그 사실을 경영지원 임원 혹은 법률담당에게 알려야 합니다. 어떤 경우에는 그 직원이 모나미 대표이사에게 직접 보고하는 경우도 있을 수 있습니다. 본 정책에 명백히 반한 사실을 보고한 직원은 그 사실을 보고했다는 이유만으로 그 누구로부터 그 어떠한 처벌을 받을 수 없으며 나아가 그러한 처벌을 그 직원에게 시도하는 그 행위가 해고를 포함한 징계행위에 해당됩니다.관리자들은 본 정책의 취지를 이해하고 정규직이나 비정규직 직원들 모두 다 이 정책의 영향을 받으며, 모든 부서원들이 본 규정과 이 법의 정신을 지키며, 최고 수준의 성실한 경영을 보임을 확신하여야 합니다. 관리자들은 모든 사업관계에 있어서 건전하고 성숙한 판단의 모범을 보여야 합니다. 근무시간 중이나 외부에서의 우리의 행동이 회사의 명성에 영향을 끼치기 때문에 모든 직원은 모나미의 이미지를 훼손하거나 거슬릴 수 있는 그 어떠한 행동이나 모임을 자제하기를 기대합니다.본 정책은 기업 행태의 주요한 몇 분야를 기술합니다. 그러나 사업을 하다 보면 맞닥뜨리는 모든 상황을 다 기술할 수 없음에 본 규정이 있음에도 불구하고 피할 수 없이 맞게 되는 소위 ‘gray area’가 있을 수 있습니다. 모나미 직원은 누구나 본 규정을 지키기를 기대하며, 불분명한 부분에 대한 결정을 해야 할 때에는, 자신의 가장 바람직한 판단이나 직속관리자, 인사 전문가, 경영지원 임원 혹은 법률담당에게서 반드시 자문을 구한 다음 행하기를 기대합니다. 본 규정을 위반한 직원은 해고를 포함한 징계조치를 당하게 됩니다.",
  },
  {
    title: "주주 및 투자자에 대한 자세",
    content:
      "모나미는 주주의 권리를 보호하고 주주의 정당한 요구와 제안을 존중합니다. 우리는 경영 정보를 성실히 공개하여 주주 및 투자자와 상호 신뢰관계를 구축하고 주주 이익의 극대화를 위해 노력합니다.모나미는 소액주주를 포함한 모든 주주를 공정하고 평등하게 대우합니다. 우리는 항상 전체주주의 이익을 고려하여 경영 의사를 결정함으로써 소액주주의 이익이나 권리가 부당하게 침해되지 않도록 합니다.",
  },
  {
    title: "고객에 대한 자세",
    content:
      "모나미는 항상 고객의 입장에서 생각하고 행동하며, 고객이 만족하고 신뢰할 수 있는 최상의 제품과 서비스를 제공하여 고객만족 실현을 위해 노력합니다. 모나미는 고객에게 제품 및 서비스 등에 관한 정확한 정보를 제공하고 과대선전이나 광고를 하지 않습니다.모나미는 고객의 이익과 안전, 개인정보를 보호하고 고객에게 부당한 행위를 하지 않습니다.우리는 소비자보호에 관한 법률을 존중하고 준수합니다.",
  },
  {
    title: "경쟁사와 협력회사에 대한 자세",
    content:
      "모나미는 자유경쟁의 원칙에 따른 공정하고 자유로운 시장경제 질서를 존중하고, 경쟁사와 정당하게 경쟁합니다. 모나미는 공정거래질서를 존중하고 공정거래 관련 법규를 준수합니다.모나미는 협력회사와 공정한 거래를 통해 상호신뢰와 협력관계를 구축함으로써 공동의 발전을 추구합니다. 모나미는 우월적 지위를 이용하여 어떠한 형태의 부당한 행위를 강요하거나 영향력을 행사하지 않습니다.",
  },
  {
    title: "임직원에 대한 책임",
    content:
      "모나미 직원 각자는 모나미 성공의 주요한 기여자입니다. 우리는 고객의 요구하는 내용과 품질을 훨씬 능가하는 품질 좋은 제품과 해결책을 만들기 위하여 한 팀으로 일을 합니다. 이를 실천함에 있어서 회사는 직무를 수행하는 자질 및 역량, 그리고 회사의 성공에 기여하는 정도에 따라 채용, 승진 및 보상을 하며, 이를 실천함에는 그 어떠한 차별을 배격합니다.남녀고용평등 법 실천자로서 회사는 모든 직원을 나이, 인종, 국적, 종교, 성, 임신여부, 결혼여부, 장애 등에 의한 차별 없이 공평하게 대할 것입니다. 모나미는 우수하면서도 다양한 직원분포가 우리의 경쟁력을 유지하는 원천임을 확인합니다.모나미는 임직원의 건강과 안전한 업무환경을 위해 노력하며 임직원 개개인의 자율과 창의를 존중하고 능력을 향상시킬 수 있는 기회를 공정하게 부여함으로써 인재육성과 함께 자아실현을 지원합니다. 모나미는 임직원의 독립적 인격과 기본권을 존중하며 자유로운 제안과 건의를 할 수 있는 환경을 조성합니다.임직원은 성적 굴욕감을 유발하는 것으로 인정되는 육체적·언어적·시각적 언어나 행동을 포함하여 건전한 동료관계를 해치는 일체의 언어나 행동을 하지 않습니다.",
  },
];
export default CompanyEthics;
