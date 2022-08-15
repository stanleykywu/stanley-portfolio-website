import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import raw from "raw.macro";

const mainFeaturedPost = {
  title: 'Stocks, Predictable or Unpredictable?',
  description:
    "We explore whether or not simple time series machine learning algorithms are able to predict stock price changes",
  image: 'https://media.istockphoto.com/photos/home-office-desk-table-with-coffee-cup-bouquet-of-spring-flowers-lily-picture-id1310455436?b=1&k=20&m=1310455436&s=170667a&w=0&h=chdh2N8T_Gk7D2-dOcUTT_YjS4B4eKNl98cgSK6nuzg=',
  imageText: 'main image description',
};

const posts = [raw('./12-14-2020-stocks.md')];

const sidebar = {
  title: 'About',
  description:
    'Welcome to my Data Science and Machine Learning Blog. This is where I write reports for interesting DS related projects I do and any machine learning related topics I want to talk about! ',
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'LinkedIn', icon: LinkedInIcon },
  ],
};

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

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container style={{ marginBottom: 40 }} maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={5} sx={{ mt: 1 }}>
            <Main title="From the firehose" posts={posts}/>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        description="Web Dev is Hard! :P"
      />
    </ThemeProvider>
  );
}
