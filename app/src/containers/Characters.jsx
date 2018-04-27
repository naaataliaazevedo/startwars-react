import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import MoreInformations from '../components/MoreInformations';
import InputCharacter from '../components/InputCharacter';
import Clock from '../components/Clock';
import TimeOut from './TimeOut';
import Pagination from '../components/Pagination';

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

const ContainerHeader = styled.div`
  width: 100%;
  float: left;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  width: 50%;
  float: left;
`;

const BoxClock = styled.div`
  width: 50%;
  float: left;
  padding: 2rem 0;
  font-size: 2rem;
`;

const PersonagensBox = styled.div`
  float: left;
  width: calc((100% / 4) - 6px);
  height: 20rem;
  box-shadow: 5px 10px 8px #cdcdcd;
  border: 1px solid #cdcdcd;
  margin: 1rem 2rem;
  padding: 1.4rem;
`;

const SelectedName = styled.div`
  float: left;
  width: 46%;
  margin-right: 0.5rem;
`;

const ButtonDetails = styled.div`
  float: left;
  width: 46%;
  margin-left: 0.5rem;
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
  return <img src={image.src} alt={image.name} style={{width: '200px', height: '200px', margin: '2rem 0'}}/>;
});

export class Characters extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
      page: [],
      value: '',
      inputsValues: [],
      clock: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          page: data,
          data: data.results,
        });
      })
      .catch((error) => {
        console.error(error);
      });

    setTimeout(() => {
      console.log("setTimeout: Ja passou 2 minutos!");
      this.setState({
        clock: true,
      });
    }, 120000);
  }

  handleSubmit(event) {
    const data = this.state;
    const valueTarget = event.target[0].value;
    event.preventDefault();

    Object.values(data)[0].map((value) => { 
      return value.name === valueTarget ?
      this.setState(prevState => ({
        inputsValues: prevState.inputsValues.concat(valueTarget)
      }))
      : ''; 
    });
  }

  render() {
    const data = this.state;
    const { clock, inputsValues, page } = this.state;
    console.log('dentro do render', this.state.inputsValues);
    // console.log('data aqui no character', Object.values(data)[0]);
    // console.log('pageee', page);
    if (data.data.length === 0) {
      return (
        <div>não tem dataaaa</div>
      );
    }

    return (
      <section>
        <ContainerHeader>
          <Title>StarQuiz!</Title>
          <BoxClock>
            <Clock clock={clock} />
          </BoxClock>
        </ContainerHeader>
        {clock && clock === true &&
          <TimeOut>asdasdasdads</TimeOut>
        }
        <div>
          {Object.values(data)[0].map((value, ind) => {
            return (
              <PersonagensBox key={value.name}>
                {images[ind]}
                <SelectedName>
                  <InputCharacter data={value} onSubmit={this.handleSubmit} />
                </SelectedName>
                <ButtonDetails>
                  <MoreInformations data={value} />
                </ButtonDetails>
              </PersonagensBox>
            );
          })
          }
        </div>
        <Pagination data={page} />
      </section>
    );
  }
}

export default Characters;