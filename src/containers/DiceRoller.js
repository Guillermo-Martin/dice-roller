import React, { Component } from 'react';
import Die from './../components/die';

class DiceRoller extends Component {
  // create state to manage the changing of the die's face
  state = {
    dieNumber1: <i class="fas fa-dice-one"></i>,
    dieNumber2: <i class="fas fa-dice-one"></i>
  }

  // roll function
  roll = () => {
    // array to hold all die icons
    let allDice = [
      <i class="fas fa-dice-one"></i>,
      <i class="fas fa-dice-two"></i>,
      <i class="fas fa-dice-three"></i>,
      <i class="fas fa-dice-four"></i>,
      <i class="fas fa-dice-five"></i>,
      <i class="fas fa-dice-six"></i>,
    ]

    // generate random number between 0-5 (for dice array)
    let randomNum1 = Math.floor(Math.random() * 6);
    let randomNum2 = Math.floor(Math.random() * 6);

    // use randomNum to get index of random die from array
    this.setState({dieNumber1: allDice[randomNum1], dieNumber2: allDice[randomNum2]});
  }

  render() {
    return (
      <div>
        <Die num={this.state.dieNumber1} />
        <Die num={this.state.dieNumber2} />
        <button onClick={this.roll}>Roll Dice</button>
      </div>
    );
  }
}

export default DiceRoller;