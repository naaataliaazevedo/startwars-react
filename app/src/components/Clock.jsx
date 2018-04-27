import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 120 };
    this.timer = 0;
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));
    console.log('hour', hours);
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    console.log('minutes', minutes);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    console.log('seconds', seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    if (this.timer == 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds
    });

    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    const { clock } = this.props;
    console.log('clock no clock', clock);
    return (
      <div>
        {this.state.time.m} : {this.state.time.s}
      </div>
    );
  }
}

export default Clock;