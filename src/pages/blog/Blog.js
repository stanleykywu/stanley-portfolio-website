import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Mail from '@mui/icons-material/Mail';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import raw from "raw.macro";
import { Instagram } from '@mui/icons-material';

const mainFeaturedPost = {
  title: 'Me Myself and Machine Learning',
  description:
    "We explore everything from stocks to privacy to podcasts!",
  image: 'https://media.istockphoto.com/photos/home-office-desk-table-with-coffee-cup-bouquet-of-spring-flowers-lily-picture-id1310455436?b=1&k=20&m=1310455436&s=170667a&w=0&h=chdh2N8T_Gk7D2-dOcUTT_YjS4B4eKNl98cgSK6nuzg=',
  imageText: 'main image description',
};

const posts = [raw('./12-06-2021-day.md'), raw('./10-08-2021-adversarial.md'), raw('./12-14-2020-stocks.md')];

const sidebar = {
  title: 'About',
  description:
    'Welcome to my Data Science and Machine Learning Blog. This is where I write reports for interesting DS related projects I do and any machine learning related topics I want to talk about! ',
  social: [
    { name: 'Instagram', icon: Instagram, link: 'https://www.instagram.com/stanleykywu/' },
    { name: 'LinkedIn', icon: LinkedInIcon, link: 'https://www.linkedin.com/in/stanleykywu/' },
    { name: 'Email', icon: Mail, link: 'mailto: stanleykywu@gmail.com' },
  ],
};

const theme = createTheme({
  palette: {
    background: {
      default: "#fff"
    },
    text: {
      primary: "#002647"
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
      <link
        rel="canonical"
        href="https://stanleywu.me/blogs"
        key="canonical"
      />
      <CssBaseline />
      <Container style={{ marginBottom: 40, marginTop: 100 }} maxWidth="lg">
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
