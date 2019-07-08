import React from 'react';
import Button from 'emerald-ui/lib/Button';
import { GENERAL_ROUTES } from '../../constants';

const Home = props => {
  const handleClick = route => {
    props.history.push(route);
  };
  return (
    <>
      <label className="app__tittle">Rock, paper, scissors game</label>
      <label className="subtittle">by Mike</label>
      <div className="btn__group">
        <Button
          shape="flat"
          color="primary"
          onClick={handleClick.bind(null, GENERAL_ROUTES.registerPlayers)}
        >
          Start new game
        </Button>
        <Button
          shape="flat"
          color="info"
          onClick={handleClick.bind(null, GENERAL_ROUTES.statistics)}
        >
          Statistics
        </Button>
      </div>
    </>
  );
};

export default Home;
