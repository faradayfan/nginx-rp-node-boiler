import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App';
import reducers from './reducers'

const store = createStore(reducers)


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <App />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
)