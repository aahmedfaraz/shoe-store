import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// State
import GlobalState from './context/global/GlobalState';
// Routing elements
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render((
    <GlobalState>
        <Router>
            <App />
        </Router>
    </GlobalState>
), document.getElementById('root'));