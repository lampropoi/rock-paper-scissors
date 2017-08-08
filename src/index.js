// import '../../node_modules/foundation-sites/dist/foundation-flex.css';
import './css/main.css';
import './css/foundation.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './js/reducers/index';

const render = () => {
	ReactDOM.render(
		<App state={reducer.getState()} />,
		document.getElementById('root')
	);
};

reducer.subscribe(render);
render();
