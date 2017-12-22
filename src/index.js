import React from 'react';
import ReactDOM from 'react-dom';

// Modules
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// CSS
import './index.css';

// Components
import store from './store'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Router>    
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();