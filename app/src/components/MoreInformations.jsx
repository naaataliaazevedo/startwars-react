import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const ButtonDetails = styled.div`
  float: left;
  width: 100%;
  background: #f6f5e3;
  border: transparent;
  padding: 0.3rem;
  border-radius: 0.3rem;
  cursor: pointer;
  color: #000;
`;

const Title = styled.h2`
  font-size: 1.6rem;
  text-align: left;
  margin-top: 0;
`;
export class MoreInformations extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      homeworld: [],
      species: [],
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { data } = this.props;
    console.log('data aqui no information', data);
    fetch(data.homeworld)
      .then(response => response.json())
      .then(data => {
        this.setState({
          homeworld: data,
        });
      })
      .catch((error) => {
        console.error(error);
      })

    fetch(data.species)
      .then(response => response.json())
      .then(data => {
        this.setState({ species: data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { data, index } = this.props;
    const { homeworld, species } = this.state;
    // console.log('home', homeworld);
    // console.log('data in details', data);
    console.log('species', species);
    return (
      <div>
        <ButtonDetails onClick={this.toggleModal}>...</ButtonDetails>
          <div>
            <Modal
              show={this.state.isOpen}
              onClose={this.toggleModal}>
              <Title>Details</Title>
              <p>Eye color: {data.eye_color}</p>
              <p>Species: {species.name}</p>
              <p>Height: {data.height}</p>
              <p>Homeworld: {homeworld.name}</p>
              <p>Sexo: {data.gender}</p>
              <p>Skin color: {data.skin_color}</p>
            </Modal>
          </div>
      </div>
    );
  }
}

export default MoreInformations;