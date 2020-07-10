import React from 'react';

function Die(props) {
  return(
      <i class={`fas fa-dice-${props.num}`}></i>
  );
}

export default Die;