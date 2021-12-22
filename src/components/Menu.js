import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Menu() {
  const { gameState, setGameState, userName, setUserName } =
    useContext(GameStateContext);
  return (
    <div className="Menu">
      <label>Unesite ime:</label>
      <input
        type="text"
        placeholder="Belma"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setGameState("playing");
        }}
      >
        Pocnite kviz
      </button>
    </div>
  );
}

export default Menu;
