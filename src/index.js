import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'

const theme = createMuiTheme()

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.querySelector('#root')
)
