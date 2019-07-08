import React from 'react';
import './GameSection.scss';
import classnames from 'classnames';
import { Rock, RockFlipped } from '../Images';

const GameSection = ({ showAnimation }) => {
  const round = 1;
  return (
    <div className="game-section">
      <div className="score-board">
        <label className="round">Round {round}</label>
      </div>
      <div className="fight-section">
        <img
          className={classnames('move', {
            show: showAnimation
          })}
          src={Rock}
          alt="user-move"
        />
        <img
          className={classnames('move', {
            show: showAnimation
          })}
          alt="user-move"
          src={RockFlipped}
        />
      </div>
      <div className="winner">
        <label>{}</label>
      </div>
    </div>
  );
};

export default GameSection;
