//회사 홈 
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
    return (
        <HomeContainer>
            <h1>Home 페이지</h1>
            <CardContainer>
                <Card to="/info">
                    <CardImage src={`${process.env.PUBLIC_URL}/1.png`} alt="Info" />
                    <CardText>Info</CardText>
                </Card>
                <Card to="/notice">
                    <CardImage src={`${process.env.PUBLIC_URL}/1.png`} alt="Notice" />
                    <CardText>Notice</CardText>
                </Card>
                <Card to="/goal">
                    <CardImage src={`${process.env.PUBLIC_URL}/1.png`} alt="Goal" />
                    <CardText>Goal</CardText>
                </Card>
            </CardContainer>
        </HomeContainer>
    );
}



const HomeContainer = styled.div`
    text-align: center;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    margin left : 20px;
`;

const Card = styled(Link)`
    text-align: center;
    text-decoration: none;
    color: black;
`;

const CardImage = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;

`;

const CardText = styled.p`
    margin-top: 10px;
    font-size: 18px;
    margin left : 20px;

`;

export default Home;
