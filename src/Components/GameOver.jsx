export default function GameOver({ winner, rematch, playerName }) {
  return (
    <div id="game-over">
      <h2>Game Over !</h2>
      {winner && <p>{winner === "X" ? playerName.X : playerName.O} won!</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button onClick={rematch}>Rematch!</button>
      </p>
    </div>
  );
}
