import React from 'react';

type State = {
  click: boolean
};

export class MoreInformations extends React.Component {
  static state: State;

  render() {
    const { click } = this.state;
    console.log('click in another component', click);
    return (
      <div>aquii</div>
    );
  }
}

export default MoreInformations;