import React, { useState } from 'react';

const PopUp = ( {name, score, time} ) => {

  const handleSubmitStart = (event) => {
    event.preventDefault();
  };

  const handleScorebardSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <h1>{name}</h1>
      <div>
        <button onClick={handleSubmitStart}> Start a new game </button>
        <button onClick={handleScorebardSubmit}> Go to the scoreboard</button>
      </div>
    </div>
  );
};

export default PopUp;