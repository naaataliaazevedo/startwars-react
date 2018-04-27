import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
// https://gist.github.com/igmoweb/f1b26c5a8870d8f30bbb0cc348ee617b cronômetro
//https://www.codigofonte.com.br/codigos/contagem-regressiva

// format using momment https://stackoverflow.com/questions/16129157/countdown-timer-using-moment-js?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {

    return (
      <div>
        {moment().format('LTS')}
      </div>
    );
  }
}

export default Clock;