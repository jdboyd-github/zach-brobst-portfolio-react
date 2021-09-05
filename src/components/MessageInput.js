import React from 'react'
import styled from 'styled-components';

const Input = ({ type, placeholder }) => {
    return (
        <Container>
            <StyledInput
                placeholder={ placeholder && placeholder } 
                type={ type ? type : "text" }
                required
                autocomplete="off"
            />
            <Status />
        </Container>
    )
}

const Container = styled.div`
    width: 80%;
    max-width: 350px;
    min-width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledInput = styled.textarea`
    width: 80%;
    height: 125px;
    max-width: 350px;
    min-width: 250px;
    border: none;
    margin: .5rem 0;
    padding: 1.25rem;
    background-color: #F5F5F5;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    transition: all 0.2s ease-in;
    resize: none;
    overflow: hidden;

    &:hover {
        transform: translateY(-4px);
    }
`;

const Status = styled.div`
    height: 10px;
    width: 10px;
    background: #9D9D9D;
    border-radius: 10px;
    margin-left: 1rem;
    transition: all 0.2s ease-in;

    ${ StyledInput }:invalid + & {
        background: #FE2F75;
    }

    ${ StyledInput }:valid + & {
        background: #70ED89 !important;
    }

    ${ StyledInput }:focus + & {
        background: #FFA689 !important;
    }
`;

export default Input
