import React from 'react'
import styled from 'styled-components';

const Navbar = () => {
    return (
        <Container>
            <a href="#">Home</a>
            <a href="#">About Me</a>
            <a href="#">Portfolio</a>
            <a href="#">Services</a>
        </Container>
    )
}

const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(35px);
    position: absolute;
    z-index: 1;
    width: 100vw;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        color: #EEFCFF;
        font-weight: 300;
        font-size: 16px;
        display: inline-block;
        text-decoration: none;
        white-space: nowrap;
    }

    a:nth-child(1) {
        margin-left: 100px;
        margin-right: 100px;
    }

    a:nth-child(2) {
        margin-left: 100px;
        margin-right: 100px;
    }

    a:nth-child(3) {
        margin-left: 100px;
        margin-right: 100px;
    }

    a:nth-child(4) {
        margin-left: 100px;
        margin-right: 100px;
    }

    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        line-height: 30px;
        height: 150px;
        width: 100vw;
    }
`;

export default Navbar
