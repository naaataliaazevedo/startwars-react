import React from 'react';
import Modal from './Modal';

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
        <button onClick={this.toggleModal}>?</button>
        <Modal 
          show={this.state.isOpen}
          onClose={this.toggleModal}>
          <form onSubmit={this.props.onSubmit}>
            <label>
              Nome:
              <input type="text" name={data.name} id={data.name} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </Modal>
      </div>
    );
  }
}

export default InputCharacter;