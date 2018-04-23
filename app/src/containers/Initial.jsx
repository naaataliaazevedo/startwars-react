import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = styled.div`
  float: left;
  width: 100%;
`;

const Title = styled.h1 `
  font-size: 2rem;
  font-weight: bold;
`;

const Button = styled.div`
  border: 0.1rem solid;
  max-width: 20rem;
  width: 100%;
  margin: 0 auto;
`;

export class Initial extends React.Component {
  render() {
    return (
      <section>
        <Home>
          <Title>StarQuiz!</Title>
          <Button>
            <Link key="jogar" to="/characters">Jogar</Link>
          </Button>
        </Home>
      </section>
    );
  }
}

export default Initial;