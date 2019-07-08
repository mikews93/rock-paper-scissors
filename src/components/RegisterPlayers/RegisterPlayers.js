import React, { useState } from 'react';
import TextField from 'emerald-ui/lib/TextField';
import Button from 'emerald-ui/lib/Button';
import { GENERAL_ROUTES } from '../../constants';
import isEmpty from 'lodash/isEmpty';

const RegisterPlayers = props => {
  const [player1, setPlayer1] = useState({ name: '', error: null });
  const [player2, setPlayer2] = useState({ name: '', error: null });

  const onClickStart = () => {
    if (isEmpty(player1.name))
      return setPlayer1({ ...player1, error: 'Invalid name' });

    if (isEmpty(player2.name))
      return setPlayer2({ ...player2, error: 'Invalid name' });

    props.history.push(GENERAL_ROUTES.play, {
      player1: player1.name,
      player2: player2.name
    });
  };

  const clearError = (player, setPlayer) =>
    setPlayer({ ...player, error: null });
  return (
    <div>
      <label>Enter Player's Names</label>
      <TextField
        label="Player1"
        onChange={({ target: { value } }) => {
          return setPlayer1({ ...player1, name: value });
        }}
        onKeyPress={() => clearError(player1, setPlayer1)}
        errorMessage={player1.error}
        value={player1.name}
      />
      <TextField
        label="Player2"
        onKeyPress={() => clearError(player2, setPlayer2)}
        onChange={({ target: { value } }) =>
          setPlayer2({ ...player2, name: value })
        }
        value={player2.name}
        errorMessage={player2.error}
      />
      <Button shape="flat" color="primary" onClick={onClickStart}>
        Start
      </Button>
    </div>
  );
};

export default RegisterPlayers;
