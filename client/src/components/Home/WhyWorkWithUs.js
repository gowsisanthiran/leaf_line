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

    <div style={{ backgroundColor: '#f5f5f5' }}>
      <section id="whyworkwithus" data-aos="fade-up" >
        <div class="row">
          <div class="box" >
            <WorkIcon className={classes.icon} />
            <Typography className={classes.heading} class="headings" style={{ fontFamily: 'Jack Rooney, sans-serif' }}>Experience</Typography>
            <Typography variant="body2" style={{fontFamily: 'Poppins, sans-serif',fontSize:'15px',color: '#555'}}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada
              laoreet tempus blandit pretium etc.
            </Typography>
          </div>
          <div class="box" >
            <SettingsIcon className={classes.icon} />
            <Typography className={classes.heading} class="headings" style={{ fontFamily: 'Jack Rooney, sans-serif' }}>Flexibility</Typography>
            <Typography variant="body2" style={{fontFamily: 'Poppins, sans-serif',fontSize:'15px',color: '#555'}}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada
              laoreet tempus blandit pretium etc.
            </Typography>
          </div>
          <div class="box" >
            <StarIcon className={classes.icon} />
            <Typography className={classes.heading} class="headings" style={{ fontFamily: 'Jack Rooney, sans-serif' }}>Results</Typography>
            <Typography variant="body2" style={{fontFamily: 'Poppins, sans-serif',fontSize:'15px',color: '#555'}}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada
              laoreet tempus blandit pretium etc.
            </Typography>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyWorkWithUs;
