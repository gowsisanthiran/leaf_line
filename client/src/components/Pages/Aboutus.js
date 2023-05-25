



// import React from 'react';
// import { Box, Typography } from '@mui/material';

// import sl15 from '../../images/about.png';
// import sl16 from '../../images/about3.png';
// import sl17 from '../../images/pic05.jpeg';
// import sl18 from '../../images/pic07.jpeg';

// // const AboutUsPage = () => {
// //   const imageStyle = {
// //     width: '100%',
// //     height: 'auto',
// //     boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
// //     borderRadius: '5px',
// //     transition: 'transform 0.3s',
// //   };

// //   return (
// //     <Box textAlign="center" marginTop='5rem'>
// //       <Typography variant="h3">About Us</Typography>
// //       <Box mt={4} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      
// //         <Box style={{ width: '50%', textAlign: 'Justify',marginLeft:'100px' }}>
          
// //           <Typography variant="body2" mt={2}>
// //           The Leafline Banana Leaf Plates are eco-friendly and sustainable alternatives to traditional disposable plates. 
// //           These plates are made from 100% natural and biodegradable banana leaves. 
// //           They are fully biodegradable, meaning they can naturally decompose without causing harm to the environment.
          
// //           They are a safe and healthy option for serving food, as they do not leach harmful substances into the food.
          
// //           <Typography variant="body2" mt={2}>
// //           After use, these plates can be easily disposed of in compost or organic waste bins. 
         
// //           They can be used for serving appetizers, main courses, desserts, and snacks at both indoor and outdoor events.
          
// //           </Typography>
          
// //           </Typography>
// //         </Box>
// //         <Box style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
// //           <img src={sl17} alt="About" style={{ ...imageStyle, height: '400px', width: '400px', margin: '10px' }} />
// //         </Box>
// //       </Box>
// //       <Box mt={4} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
// //         <Box style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
// //           <img src={sl18} alt="Another Image" style={{ ...imageStyle, height: '400px', width: '400px', margin: '10px' }} />
// //         </Box>
// //         <Box style={{ width: '50%', textAlign: 'justify' ,marginRight:'100px' }}>
         
// //           <Typography variant="body2" mt={2}>
// //            Leafline Banana Leaf Plates are sturdy and durable.
// //            They can hold various types of food, including hot and cold dishes, without leaking or becoming soggy.
// //            The natural texture and patterns of banana leaves give the plates a unique and elegant appearance.
// //             They add a touch of natural beauty to any table setting, making them ideal for special events, parties, or eco-friendly weddings.
// //             Leafline Banana Leaf Plates come in various sizes and shapes, offering versatility for different types of food presentations. 
// //             <Typography variant="body2" mt={2}>
// //             The production of Leafline Banana Leaf Plates often involves sourcing the leaves from local farmers and communities.
// //              By using these plates, you support sustainable farming practices and contribute to the livelihoods of these communities.
// //              Leafline Banana Leaf Plates offer a sustainable and stylish alternative to conventional disposable plates, reducing the environmental impact associated with single-use plastics or non-biodegradable materials. 
// //              They provide an eco-friendly solution without compromising on quality or aesthetics.
// //           </Typography>
          
// //           </Typography>
// //         </Box>
        
// //       </Box>
// //     </Box>
// //   );
// // };

// export default AboutUsPage;






import React from 'react';
import sl15 from '../../images/about.png';
import sl16 from '../../images/about3.png';
import sl17 from '../../images/pic05.jpeg';
import sl18 from '../../images/pic07.jpeg';


const AboutPage = () => {
  return (
    <div className="da-projects" id="projects">
  <div className="row mx-0">
    <div className="col-lg-6 col-md-12 px-0 da-project-1" style={{ backgroundImage: "url('../../images/abou2.png')" }} data-aos="zoom-in"></div>
    <div className="col-lg-6 col-md-12 pl-5 pt-5 pb-3">
      <div className="row">
        <div className="col-1 da-project-icon"><i className="text-warning fas fa-user-md fa-2x fa-fw"></i></div>
        <div className="col-10">
          <div className="h4">About Us</div>
          <p>The Leafline Banana Leaf Plates are eco-friendly and sustainable alternatives to traditional disposable plates. These plates are made from 100% natural and biodegradable banana leaves. They are fully biodegradable, meaning they can naturally decompose without causing harm to the environment.</p>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-1 da-project-icon"><i className="text-info fas fa-book fa-2x fa-fw"></i></div>
        <div className="col-10">
          <div className="h4">Education</div>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-1 da-project-icon"><i className="fas fa-shopping-basket fa-2x fa-fw"></i></div>
        <div className="col-10">
          <div className="h4">Digital Retail</div>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="row mx-0">
    <div className="col-lg-6 col-md-12 pl-5 pt-5 pb-3">
      <div className="row mb-3">
        <div className="col-1 da-project-icon"><i className="text-warning fas fa-money-bill-alt fa-2x fa-fw"></i></div>
        <div className="col-10">
          <div className="h4">Finance</div>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.</p>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-1 da-project-icon"><i className="text-info far fa-chart-bar fa-2x fa-fw"></i></div>
        <div className="col-10">
          <div className="h4">Marketing</div>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-1 da-project-icon"><i className="fas fa-music fa-2x fa-fw"></i></div>
        <div className="col-10">
          <div className="h4">Entertainment</div>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.</p>
        </div>
      </div>
    </div>
    <div className="col-lg-6 col-md-12 px-0 da-project-2" style={{ backgroundImage: "url('images/da-img-5.jpg')" }} data-aos="zoom-in"></div>
  </div>
</div>

  );
};

export default AboutPage;


