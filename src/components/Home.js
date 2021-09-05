import React from 'react'
import styled from 'styled-components'

const Home = () => {
    return (
        <Container>
            <Wrapper>
                <Content>
                    <h1>
                    <span>Hi, I'm</span><br />Zach Brobst
                    </h1>
                    <button>Book Me</button>
                </Content>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    width: 60%;
    height: 60%;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-size: 120px;
        font-weight: 900;
        color: #343434;

        @media (max-width: 1000px) {
            display: none;
        }
    }

    span {
        color: transparent;
        -webkit-text-stroke-width: 2.5px;
        -webkit-text-stroke-color: #343434;
    }

    button {
        width: 140px;
        height: 60px;
        margin-top: 25px;
        background-color: transparent;
        color: #343434;
        box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        border:  3.5px solid #343434;
        font-size: 18px;
        font-weight: 400;
        transition: all .6s ease-in-out;
  
        &:hover {
            transform: scale(1.05, 1.05);
            background-color: rgba(0, 0, 0, 0.5);
            color: #eefcff;
        }
    }
`;

export default Home