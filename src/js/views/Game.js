import React from 'react';
import PropTypes from 'prop-types';

import reducer from '../reducers/index';
import {computerTurn, playerTurn, computerWin, playerWin, draw,
	setPlayerWeapon, setComputerWeapon, gameEnd} from '../actions/index';

import Score from './Score';
import PlayerBoard from './PlayerBoard';
import ComputerBoard from './ComputerBoard';
import Result from './Result';


const Game = ({
	score,
	username,
	status,
	classes
}) => {
	const checkWinner = (playerWeapon, computerWeapon) => {
		if (playerWeapon === 'rock' && computerWeapon === 'scissors') {
			reducer.dispatch(playerWin());
		} else if (playerWeapon === 'rock' && computerWeapon === 'paper') {
			reducer.dispatch(computerWin());
		} else if (playerWeapon === 'rock' && computerWeapon === 'rock') {
			reducer.dispatch(draw());
		} else if (playerWeapon === 'paper' && computerWeapon === 'scissors') {
			reducer.dispatch(computerWin());
		} else if (playerWeapon === 'paper' && computerWeapon === 'paper') {
			reducer.dispatch(draw());
		} else if (playerWeapon === 'paper' && computerWeapon === 'rock') {
			reducer.dispatch(playerWin());
		} else if (playerWeapon === 'scissors' && computerWeapon === 'scissors') {
			reducer.dispatch(draw());
		} else if (playerWeapon === 'scissors' && computerWeapon === 'paper') {
			reducer.dispatch(playerWin());
		} else if (playerWeapon === 'scissors' && computerWeapon === 'rock') {
			reducer.dispatch(computerWin());
		}
		reducer.dispatch(gameEnd());
		setTimeout(function() {
			// start game
			reducer.dispatch(playerTurn());
		}, 3000);
	}
	return (
		<section className={classes + ' row'}>
			<section className="columns small-order-2 medium-order-1 small-6 medium-4">
				<PlayerBoard status={status} weapons={reducer.getState().weapons} onSelect={(weapon) => {
					reducer.dispatch(setPlayerWeapon(weapon));
					reducer.dispatch(computerTurn());
				}} />
			</section>
			<section className="columns small-order-1 medium-order-2 small-12 medium-4">
				<Score className="columns small-12 medium-4" score={score} username={username} />
				<Result score={score} status={status} />
			</section>
			<section className="columns small-order-3 medium-order-3 small-6 medium-4">
				<ComputerBoard status={status} score={score} weapons={reducer.getState().weapons} onSelect={(weapon) => {
					reducer.dispatch(setComputerWeapon(weapon));
					checkWinner(reducer.getState().weapons.player, reducer.getState().weapons.computer);
				}}  />
			</section>
		</section>
	)
};

Game.propTypes = {
	score: PropTypes.object.isRequired,
	username: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
	classes: PropTypes.string.isRequired
};

export default(
	Game
);
