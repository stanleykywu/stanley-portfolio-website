import React from 'react'
import Header from './header/Header'
import Experience from './experience/Experience'
import Research from './research/Research'
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
    palette: {
      background: {
        default: "#ffffff"
      },
      text: {
        primary: "#242526"
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
        <link
          rel="canonical"
          href="https://stanleywu.me"
          key="canonical"
        />
        <CssBaseline />
        <Header />
        <Research />
        <Experience />
      </ThemeProvider>
    )
  }
  
  export default Home