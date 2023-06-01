import React,{useEffect} from 'react'
import { Grid, Container, Typography, Button } from '@mui/material';
import { PlayCircleFilled } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const VideoPopup = () => {
  useEffect(() => {
    AOS.init();
}, []);
      return (
    <div>

<div className="abt-section mb-150" data-aos="fade-up">
      <Container sx={{marginTop: '100px', marginBottom: '50px', marginLeft:'200px'}}>
        <Grid container spacing={2}>
          <Grid item lg={6} md={12} style={{}}>
            <div className="abt-bg" data-aos="fade-up" data-aos-delay="100" >
            <iframe 
                  width="700"
                  height="500"
                  src="https://youtu.be/61IBKTD03fM"
                  title="leafLine Video"
                  allowFullScreen
                />
            </div>
          </Grid>
          <Grid item lg={6} md={12} >
            <div className="abt-text" data-aos="fade-up" data-aos-delay="200" style={{paddingLeft:'200px'}}>
              <Typography variant="subtitle1" className="top-sub" sx={{fontFamily: 'Open Sans, sans-serif',paddingLeft:'200px'}}>
                Since Year 1999
              </Typography>
              <Typography variant="h2" component="h2" style={{ fontFamily: 'Jack Rooney, sans-serif',fontSize: '42px' }}>
                We are <span style={{color: '#7eaf6c'}} data-aos="fade-up" data-aos-delay="300">LEAFLINE</span>
              </Typography>
              <Typography variant="body1" sx={{fontSize: '20px', fontFamily: 'Poppins, sans-serif', fontWeight:'400',marginRight:'10px'}} data-aos="fade-up" data-aos-delay="300">
              A typical banana leaf meal consists of various dishes served on different parts of the leaf. Rice is usually placed at the center, while an array of curries, chutneys, pickles, and side dishes are served around it. This communal-style dining allows for a diverse and satisfying culinary experience.
              </Typography>
              <Typography variant="body1" sx={{fontSize: '20px', fontFamily: 'Poppins, sans-serif', fontWeight:'400'}}data-aos="fade-up" data-aos-delay="300">
              Dining on a banana leaf plate offers a unique and memorable experience.
              </Typography>
              <Button href="about.html" variant="contained" className="boxed-btn mt-4" sx={{fontFamily: 'Poppins, sans-serif',fontSize:'15px', backgroundColor: '#5f8273', borderRadius:'50px'}} data-aos="fade-up" data-aos-delay="400">
                know more
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
      </div>
  )
}

export default VideoPopup