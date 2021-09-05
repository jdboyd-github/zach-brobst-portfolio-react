import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'
import Input from './Input'
import MessageInput from './MessageInput'

const Sidebar = () => {
    return (
        <Container>
            <Wrapper>
            <Logo>
                <img src={ logo } alt="" />
                <h3>
                    Zach <span>Brobst</span>
                </h3>
            </Logo>
            <span />
            <Form>
                <h3>Contact Me</h3>
                <Input placeholder="Full Name" />
                <Input type="email" placeholder="Email" />
                <Input type="text" placeholder="Phone" />
                <MessageInput type="text" placeholder="Message" />
                <button>Submit</button>
            </Form>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    min-width: 400px;
    backdrop-filter: blur(35px);
    background-color: rgba(255, 255, 255, 0.65);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 2rem;

    span {
        margin-top: 30px;
    }

    @media (max-width: 1000px) {
        width: 100vw;
        position: absolute;
        padding: 0;
        margin-top: 70px;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const Logo = styled.div`
    text-align: center;

    img {
        height: 5rem;
    }

    h3 {
        text-align: center;
        color: black;
        font-size: 22px;
        font-weight: 300;
    }

    span {
        font-weight: 600;
    }
`;

const Form = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        color: #666666;
        margin-bottom: 2rem;
    }

    button {
        width: 80%;
        height: 40px;
        max-width: 350px;
        min-width: 250px;
        border: none;
        margin: 1rem 0;
        padding: 0 1rem;
        background-color: #70EDB9;
        color: #FFFFFF;
        font-weight: 600;
        box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        transition: all 0.3s ease-in;
        font-size: 15px;

        &:hover {
            transform: translateY(-4px);
        }
    }
`;

export default Sidebar