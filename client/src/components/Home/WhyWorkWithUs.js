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
import { Container, Row, Col } from 'react-bootstrap';
import sl001 from '../../images/eco.png';
import sl002 from '../../images/ecobg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



import { faRecycle } from '@fortawesome/free-solid-svg-icons';
// import { faLeaf } from 'font-awesome-library';
// import { solid } from 'font-awesome-library';







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

  const sectionStyle = {
    padding: "100px 0px",
    backgroundColor: "black",
    // Define your inline CSS styles for the section
  };

  const headingStyle = {
    // Define your inline CSS styles for the heading
  };

  const iconStyle = {

    display: 'inline-block',
    
    borderColor:'white'
    // Define your inline CSS styles for the icon
  };

  const serviceHeadingStyle = {
    // Define your inline CSS styles for the service heading
  };

  const serviceParagraphStyle = {
    // Define your inline CSS styles for the service paragraph
  };

  // return (

//     <div style={{ backgroundColor: '#DAE2B6'}}>
//       <section id="whyworkwithus" data-aos="fade-up" >
//         <div class="row">
//           <div class="box" style={{ marginLeft:'180px'}}>
//             <WorkIcon className={classes.icon}style={{color:'#244c2c',width:'100px', height:'100px'}} />
//             <Typography className={classes.heading} class="headings" style={{ fontFamily: 'Jack Rooney, sans-serif',color:'#1c3414'  }}>Experience</Typography>
//             <Typography variant="body2" style={{fontFamily: 'Poppins, sans-serif',fontSize:'15px',color: '#555'}}>Unique and Memorable</Typography>
//           </div>
//           <div class="box" style={{ marginLeft:'80px'}} >
//             <SettingsIcon className={classes.icon} style={{color:'#244c2c',width:'100px', height:'100px'}}/>
//             <Typography className={classes.heading} class="headings" style={{ fontFamily: 'Jack Rooney, sans-serif',color:'#1c3414' }}>Flexibility</Typography>
//             <Typography variant="body2" style={{fontFamily: 'Poppins, sans-serif',fontSize:'15px',color: '#555',marginLeft:'20px',marginRight:'20px'}}>ECO-friendliness</Typography>
//           </div>
//           <div class="box" style={{ marginRight:'160px'}}>
//             <StarIcon className={classes.icon} style={{color:'#244c2c',width:'100px', height:'100px'}}/>
//             <Typography className={classes.heading} class="headings" style={{ fontFamily: 'Jack Rooney, sans-serif' ,color:'#1c3414' }}>Results</Typography>
//             <Typography variant="body2" style={{fontFamily: 'Poppins, sans-serif',fontSize:'15px',color: '#555'}}>Environmental consciousness</Typography>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };




return (
 <div style={{backgroundColor: '#DAE2B6',marginTop:'20px'}}>
   <section className="eco_services_environment" style={{sectionStyle, }}>
    <Container>
      <div className="eco_headings">
        <h3>
          <b style={{ color: 'green' }}>ECO</b> SERVICES
        </h3>
        <h6 style={{ color: 'green' }}>Promote Your Environment</h6>
        <span style={iconStyle}>
        
        </span>
      </div>
      <div className="eco_services">
        <Row>
          <Col md={4} sm={6} xs={12}>
            <div className="eco_items-services">
              <div className="eco_service_cols">
                <span style={iconStyle}>
                <FontAwesomeIcon icon={faRecycle}style={{color: "#0a330d" ,width:'100px', height:'100px'}} />
                </span>
                <div>
                  <h4 style={serviceHeadingStyle}>Recycling</h4>
                  <p style={serviceParagraphStyle}>
                  Reuse items whenever possible before considering recycling.
                  </p>
                </div>
              </div>
              <div className="eco_service_cols">
                <span style={iconStyle}>
                 <FontAwesomeIcon icon={faRecycle}style={{color: "#0a330d" ,width:'100px', height:'100px'}} />
                </span>
                <div>
                  <h4 style={serviceHeadingStyle}>ECO System</h4>
                  <p style={serviceParagraphStyle}>
                  Eco systems support biodiversity by providing habitats and food sources for a variety of species.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} sm={6} xs={12} className="hidden-sm-down">
            <figure>
              <div className="thumb-widthout-layer">
                <img src={sl001} alt="" />
              </div>
            </figure>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <div className="eco_items-services">
              <div className="eco_service_cols rtl_service">
                <span style={iconStyle}>
                   <FontAwesomeIcon icon={faRecycle}style={{color: "#0a330d" ,width:'100px', height:'100px'}} />
                </span>
                <div>
                  <h4 style={serviceHeadingStyle}>Organic</h4>
                  <p style={serviceParagraphStyle}>
                  Organic agriculture helps protect water quality by reducing pollution from synthetic chemicals.                  </p>
                </div>
              </div>
              <div className="eco_service_cols rtl_service">
                <span style={iconStyle}>
                <FontAwesomeIcon icon={faRecycle}style={{color: "#0a330d" ,width:'100px', height:'100px'}} />
                </span>
                <div>
                  <h4 style={serviceHeadingStyle}>BIOLOGY</h4>
                  <p style={serviceParagraphStyle}>
                  Biology is the scientific study of life and living organisms.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
   </section>
  </div>
);
};


export default WhyWorkWithUs;
