import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore} from 'redux'

const store = createStore();

ReactDOM.render(<Provider store={store}> </Provider>, document.getElementById('root'));

serviceWorker.unregister();
