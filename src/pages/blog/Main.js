import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';
import ReactAudioPlayer from "react-audio-player";
import podcast from './Adversarial_ML_Research_Podcast_feat_Matthew_Jagielski.mp3'

function Main(props) {
  const { posts, title } = props;
  const indAudio = 0;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post, index) => {
        if (index === indAudio) {
          return (
            <div>
              <Markdown className="markdown" key={post.substring(0, 40)}>
                {post}
              </Markdown>
              <ReactAudioPlayer
                src={podcast}
                controls
              />
            </div>
          )
        } else{
          return (<Markdown className="markdown" key={post.substring(0, 40)}>
            {post}
          </Markdown>)
        }
      })}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;
