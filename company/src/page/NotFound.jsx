import styled from "styled-components";

const Container=styled.div`
    margin-top: 300px;
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: column;
`
const Text=styled.h1`
    text-align: center;
    font-size: 100px;
    font-weight: 900;
`

const SubText=styled.p`
    text-align: center;
    font-size: 50px;
    font-weight: 600;
`
function NotFound(){
    return(
        <Container>
            <Text>404 ERROR</Text>
            <SubText>찾을 수 없는 페이지입니다.</SubText>
        </Container>
    )

}
export default NotFound;