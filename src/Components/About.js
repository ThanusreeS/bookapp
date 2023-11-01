import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography, Grid, Box, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import Footer from './Footer';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  margin: '0 auto',
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  textAlign: 'center',
  transition: 'transform 0.3s', // Add the transition property for the animation
  '&:hover': {
    transform: 'scale(1.05)', // Scale the card on hover
  },
  background: 'grey', // Set the background color to black
  color: 'white', // Set the text color to white
}));

const About = () => {
  // State to track like button status
  const [liked, setLiked] = useState(false);

  // Function to handle like button click
  const handleLikeClick = () => {
    setLiked(!liked); // Toggle the liked state
  };

  // Effect to change the title color when liked state changes
  useEffect(() => {
    if (liked) {
      document.title = 'Liked!';
    } else {
      document.title = 'Not Liked';
    }
  }, [liked]);

  return (
    <div>
      <Grid container spacing={2}>
        {/* First Card */}
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <Typography variant="h4">Bibilography</Typography>
              <Typography variant="body1">
                "A bibliography is a detailed list of all the sources consulted and cited in a research paper or project. The bibliography structure always includes citing the author's name, the title of the work, the year of publication, and the publisher for each source one consults for a paper or project.":
                
              </Typography>
              {/* Like button */}
              <IconButton onClick={handleLikeClick}>
                {liked ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
              </IconButton>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Add more cards here */}
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <Typography variant="h4">Hamlet</Typography>
              <Typography variant="body1">
              
              "Hamlet Summary. The ghost of the King of Denmark tells his son Hamlet to avenge his murder by killing the new king, Hamlet's uncle. Hamlet feigns madness, contemplates life and death, and seeks revenge. His uncle, fearing for his life, also devises plots to kill Hamlet.":
              </Typography>
              {/* Like button */}
              <IconButton onClick={handleLikeClick}>
                {liked ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
              </IconButton>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
      <Box>
        <Footer />
      </Box>
    </div>
  );
};

export default About;