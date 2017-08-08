import React from 'react';
import PropTypes from 'prop-types';

const Result = ({
	score,
	status
}) => {
	// define when to show it
	var classes;
	if (status === 'end') {
		classes = '';
	} else {
		classes = 'hide';
	}

	var message = score.lastWinner.charAt(0).toUpperCase() + score.lastWinner.slice(1);
	if (score.lastWinner === 'draw') {
		message += '!';
	} else {
		message += ' won!';
	}

	return (
		<section id="result-message" className={classes}>
			<h3>{message}</h3>
		</section>
	)
};

Result.propTypes = {
	score: PropTypes.object.isRequired,
	status: PropTypes.string.isRequired
};

export default(
	Result
);
