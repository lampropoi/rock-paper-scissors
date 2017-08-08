import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import SetUsername from './js/views/SetUsername';
import Game from './js/views/Game';
import reducer from './js/reducers/index';
import {setUsername} from './js/actions/index';

import './App.css';

const App = ({state}) => {
	var subHeader1Class = classNames({
		'columns': true,
		'small-8': true,
		'hide': state.username
	});
	var subHeader2Class = classNames({
		'columns': true,
		'small-12': true,
		'hide': !state.username
	});
	return (
		<section>
			<header>
				<section id="bar"><h1>Rock Paper Scissors</h1></section>
				<section className="sub-header row align-center">
					<h2 className={subHeader1Class}>Hello human! Are you ready for the ultimate challenge against the machine AI?</h2>
					<h2 className={subHeader2Class}>Let's see what you've got!</h2>
				</section>
			</header>
			<main>
				<section className="row align-center">
					<section className="columns small-8 medium-6 large-4">
						<SetUsername onSet={(value) => {
							reducer.dispatch(setUsername(value));
						}} classes={state.username ? 'hide' : ''} />
					</section>
				</section>
			<Game score={state.score} username={state.username} status={state.status} classes={state.username ? '' : 'hide'} />
			</main>
			<footer>
				Created by lampropoi (Ioanna Lampropoulou) <a href="https://github.com/lampropoi/rock-paper-scissors">Code on Github</a>
			</footer>
		</section>
	)
};

App.propTypes = {
	state: PropTypes.object.isRequired
};

export default(
	App
);
