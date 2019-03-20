import React from 'react'
import { render } from 'react-dom'
import Alumnos from './components/alumnos/index.jsx'
import { Provider } from 'react-redux'
import Routes from './routes/index.jsx'



const app = document.getElementById('app')
const HolaMundo = <h1>Hola Mundo1</h1>
// render(HolaMundo,app)


render((
    <Routes></Routes>
), app)