import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import WorkIcon from '@mui/icons-material/Work';
import SettingsIcon from '@mui/icons-material/Settings';
import StarIcon from '@mui/icons-material/Star';
import { spacing } from '@mui/system'; // Import the spacing function separately
import AOS from 'aos';
import 'aos/dist/aos.css';
import './WhyWorkingWithUs.css'



const useStyles = makeStyles((theme) => ({
  container: {
    margin: '0 auto',
    marginTop: '10px',
    textAlign: 'left',
  },
  title: {
    fontFamily: 'Jack Rooney , sans-serif',
    marginTop: '0rem',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    fontFamily: 'cursive',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1.5rem',
  },
  imageCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '250px',
    width: '300px',
    margin: '18px',
    position: 'relative',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    border: '1px solid #ddd',
    borderRadius: '4px',
    overflow: 'hidden',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: '#fff',
    padding: '8px',
    textAlign: 'center',
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
    marginTop: '10px',
    marginBottom: '20px',
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

    // <Box className={classes.background}>
    //   <Box className={classes.container} textAlign="left" style={{ margin: '0 auto', marginTop: '10px' }} data-aos="fade-up">
    //     <Typography variant="h6" className={classes.title}>
    //       Why Working With Us!
    //     </Typography>
    //     <Box mt={4} style={{ textAlign: 'center', fontFamily: 'cursive' }} data-aos="fade-up" data-aos-delay="100">
    //       <Typography variant="h4">Few Reasons Why People Choose Us!</Typography>

    //       <Grid container className={classes.cardContainer} data-aos="fade-up" data-aos-delay="200">
    //         <div className={classes.imageCard}>
    //           <WorkIcon className={classes.icon} />
    //           <Typography variant="h5" component="h2" className={classes.heading} sx={{ fontFamily: 'Jack Rooney, sans-serif' }}>
    //             Experience
    //           </Typography>
    //           <div className={classes.overlay}>
    //             <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada
    //               laoreet tempus blandit pretium etc.</Typography>
    //           </div>
    //         </div>

    //         <div className={classes.imageCard}>
    //           <SettingsIcon className={classes.icon} />
    //           <Typography variant="h5" component="h2" className={classes.heading} sx={{ fontFamily: 'Jack Rooney, sans-serif' }}>
    //             Flexibility
    //           </Typography>
    //           <div className={classes.overlay}>
    //             <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada
    //               laoreet tempus blandit pretium etc.</Typography>
    //           </div>
    //         </div>

    //         <div className={classes.imageCard}>
    //           <StarIcon className={classes.icon} />
    //           <Typography variant="h5" component="h2" className={classes.heading} sx={{ fontFamily: 'Jack Rooney, sans-serif' }}>
    //             Results
    //           </Typography>
    //           <div className={classes.overlay}>
    //             <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada
    //               laoreet tempus blandit pretium etc.</Typography>
    //           </div>
    //         </div>
    //       </Grid>

    //     </Box>
    //   </Box>
    // </Box>
    <div style={{ backgroundColor: '#f5f5f5' }}>
      <section id="whyworkwithus" >
        <div class="row">
          <div class="box">
            <WorkIcon className={classes.icon} />
            <Typography className={classes.heading} class="headings" style={{ fontFamily: 'Jack Rooney, sans-serif' }}>Experience</Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada
              laoreet tempus blandit pretium etc.
            </Typography>
          </div>
          <div class="box">
            <SettingsIcon className={classes.icon} />
            <Typography className={classes.heading} class="headings" style={{ fontFamily: 'Jack Rooney, sans-serif' }}>Flexibility</Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada
              laoreet tempus blandit pretium etc.
            </Typography>
          </div>
          <div class="box">
            <StarIcon className={classes.icon} />
            <Typography className={classes.heading} class="headings" style={{ fontFamily: 'Jack Rooney, sans-serif' }}>Results</Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada
              laoreet tempus blandit pretium etc.
            </Typography>
          </div>
        </div>
      </section>
    </div>
    // <div className={classes.section} id="learn">
    //   <Grid container spacing={3} md={12} justify="center">
    //     <Grid item xs={12} sm={6} md={4} data-aos="fade-up">
    //       <Card className={classes.card}>
    //         <CardContent>
    //           <WorkIcon className={classes.icon} />
    //           <Typography variant="h5" component="h2" className={classes.heading} sx={{ fontFamily: 'Jack Rooney, sans-serif' }}>
    //             
    //           </Typography>
    //           <Typography variant="body2">
    //             Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada
    //             laoreet tempus blandit pretium etc.
    //           </Typography>
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //     <Grid item xs={12} sm={6} md={4} data-aos="fade-up" data-aos-delay="100">
    //       <Card className={classes.card}>
    //         <CardContent>
    //           <SettingsIcon className={classes.icon} />
    //           <Typography variant="h5" component="h2" className={classes.heading} sx={{ fontFamily: 'Jack Rooney, sans-serif' }}>
    //             Flexibility
    //           </Typography>
    //           <Typography variant="body2">
    //             Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada
    //             laoreet tempus blandit pretium etc.
    //           </Typography>
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //     <Grid item xs={12} sm={6} md={4} data-aos="fade-up" data-aos-delay="200">
    //       <Card className={classes.card}>
    //         <CardContent>
    //           <StarIcon className={classes.icon} />
    //           <Typography variant="h5" component="h2" className={classes.heading} sx={{ fontFamily: 'Jack Rooney, sans-serif' }}>
    //             Results
    //           </Typography>
    //           <Typography variant="body2">
    //             Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada
    //             laoreet tempus blandit pretium etc.
    //           </Typography>
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //   </Grid>
    // </div>
  );
};

export default WhyWorkWithUs;
