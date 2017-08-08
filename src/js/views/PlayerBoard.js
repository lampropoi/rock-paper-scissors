import React from 'react';
import PropTypes from 'prop-types';

import rock from '../../img/Rock.png';
import paper from '../../img/Paper.png';
import scissors from '../../img/Scissors.png';

const PlayerBoard = ({
	onSelect,
	status,
	weapons
}) => (
	<section id="player-board">
		<button type="button" disabled={status === 'end'} className={weapons.player === 'rock' ? 'active' : ''} onClick={() => onSelect('rock')}><img src={rock} alt="rock"/></button>
		<button type="button" disabled={status === 'end'} className={weapons.player === 'paper' ? 'active' : ''} onClick={() => onSelect('paper')}><img src={paper} alt="paper"/></button>
		<button type="button" disabled={status === 'end'} className={weapons.player === 'scissors' ? 'active' : ''} onClick={() => onSelect('scissors')}><img src={scissors} alt="scissors"/></button>
	</section>
);

PlayerBoard.propTypes = {
	onSelect: PropTypes.func.isRequired,
	status: PropTypes.string.isRequired,
	weapons: PropTypes.object.isRequired
};

export default(
	PlayerBoard
);
