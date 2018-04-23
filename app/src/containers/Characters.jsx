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

let images = [
  {
    src: '../assets/luke-skywalker.jpg',
    name: 'Like Skywalker',
  },
  {
    src: '/assets/c3po.png',
    name: 'C3-P0'
  },
  {
    src: '/assets/r2-d2.gif',
    name: 'R2-D2',
  },
  {
    src: '/assets/darth-vader.png',
    name: 'Darth Vader',
  },
  {
    src: '/assets/leia-organa.png',
    name: 'Leia Organa',
  },
  {
    src: '/assets/owen-lars.jpg',
    name: 'Owen Lars',
  },
  {
    src: '/assets/beru-whitesun-lars.jpg',
    name: 'Breu Whitesun Lars',
  },
  {
    src: '/assets/r5-d4.jpg',
    name: 'R5-D4',
  },
  {
    src: '/assets/biggs-darklighter.jpg',
    name: 'Biggs Darklighter',
  },
  {
    src: '/assets/obi-wan-kenobi.jpg',
    name: 'Obi Wan Kenobi'
  },
].map((image) => {
  return <img src={image.src} alt={image.name} />
});

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

    // console.log('data no render', data, Object.values(data)[0], Object.values(data)[0].map((value) => { return value.name }));
    return (
      <section>
        <Title>Characters</Title>
        <div>
          {Object.values(data)[0].map((value, ind) => {
            return (
              <PersonagensBox key={value.name}>
                <p>{value.name}</p>
                {images[ind]}
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