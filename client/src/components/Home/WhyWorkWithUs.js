import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import WorkIcon from '@mui/icons-material/Work';
import SettingsIcon from '@mui/icons-material/Settings';
import StarIcon from '@mui/icons-material/Star';
import { spacing } from '@mui/system'; // Import the spacing function separately
import AOS from 'aos';
import 'aos/dist/aos.css';




const useStyles = makeStyles((theme) => ({
  section: {
    background: "white",
    top: '200px', /* The distance between the div with the top of document */
    left: '0px', /* Make the div full width */
    right: '0px',
  },
  card: {
    height: '100%',
    width: '50%',
    display: 'grid',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  icon: {
    marginBottom: spacing(3),
    color: "black",
    fontSize: '3rem',
  },
  heading: {
    marginBottom: spacing(3),
    fontSize: '1.5rem',
    fontWeight: 'bold',

  },
}));

const WhyWorkWithUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const classes = useStyles();

  return (
    <div className={classes.section} id="learn">
      <Grid container spacing={3} md={12} justify="center">
        <Grid item xs={12} sm={6} md={4} data-aos="fade-up">
          <Card className={classes.card}>
            <CardContent>
              <WorkIcon className={classes.icon} />
              <Typography variant="h5" component="h2" className={classes.heading} sx={{ fontFamily: 'Jack Rooney, sans-serif' }}>
                Experience
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada
                laoreet tempus blandit pretium etc.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} data-aos="fade-up" data-aos-delay="100">
          <Card className={classes.card}>
            <CardContent>
              <SettingsIcon className={classes.icon} />
              <Typography variant="h5" component="h2" className={classes.heading} sx={{ fontFamily: 'Jack Rooney, sans-serif' }}>
                Flexibility
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada
                laoreet tempus blandit pretium etc.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} data-aos="fade-up" data-aos-delay="200">
          <Card className={classes.card}>
            <CardContent>
              <StarIcon className={classes.icon} />
              <Typography variant="h5" component="h2" className={classes.heading} sx={{ fontFamily: 'Jack Rooney, sans-serif' }}>
                Results
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada
                laoreet tempus blandit pretium etc.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default WhyWorkWithUs;
