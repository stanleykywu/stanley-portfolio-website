import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    background: {
      default: "#002647"
    },
    text: {
      primary: "#ffffff"
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    fontWeightLight: 200,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    fontWeightBold: 500,
  },
});

function App () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Contact />
    </ThemeProvider>
  )
}

export default App