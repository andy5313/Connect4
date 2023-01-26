const Scoreboard = ( {name, score, time} ) => {

  return (
    <div>
      <h1>{name}</h1>
      <h2>{score}</h2>
      <h2>{time.minutes} : {time.seconds < 10 && 0}{time.seconds}</h2>
    </div>
  );
};

export default Scoreboard;