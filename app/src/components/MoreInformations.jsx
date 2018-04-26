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

    return (
      <div>
        <ButtonDetails onClick={this.toggleModal}>...</ButtonDetails>
          <div>
            <Modal
              show={this.state.isOpen}
              onClose={this.toggleModal}>
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