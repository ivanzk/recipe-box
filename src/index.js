import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import registerServiceWorker from './registerServiceWorker';

import App from './components/App';


ReactDOM.render (
	<MuiThemeProvider>
		<BrowserRouter basename="/recipe-box">
			<App />
		</BrowserRouter>
	</MuiThemeProvider>, 
	document.getElementById('root')
);

registerServiceWorker();
