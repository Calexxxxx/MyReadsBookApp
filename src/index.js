// react
import React from 'react'
import ReactDOM from 'react-dom'

// react router
import { BrowserRouter as Router } from 'react-router-dom'

// app
import App from './App'

// styles
import './styles/index.css'

/**
 * @description renders the app and adds react-router-dom
 */
ReactDOM.render(
    <Router onUpdate={() => window.scrollTo(0, 0)}>
        <App />
    </Router>,
    document.getElementById('root'))
