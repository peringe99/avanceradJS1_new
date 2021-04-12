import { Link } from "react-router-dom";

const HighscoreTable = ({ highscores }) => {
  return (
    <div class="fullDiv">
      <h1 class="highscoreTitle">HIGHSCORES</h1>
      <Link to="/new">
        <p class="registerLink">Register Highscore</p>
      </Link>
      {highscores.map((highscore) => (
        <div class="gameDiv" key={highscore.id}>
          <Link to={`/games/${highscore.game}`}>
            <h3>{highscore.game}</h3>
          </Link>
          <p class="nameAndDate">
            {highscore.player}, {highscore.date}
          </p>
          <p class="scoreHeader">{highscore.score}</p>
        </div>
      ))}
    </div>
  );
};

export default HighscoreTable;
