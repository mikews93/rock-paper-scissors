import React, { useState } from 'react';
import { PlayerSection, GameSection } from './components';
import './GameField.scss';

const GameField = ({ location: { state } }) => {
  const [player1Move, setPlayer1Move] = useState(null);
  const [player2Move, setPlayer2Move] = useState(null);

  const player1 = state && state.player1 ? state.player1 : null;
  const player2 = state && state.player2 ? state.player2 : null;

  const showAnimation = player1Move && player2Move;

  return (
    <div className="game-field">
      <PlayerSection
        playerName={player1}
        onSelectMove={setPlayer1Move}
        playerNumber="1"
      />
      <GameSection
        showAnimation={showAnimation}
        player1Move={player1Move}
        player2Move={player2Move}
      />
      <PlayerSection
        playerName={player2}
        onSelectMove={setPlayer2Move}
        playerNumber="2"
      />
    </div>
  );
};

export default GameField;
