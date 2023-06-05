import React,{useEffect} from 'react'
import { Grid, Container, Typography, Button } from '@mui/material';
import { PlayCircleFilled } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import sl0001 from '../../images/bg1.jpeg';
import video from '/home/ukijaffna/Documents/Final_Project/client/src/images/video.mp4'
const VideoPopup = () => {
  useEffect(() => {
    AOS.init();
}, []);
      return (
    <div>

<div className="abt-section mb-150" data-aos="fade-up"style={{ backgroundImage: `url(${sl0001})` }}>
      <Container sx={{marginTop: '50px', marginBottom: '100px', marginLeft:'300px',}}>
        <Grid container spacing={2}>
          
             <Grid>
          <Typography variant="h3" component="h3" style={{ fontFamily: 'Open Sans',fontSize: '46px',display:'block',paddingLeft:'300px' , margin: '0 ',paddingTop:'20px'}}>
                How to prepare  <span style={{color: 'green'}} data-aos="fade-up" data-aos-delay="500">Our Plates</span>
              </Typography>
              </Grid>
              <Grid>
              <Typography variant="h6" component="h6" style={{ fontFamily: 'Poppins',fontSize: '20px',display:'block',paddingLeft:'350px' , margin: '0 ',paddingTop:'20px'}}>
                 <span  data-aos="fade-up" data-aos-delay="500">Watch our amazing video tutorial</span>
              </Typography>
              </Grid>
              <Grid item lg={6} md={12} style={{textAlign: 'center'}}>
            <div className="abt-bg" data-aos="fade-up" data-aos-delay="100"
                            
                            style={{
                              position: 'relative',
                              paddingBottom: '85.25%',
                              paddingTop: '80px',
                              height: '0',
                              // overflow: 'hidden',
                              paddingRight:'100px',
                              paddingLeft:'10px'


                            }}
                          >
           
           <video width="1000"  controls autoPlay muted style={{ objectFit: 'cover' ,paddingRight:'100px',
                              paddingLeft:'80px', paddingBottom: '8px', position: 'relative'}}>
                        <source src={video} type="video/mp4" autoplay />
                    </video>
                
                 {/* <img
                    src="`url(${sl0001})`"
                    alt="Video Overlay"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  /> */}
            </div>
          </Grid>
          
          
              
              {/* <Button href="about.html" variant="contained" className="boxed-btn mt-4" sx={{fontFamily: 'Poppins, sans-serif',fontSize:'15px', backgroundColor: '#5f8273', borderRadius:'50px'}} data-aos="fade-up" data-aos-delay="400">
                know more
              </Button> */}
            
          
        </Grid>
      </Container>
    </div>
      </div>
  )
}

export default VideoPopup


