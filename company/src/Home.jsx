import styled from "styled-components";
import NewArrivals from "./components/NewArrivals";
import BestProduct from "./components/BestProduct";
import { useNavigate } from "react-router-dom";
const Img = styled.img`
  margin-top: 60px;
  width: 100%;
  overflow-x: hidden;
  height: auto;

`;
const SizedBox=styled.div`
  width: 100%;
  background-color: white;
  height: 100px;
`
const Viedo=styled.video`
  width: 100%;
  height: auto;
`
function Home() {
  
  return (
    <>
    {/* 홈 로고 클릭 시 메인화면 이동 */}
      <Img src="/img/background.png" ></Img>
      <NewArrivals></NewArrivals>
      <SizedBox/>
      <BestProduct/>
      <Viedo src="./img/video.mp4"  autoplay loop muted/>
        
    </>
  );
}
export default Home;
