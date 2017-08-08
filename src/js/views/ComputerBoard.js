import React from 'react';
import ComputerTalk from './ComputerTalk.js';
import PropTypes from 'prop-types';

import rock from '../../img/Rock.png';
import paper from '../../img/Paper.png';
import scissors from '../../img/Scissors.png';

const ComputerBoard = ({
	onSelect,
	status,
	score,
	weapons
}) => {
	const availableWeapons = ['rock', 'paper', 'scissors'];
	if (status === 'computer_turn') {
		let random = Math.floor(Math.random() * (2 - 0 + 1) + 0);
		onSelect(availableWeapons[random]);
	}
	return (
		<section id="computer-board" className={status === 'computer' ? 'active' : ''}>
			<img className={status === 'end' && weapons.computer === 'rock' ? '' : 'hide'} src={rock} alt="rock" />
			<img className={status === 'end' && weapons.computer === 'paper' ? '' : 'hide'} src={paper} alt="paper" />
			<img className={status === 'end' && weapons.computer === 'scissors' ? '' : 'hide'} src={scissors} alt="scissors" />
			<ComputerTalk status={status} score={score} />
		</section>
	)
};

ComputerBoard.propTypes = {
	onSelect: PropTypes.func.isRequired,
	status: PropTypes.string.isRequired,
	score: PropTypes.object.isRequired,
	weapons: PropTypes.object.isRequired
};

export default(
	ComputerBoard
);
