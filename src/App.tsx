import React from 'react';
import './css/index.css';
import Header from './components/Header';
import styled from 'styled-components';
import background from './img/background.png';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DatePage from './components/DatePage';
import Personality from './components/Personality';
import Chemistry from './components/Chemistry/Chemistry';

const Container = styled.div`
  background-image: url(${background});
  width: 100%;
  min-height: 100vh;

  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Header />
          <Routes>
            <Route path="/date" element={<DatePage />}></Route>
            <Route path="/personality" element={<Personality />}></Route>
            <Route path="/chemistry" element={<Chemistry />}></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
