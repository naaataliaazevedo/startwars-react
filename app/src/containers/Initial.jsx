import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import darthVader from '../assets/darth-vader.jpg';
// imagens https://www.pinterest.pt/pin/372039619211406791/
const Home = styled.div`
  float: left;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const Button = styled.div`
  border: 0.1rem solid black;
  max-width: 20rem;
  width: 100%;
  margin: 0 auto;
`;

export class Initial extends React.Component {
  render() {
    const linkButton = {
      color: 'black',
      textDecoration: 'none',
      display: 'block',
      padding: '0.8rem',
    };

    return (
      <section>
        <Home>
          <img src={darthVader} alt="Seja Bem-vindo" style={{width: 200, height: 200}} />
          <Title>StarQuiz!</Title>
          <Button>
            <Link key="jogar" to="/characters" style={linkButton}>Jogar</Link>
          </Button>
        </Home>
      </section>
    );
  }
}

export default Initial;