import { useState } from "react";

export default function Player({ initialName, symbol, isActive, savedName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function editClick() {
    setIsEditing((current) => !current);
  }

  function nameChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onChange={nameChange}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button
        onClick={() => {
          editClick();
          savedName(symbol, playerName);
        }}
      >
        {isEditing ? "Save" : "Edit"}{" "}
      </button>
    </li>
  );
}
