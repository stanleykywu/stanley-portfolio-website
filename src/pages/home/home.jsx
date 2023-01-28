import React from 'react'
import Header from './header/Header'
import Nav from './nav/Nav'
import Experience from './experience/Experience'
import Contact from './research/contact/Contact'
import Research from './research/Research'
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
    palette: {
      background: {
        default: "#002647"
      },
      text: {
        primary: "#f1f1e6"
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

function Home () {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Nav />
        <Research />
        <Experience />
      </ThemeProvider>
    )
  }
  
  export default Home