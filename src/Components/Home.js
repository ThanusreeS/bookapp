import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardContent, Typography, CardMedia, Grid, Button, Container, AppBar, Toolbar,CssBaseline,Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './Footer';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 300,
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  textAlign: 'center',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  position: 'relative',
}));

const themeLight = createTheme({
  palette: {
    mode: 'light',
  },
});

const themeDark = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Home = () => {
  const [theme, setTheme] = useState(themeLight);
  
  const toggleTheme = () => {
    setTheme(theme === themeLight ? themeDark : themeLight);
  };


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  const animeData = [
    {
      title:'NameOfWind',
      description: 'Best soul ever',
      image:'https://www.shutterstock.com/image-photo/setif-algeria-may-07-2023-260nw-2299573527.jpg'
    },
    {
      title: 'Hamlet',
      description: 'Best book ever',
      image: 'https://i.pinimg.com/736x/66/cf/ee/66cfee59afc0cafb7e3c226e1d16964f.jpg',
    },
    {
      title: 'Merchantofvenice',
      description: 'Best tale ever',
      image: 'https://i.pinimg.com/736x/d4/ac/6e/d4ac6e89aace43e5bda86e0d67e1eceb.jpg',
    },
    // Add more anime cards here...
  ];

  const randomImages = [
    'https://i.pinimg.com/736x/f7/c6/35/f7c6359bfc632ab9fceaf369ed8f647a.jpg',
    'https://i.pinimg.com/736x/ab/09/58/ab0958418d1714a804c4ca60e0d765cf.jpg',
    'https://i.pinimg.com/550x/f7/58/e4/f758e4879c50259926de5ea208c2d342.jpg',
    'https://i.pinimg.com/originals/c5/3a/7f/c53a7f7ca7612ebe884e08559948464d.jpg',
  ];

  const animeWallpapers = [
    'https://blog-cdn.reedsy.com/directories/admin/attachments/large_Glass-wall-353a56.jpg',
    'https://1stwebdesigner.com/wp-content/uploads/2011/05/the-great-gatsby.jpg',
    'https://blog.hubspot.com/hs-fs/hubfs/%5BAgency_Post%5D/annihilation_cover.jpg?width=640&name=annihilation_cover.jpg',
    'https://i.pinimg.com/736x/aa/d5/9a/aad59ab0c3bcdfebb84c035d5995402d.jpg',
    'https://www.portersquarebooks.com/sites/portersquarebooks.com/files/tellthewolvesimhome.jpg',
    'https://www.portersquarebooks.com/sites/portersquarebooks.com/files/getintrouble.jpg',
    'https://imgv3.fotor.com/images/gallery/Fiction-Book-Covers.jpg',
    // Add more anime wallpapers here...
  ];

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#f5f5f5', minHeight: '100vh' }}>
        <CssBaseline />
        <AppBar position="sticky" color='grey'>
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Top Selling Books
            </Typography>
            <Button color="inherit" onClick={toggleTheme}>
              Change Theme
            </Button>
          </Toolbar>
        </AppBar>
       
        <Container>
          <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={12} sm={6} md={8}>
              <Slider {...settings}>
                {animeData.map((anime, index) => (
                  <div key={index}>
                    <StyledCard>
                      <CardMedia component="img" height="140" image={anime.image} alt={anime.title} />
                      <CardContent>
                        <Typography gutterBottom variant="h4">
                          {anime.title}
                        </Typography>
                        <Typography variant="body2">{anime.description}</Typography>
                      </CardContent>
                    </StyledCard>
                  </div>
                ))}
              </Slider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
                <Typography variant="h6" gutterBottom>
                  Random Anime Images
                </Typography>
                <Grid container spacing={2}>
                  {randomImages.map((image, index) => (
                    <Grid item xs={6} key={index}>
                      <img src={image} alt={`Random ${index}`} style={{ width: '100%' }} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Typography variant="h4" style={{ marginTop: '24px' }}>
            Book Images
          </Typography>
          <Grid container spacing={2}>
      
            {animeWallpapers.map((wallpaper, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <StyledCard>
                  <CardMedia component="img" height="140" image={wallpaper} alt={`Book ${index}`} />

                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      BooK {index + 1}
                    </Typography>
                    <Typography variant="body2"></Typography>Exotic books
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Home;