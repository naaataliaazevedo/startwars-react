import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const Label = styled.label`
  width: 96%;
  float: left;
  text-align: left;
`;

const ButtonSubmit = styled.input`
  clear: both;
  float: right;
  color: #fff;
  background-color: #2fd463;
  border: 0.1rem solid transparent;
  padding: 0.5rem 2.4rem;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 0.3rem;
  margin: 1rem 0;
  cursor: pointer;
`;

const InputText = styled.input`
  width: 96%;
  float: left;
  padding: 0.3rem;
  margin: 1rem 0;
`;

const ButtonInput = styled.div`
  float: left;
  background: #66b0ff;
  border: transparent;
  width: 100%;
  padding: 0.3rem;
  border-radius: 0.3rem;
  cursor: pointer;
  color: #000;
`;
export class InputCharacter extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      value: '',
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* handleChange(event) {
    this.setState({value: event.target.value})
  }*/

  /* handleSubmit(event) {
    const { data } = this.props;
    const { value } = this.state;
    let newArr = [];
    console.log('submittttt', value);
    console.log('submit dados', data);
    event.preventDefault();
    if (value === data.name) {
      console.log('é igual');
      newArr.push(value);
      console.log('data e value', data.name, value);
      // console.log('newArr', newArr);
    }
    console.log('depois de tudo arr', newArr);
  }*/

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { data } = this.props;
    console.log('aaaaaaaa', this.props.onSubmit);
    return(
      <div>
        <ButtonInput onClick={this.toggleModal}>?</ButtonInput>
        <Modal 
          show={this.state.isOpen}
          onClose={this.toggleModal}>
          <form onSubmit={this.props.onSubmit}>
            <Label>Nome:</Label>
            <InputText type="text" name={data.name} id={data.name} />
            <ButtonSubmit type="submit" value="Enviar" />
          </form>
        </Modal>
      </div>
    );
  }
}

export default InputCharacter;