import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const PersonagensBox = styled.div`
  float: left;
  width: calc(100% / 4);
  height: 10rem;
  box-shadow: 5px 10px 8px #cdcdcd;
  border: 1px solid #cdcdcd;
  margin: 1rem 2rem;
  padding: 1rem;
`;

const SelectedName = styled.div`
  float:left;
  width: 50%;
`;

const ButtonDetails = styled.div`
  float: left;
  width: 50%;
`;

export class Characters extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          data: data.results,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const data = this.state;

    if (!data) {
      return (
        <div>não tem dataaaa</div>
      );
    }

    console.log('data no render', data, Object.values(data)[0], Object.values(data)[0].map((value) => { return value.name }));
    return (
      <section>
        <Title>Characters</Title>
        <div>
          {Object.values(data)[0].map((value) => {
            return (
              <PersonagensBox key={value.name}>
                <p>{value.name}</p>
                <img src="#" alt="imagem" />
                <SelectedName>
                  <form action="">
                    <input type="radio" name="gender" value="male" />Male
                    <input type="radio" name="gender" value="female" />Female
                    <input type="radio" name="gender" value="other" />Other
                  </form>
                </SelectedName>

                <ButtonDetails>
                  <Link to="/detalhes-do-personagem">Detalhes</Link>
                </ButtonDetails>
              </PersonagensBox>
            );
          })
          }
        </div>
      </section>
    );
  }
}

export default Characters;