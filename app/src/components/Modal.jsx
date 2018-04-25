import React from 'react';
import styled from 'styled-components';

const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.3);
  padding: 50px
`;

const ModalStyle = styled.div`
  background-color: #fff;
  border-radius: 5px;
  max-width: 500px;
  min-height: 300px;
  margin: 0 auto;
  padding: 30px;
  position: relative
`;

const ContainerCloseButton = styled.div`
  position: absolute;
  right: 1.2rem;
  top: 1.2rem;
  > .CloseButton {
    background-color: #fff;
    cursor: pointer;
  };
`;

export class Modal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    return(
      <BackdropStyle>
        <ModalStyle>
          {this.props.children}
          <ContainerCloseButton>
            <button className="CloseButton" onClick={this.props.onClose}>X</button>
          </ContainerCloseButton>
        </ModalStyle>
      </BackdropStyle>
    );
  }
}

export default Modal;