import React from 'react'
import ReactDOM from 'react-dom'

import './App.css'

import { LangChanger } from './LangChanger'
import App from './App'


ReactDOM.render(
  <React.StrictMode>
    <LangChanger>
      <App />
    </LangChanger>
  </React.StrictMode>,
  document.getElementById('root')
)
