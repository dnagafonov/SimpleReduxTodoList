import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {createStore, Provider} from 'react-redux'

const store = createStore();

ReactDOM.render(<Provider store={store}> </Provider>, document.getElementById('root'));

serviceWorker.unregister();
