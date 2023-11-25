import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';

import './App.css';
import MenuAppBar from './AppBar';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import ReserveCard from './Reserve';

import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import MapLocation from './MapLocation';
import Gallery from './Gallery';
import Amenities from './Amenities';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

function App() {

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid xs={12 }md={12}>
            <MenuAppBar></MenuAppBar>
          </Grid>
          <Grid container xs={12}>
            <Grid sm={2}></Grid>
            <Grid xs={12} sm={8} md={8}>
              <Box display="flex">
                <Typography variant="h5">Cozy Private Suite Nestled Near the Mountains</Typography>
              </Box>
            </Grid>
            <Grid sm={2}></Grid>
            <Grid sm={2}></Grid>
            <Grid xs={12} sm={8} md={8}>
              <Box display="flex">
                <Typography variant="subtitle1">Located in Colorado near Sterling Ranch, Roxborough Park, and Highlands Ranch</Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container md={12}>
            <Grid md={2}></Grid>
            <Grid md={8}>
              <Gallery></Gallery>
            </Grid>
            <Grid md={2}></Grid>
          </Grid>
          <Grid container md={12}>
            <Grid md={2}></Grid>
            <Grid container md={5}>
              <Grid xs={1}>
                <Avatar alt="Remy Sharp" src="https://storage.cloud.google.com/mount-kataka-suites/guy.jpeg" />
              </Grid>
              <Grid xs={11}> 
                <Typography variant="subtitle1" gutterBottom>
                  Private suite hosted by Guy
                </Typography>
              </Grid>
              <Grid md={12}>
              <List sx={{ width: '100%' }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Great Location" secondary="25 minutes from Denver, 5 minutes to Arrowhead golf course, and only a couple miles away from amazing trails" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <WorkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Fully-furnished Private Suite" secondary="Brand new furniture, blazing fast internet, incredible views, and tons of amenities" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <BeachAccessIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Flexible Lease and No Cancellation Fees" secondary="Stay for 1 month, 3 months, or as long as you'd like" />
                </ListItem>
              </List>
              </Grid>
              <Grid md={12}>
                <Divider></Divider>
                <Box p={2}>
                  <Typography mt={2} mb={2} variant="body2" gutterBottom>Welcome to our fully furnished private suite, attached to the main home, where all utilities and high-speed internet are included. Nestled in a serene mountain community, this cozy retreat offers a spacious bedroom with a queen-sized bed and an en-suite bathroom. The living area boasts a comfortable seating arrangement and a flat-screen TV, while a well-equipped kitchenette allows for light meal preparation. Outside, a private patio or balcony offers stunning mountain views for your enjoyment. Located close to the Arrowhead golf course and nestled next to the mountains, this Airbnb promises a tranquil escape or an active outdoor adventure, providing the perfect blend of comfort and convenience in a beautiful natural setting.</Typography>
                </Box>
                <Divider></Divider>
              </Grid>
              <Divider/>
              <Grid xs={12} sm={8} md={8}>
                <Box display="flex">
                  <Typography variant="h5">Everything's included</Typography>
                </Box>
              </Grid>
              <Grid container xs={12}>
                <Grid xs={12} sm={12} md={12}>
                  <Box p={2}>
                    <Amenities></Amenities>
                  </Box>
                  <Divider></Divider>
                </Grid>
              </Grid>
              <Grid container md={12}>
                <Grid md={12}><Typography variant="subtitle1" gutterBottom>Self check-in</Typography></Grid>
                <Grid md={12}><Typography variant="body2" gutterBottom>Easily check into the Airbnb using a convenient smart lock system.</Typography></Grid>
                <Grid md={12}><Typography variant="subtitle1" gutterBottom>Guy is a super host</Typography></Grid>
                <Grid md={12}><Typography variant="body2" gutterBottom>Meet Guy, your software architect Airbnb host in Colorado, who loves golf, gaming, and outdoor adventures. He lives in the main home with his two mini Labradoodles and is dedicated to ensuring your stay is comfortable and memorable, offering both technical expertise and local insights.</Typography></Grid>
                <Grid md={12}><Typography variant="subtitle1" gutterBottom>Flexible</Typography></Grid>
                <Grid md={12}><Typography variant="body2" gutterBottom>Discover the freedom of flexible leasing terms with our Airbnb! Whether you're looking to stay for a month, three months, or longer, we offer hassle-free options with no early cancellation fees or hidden charges. Your comfort and convenience are our top priorities – stay as long as you'd like, and leave whenever suits you best.</Typography></Grid>
              </Grid>
            </Grid> 
            <Grid md={3}>
              <Grid xs display="flex" justifyContent="flex-end" alignItems="center" style={{ position: 'sticky', top: '64px', zIndex: 100000 }}>
                <ReserveCard></ReserveCard>
              </Grid>
            </Grid>
            <Grid md={2}></Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid sm={2}></Grid>
            <Grid xs={12} sm={8} md={8}>
              <Box display="flex">
                <Typography variant="h5">Where you'll be staying</Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid sm={2}></Grid>
            <Grid xs={12} sm={8}>
                <MapLocation></MapLocation>
            </Grid>
            <Grid sm={2}></Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default App
