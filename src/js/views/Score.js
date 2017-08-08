import React from 'react';
import PropTypes from 'prop-types';

const Score = ({
	score,
	username
}) => (
	<section id="scores">
		<h3>Score</h3>
		<table>
			<thead>
				<tr>
					<th>{username}</th>
					<th>Computer</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{score.player}</td>
					<td>{score.computer}</td>
				</tr>
			</tbody>
		</table>
	</section>
);

Score.propTypes = {
	score: PropTypes.object.isRequired,
	username: PropTypes.string.isRequired
};

export default(
	Score
);
