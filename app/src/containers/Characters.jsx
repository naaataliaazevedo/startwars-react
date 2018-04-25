import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MoreInformations from '../components/MoreInformations';

import LukeSkywalker from '../assets/luke-skywalker.jpg';
import C3P0 from '../assets/c3po.png';
import R2D2 from '../assets/r2-d2.gif';
import DarthVader from '../assets/darth-vader.png';
import LeiaOrgana from '../assets/leia-organa.png';
import OwenLars from '../assets/owen-lars.jpg';
import BreuWhitesunLars from '../assets/beru-whitesun-lars.jpg';
import R5D4 from '../assets/r5-d4.jpg';
import BiggsDarklighter from '../assets/biggs-darklighter.jpg';
import ObiWanKenobi from '../assets/obi-wan-kenobi.jpg';

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const PersonagensBox = styled.div`
  float: left;
  width: calc(100% / 4);
  height: 20rem;
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
    src: LukeSkywalker,
    name: "Like Skywalker"
  },
  {
    src: C3P0,
    name: "C3-P0"
  },
  {
    src: R2D2,
    name: "R2-D2"
  },
  {
    src: DarthVader,
    name: "Darth Vader"
  },
  {
    src: LeiaOrgana,
    name: "Leia Organa"
  },
  {
    src: OwenLars,
    name: "Owen Lars"
  },
  {
    src: BreuWhitesunLars,
    name: "Breu Whitesun Lars"
  },
  {
    src: R5D4,
    name: "R5-D4"
  },
  {
    src: BiggsDarklighter,
    name: "Biggs Darklighter"
  },
  {
    src: ObiWanKenobi,
    name: "Obi Wan Kenobi"
  }
].map(image => {
  return <img src={image.src} alt={image.name} style={{width: '200px', height: '200px'}}/>;
});

export class Characters extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
    };
    // this.handleClick = this.handleClick.bind(this);
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
                    <input type="text" name="gender" value="male" />
                  </form>
                </SelectedName>
                <MoreInformations data={value} index={ind} />

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