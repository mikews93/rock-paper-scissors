import React, { useState } from 'react';
import { Rock, Paper, Scissors } from '../Images';
import classnames from 'classnames';
import './PlayerSection.scss';
import { ITEMS } from '../../../../constants';

const PlayerSection = ({ playerName, playerNumber, isNewRound }) => {
  const [election, setElection] = useState(null);

  const handleMovement = election => setElection(election);

  return (
    <div className={classnames('player-section', `player--${playerNumber}`)}>
      <div className="content">
        <label className="player-name">{playerName}</label>
        {election ? 'Waiting opponent move...' : 'Choose you move'}
        <div className={classnames('moves', { 'move--chosen': !!election })}>
          <img
            src={Rock}
            alt={ITEMS.rock}
            className={classnames('moves__item', `player--${playerNumber}`, {
              'item--selected': ITEMS.rock === election
            })}
            onClick={() => handleMovement(ITEMS.rock)}
          />
          <img
            src={Paper}
            alt={ITEMS.paper}
            className={classnames('moves__item', `player--${playerNumber}`, {
              'item--selected': ITEMS.paper === election
            })}
            onClick={() => handleMovement(ITEMS.paper)}
          />
          <img
            src={Scissors}
            alt={ITEMS.scissors}
            className={classnames('moves__item', `player--${playerNumber}`, {
              'item--selected': ITEMS.scissors === election
            })}
            onClick={() => handleMovement(ITEMS.scissors)}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerSection;
