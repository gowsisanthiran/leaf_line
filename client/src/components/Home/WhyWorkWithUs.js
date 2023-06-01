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

    <div style={{ backgroundColor: '#DAE2B6'}}>
      <section id="whyworkwithus" data-aos="fade-up" >
        <div class="row">
          <div class="box" style={{ marginLeft:'180px'}}>
            <WorkIcon className={classes.icon}style={{color:'#244c2c',width:'100px', height:'100px'}} />
            <Typography className={classes.heading} class="headings" style={{ fontFamily: 'Jack Rooney, sans-serif',color:'#1c3414'  }}>Experience</Typography>
            <Typography variant="body2" style={{fontFamily: 'Poppins, sans-serif',fontSize:'15px',color: '#555'}}>Unique and Memorable</Typography>
          </div>
          <div class="box" style={{ marginLeft:'80px'}} >
            <SettingsIcon className={classes.icon} style={{color:'#244c2c',width:'100px', height:'100px'}}/>
            <Typography className={classes.heading} class="headings" style={{ fontFamily: 'Jack Rooney, sans-serif',color:'#1c3414' }}>Flexibility</Typography>
            <Typography variant="body2" style={{fontFamily: 'Poppins, sans-serif',fontSize:'15px',color: '#555',marginLeft:'20px',marginRight:'20px'}}>ECO-friendliness</Typography>
          </div>
          <div class="box" style={{ marginRight:'160px'}}>
            <StarIcon className={classes.icon} style={{color:'#244c2c',width:'100px', height:'100px'}}/>
            <Typography className={classes.heading} class="headings" style={{ fontFamily: 'Jack Rooney, sans-serif' ,color:'#1c3414' }}>Results</Typography>
            <Typography variant="body2" style={{fontFamily: 'Poppins, sans-serif',fontSize:'15px',color: '#555'}}>Environmental consciousness</Typography>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyWorkWithUs;
