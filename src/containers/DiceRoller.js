import React, { Component } from 'react';
import Die from './../components/die';

class DiceRoller extends Component {
  // create state to manage the changing of the die's face
  state = {
    dieNumber: 1
  }

  // create a function that generates a random number between 1 and 6
  roll = () => {
    alert("You clicked the button!");
  }

  render() {
    return (
      <div>
        <Die 
          num={this.state.dieNumber}
        />
        <button onClick={this.roll}>Roll Dice</button>
      </div>
    );
  }
}

export default DiceRoller;