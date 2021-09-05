import React from 'react'
import styled from 'styled-components'
import background from '../images/background.png'
import Sidebar from './Sidebar'
import Home from './Home'
import Navbar from './Navbar'

const App = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Sidebar />
        <Home />
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  background-color: #EEFCFF;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Wrapper = styled.div`
  background-image: url(${ background });
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;

export default App
