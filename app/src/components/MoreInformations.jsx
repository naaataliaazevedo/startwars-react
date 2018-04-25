import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';

export class MoreInformations extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { data, index } = this.props;
    console.log('data', data, index);
    return (
      <div>
        <button onClick={this.toggleModal}>...</button>
          <div>
            <Modal
              show={this.state.isOpen}
              onClose={this.toggleModal}>
              <p>nome: {data.name}</p>
              <p>cor dos olhos: {data.eye_color}</p>
              <p>sexo: {data.gender}</p>
              <p>cor da roupa: {data.skin_color}</p>
              <p>aqui caraiooo</p>
            </Modal>
          </div>
      </div>
    );
  }
}

export default MoreInformations;