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
import SpaTwoToneIcon from '@mui/icons-material/SpaTwoTone';
import RecyclingIcon from '@mui/icons-material/Recycling';
import WaterDropTwoToneIcon from '@mui/icons-material/WaterDropTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import sl0001 from '../../images/bg1.jpeg';
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

  



return (
 <div style={{backgroundColor: '#DAE2B6',boxShadow: '0 0 10px rgba(0, 100, 0, 0.5)' }}>
   <section className="eco_services_environment" style={{sectionStyle }}>
    <Container >
      <div className="eco_headings">
        <h3>
          <b style={{ color: 'green',paddingTop:'50px' ,fontFamily: 'Open Sans',fontWeight: 'bold'}}>ECO</b> SERVICES
        </h3>
        <h6 style={{ color: 'green' ,fontFamily: 'Open Sans'}}>Promote Your Environment</h6>
        <span style={iconStyle}>
        
        </span>
      </div>
      <div className="eco_services">
        <Row>
          <Col md={4} sm={6} xs={12}>
            <div className="eco_items-services">
              <div className="eco_service_cols">
                <span style={iconStyle}>
              <RecyclingIcon  style={{color: "#0a330d" ,width:'100px', height:'100px'}}/>              </span>
                <div>
                  <h4 style={{serviceHeadingStyle,fontFamily: 'Open Sans',color: 'green'}}>Recycling</h4>
                  <p style={{serviceParagraphStyle, fontFamily: 'Poppins, sans-serif'}} >
                  Reuse items whenever possible before considering recycling.
                  </p>
                </div>
              </div>
              <div className="eco_service_cols">
                <span style={iconStyle}>
                 
                {/* <FontAwesomeIcon icon={faRecycle}style={{color: "#0a330d" ,width:'100px', height:'100px'}} /> */}
                <WaterDropTwoToneIcon  style={{color: "#0a330d" ,width:'100px', height:'100px'}}/>
                </span>
              
                <div>
                <h4 style={{serviceHeadingStyle,fontFamily: 'Open Sans',color: 'green'}}>ECO System</h4>
                  <p style={{serviceParagraphStyle, fontFamily: 'Poppins, sans-serif'}} >
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
                   {/* <FontAwesomeIcon icon={faRecycle}style={{color: "#0a330d" ,width:'100px', height:'100px'}} /> */}
                  <SpaTwoToneIcon  style={{color: "#0a330d" ,width:'100px', height:'100px'}}/>               </span>
                <div>
                <h4 style={{serviceHeadingStyle,fontFamily: 'Open Sans',color: 'green'}}>Organic</h4>
                  <p style={{serviceParagraphStyle, fontFamily: 'Poppins, sans-serif'}} >
                  Organic agriculture helps protect water quality by reducing pollution from synthetic chemicals.                  </p>
                </div>
              </div>
              <div className="eco_service_cols rtl_service">
                <span style={iconStyle}>
                <FavoriteTwoToneIcon style={{color: "#0a330d" ,width:'100px', height:'100px'}} />
                {/* <FontAwesomeIcon icon={faRecycle}style={{color: "#0a330d" ,width:'100px', height:'100px'}} /> */}
                </span>
                <div>
                <h4 style={{serviceHeadingStyle,fontFamily: 'Open Sans',color: 'green'}}>Nature friendly</h4>
                  <p style={{serviceParagraphStyle, fontFamily: 'Poppins, sans-serif'}} >
                  A Taste of Sustainability for a Greener World, Rediscover Nature's Bounty with Banana Plates!                  </p>
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
