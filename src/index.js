import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './components/reducers'
import App from "./components/TodoList/App";

const store = createStore(rootReducer);

render(<Provider store={store}><App/></Provider>, document.getElementById('root'));