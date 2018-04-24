import React from 'react';

type Props = {
  onClick?: () => {},
};

type State = {
  click: boolean
};

export class MoreInformations extends React.Component {
  static props: Props;
  static state: State;

  handleClick = (ev) => {
    console.log('adasdasdasdads');
  };

  render() {
    const click = this.state;
    // console.log('click in another component', click);
    return (
      <button onClick={this.handleClick}>aquii</button>
    );
  }
}

export default MoreInformations;