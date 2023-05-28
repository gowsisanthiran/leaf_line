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
      <Container sx={{marginTop: '150px', marginBottom: '150px'}}>
        <Grid container spacing={2}>
          <Grid item lg={6} md={12}>
            <div className="abt-bg" data-aos="fade-up" data-aos-delay="100">
            <iframe 
                  width="560"
                  height="315"
                  src="https://youtu.be/61IBKTD03fM"
                  title="leafLine Video"
                  allowFullScreen
                />
            </div>
          </Grid>
          <Grid item lg={6} md={12}>
            <div className="abt-text" data-aos="fade-up" data-aos-delay="200">
              <Typography variant="subtitle1" className="top-sub" sx={{fontFamily: 'Open Sans, sans-serif'}}>
                Since Year 1999
              </Typography>
              <Typography variant="h2" component="h2" style={{ fontFamily: 'Jack Rooney, sans-serif',fontSize: '42px' }}>
                We are <span style={{color: 'green'}} data-aos="fade-up" data-aos-delay="300">LEAFLINE</span>
              </Typography>
              <Typography variant="body1" sx={{fontSize: '15px', fontFamily: 'Poppins, sans-serif', fontWeight:'400'}} data-aos="fade-up" data-aos-delay="300">
                Etiam vulputate ut augue vel sodales. In sollicitudin neque et
                massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget
                dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed,
                interdum velit. Nam eu molestie lorem.
              </Typography>
              <Typography variant="body1" sx={{fontSize: '15px', fontFamily: 'Poppins, sans-serif', fontWeight:'400'}}data-aos="fade-up" data-aos-delay="300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente facilis illo repellat veritatis minus, et labore minima
                mollitia qui ducimus.
              </Typography>
              <Button href="about.html" variant="contained" className="boxed-btn mt-4" sx={{fontFamily: 'Poppins, sans-serif',fontSize:'15px', backgroundColor: '#F28123', borderRadius:'50px'}} data-aos="fade-up" data-aos-delay="400">
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