import styled from "styled-components";

const Home = () => {

    return(
        <>
            <Wrapper>
                <h1>그때,애</h1>
                <h3>갱년기 극복을 위한 부부 클리닉 서비스</h3>
            </Wrapper>
        </>

    )
}

const Wrapper = styled.div`

    height : 100vh;

    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`

export default Home;