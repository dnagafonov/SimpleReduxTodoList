import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './components/reducers'
import TryingForms from './App'

const store = createStore(rootReducer);

render(
        <TryingForms />,

    document.getElementById('root')
)