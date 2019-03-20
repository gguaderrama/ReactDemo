import React from 'react'
import ReactDOM from 'react-dom'
import Alumnos from './components/alumnos/index.jsx'
import { Provider } from 'react-redux'

const app = document.getElementById('app')
const HolaMundo = <h1>Hola Mundo1</h1>
ReactDOM.render(<Alumnos></Alumnos>,app)