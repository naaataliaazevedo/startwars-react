import React from 'react';
import Modal from './Modal';

export class InputCharacter extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return(
      <div>
        <button onClick={this.toggleModal}>?</button>
        <Modal 
          show={this.state.isOpen}
          onClose={this.toggleModal}>
          <form action="">
            <input type="text" name="gender" value="male" />
          </form>
        </Modal>
      </div>
    );
  }
}

export default InputCharacter;