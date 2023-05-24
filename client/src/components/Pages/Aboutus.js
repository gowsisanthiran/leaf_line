// import React, { useState } from 'react';
// import { Box, Typography, LinearProgress } from '@mui/material';

// import sl15 from '../../images/about.png';
// import sl16 from '../../images/about3.png';

// const AnotherAboutPage = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleSlideChange = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <Box textAlign="center">
//       <Box mt={4}>
//         <Typography variant="h5">About Us</Typography>
//         <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
//           <Box
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             p={2}
//             bgcolor="#f1f1f1"
//             className="hover-container"
//             style={{
//               width: '400px',
//               boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
//               borderRadius: '5px',
//               transition: 'transform 0.3s',
//             }}
//             hoverStyle={{
//               transform: 'scale(1.05)',
//             }}
//           >
//             <Typography variant="h6">Image 1</Typography>
//             <Typography>
//               <img src={sl15} style={{ height: '200px', width: '200px' , margin:'10px'}} alt="Image" />
//             </Typography>
//             <Typography variant="body2">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac quam ut justo interdum aliquam eget ut
//               risus.
//             </Typography>
//           </Box>
//           <Box
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             p={2}
//             bgcolor="#f1f1f1"
//             className="hover-container"
//             style={{
//               width: '400px',
//               boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
//               borderRadius: '5px',
//               transition: 'transform 0.3s',
//             }}
//             hoverStyle={{
//               transform: 'scale(1.05)',
//             }}
//           >
//             <Typography variant="h6">Image 2</Typography>
//             <Typography>
//               <img src={sl16} style={{ height: '200px', width: '200px', margin:'10px' }} alt="Image" />
//             </Typography>
//             <Typography variant="body2">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac quam ut justo interdum aliquam eget ut
//               risus.
//             </Typography>
//           </Box>
//         </Box>
//         <Box mt={2} width="400px" mx="auto">
//           <LinearProgress variant="determinate" value={(activeIndex + 5) * 50} />
//         </Box>

//         <Box
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             p={2}
//             bgcolor="#f1f1f1"
//             className="hover-container"
//             style={{
//               width: '400px',
//               boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
//               borderRadius: '5px',
//               transition: 'transform 0.3s',
//             }}
//             hoverStyle={{
//               transform: 'scale(1.05)',
//             }}
//           >
//             <Typography variant="h6">Image 2</Typography>
//             <Typography>
//               <img src={sl16} style={{ height: '200px', width: '200px', margin:'10px' }} alt="Image" />
//             </Typography>
//             <Typography variant="body2">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac quam ut justo interdum aliquam eget ut
//               risus.
//             </Typography>
//           </Box>
//         </Box>
//         <Box mt={2} width="400px" mx="auto">
//           <LinearProgress variant="determinate" value={(activeIndex + 1) * 50} />
//         </Box>
//       </Box>
      
    
//   );
// };

// export default AnotherAboutPage;



import React from 'react';
import { Box, Typography } from '@mui/material';

import sl15 from '../../images/about.png';
import sl16 from '../../images/about3.png';
import sl17 from '../../images/pic05.jpeg';
import sl18 from '../../images/pic07.jpeg';

const AboutUsPage = () => {
  const imageStyle = {
    width: '100%',
    height: 'auto',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
    borderRadius: '5px',
    transition: 'transform 0.3s',
  };

  return (
    <Box textAlign="center" marginTop='5rem'>
      <Typography variant="h5">About Us</Typography>
      <Box mt={4} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      
        <Box style={{ width: '50%', textAlign: 'Justify',marginLeft:'100px' }}>
          
          <Typography variant="body2" mt={2}>
          The Leafline Banana Leaf Plates are eco-friendly and sustainable alternatives to traditional disposable plates. 
          These plates are made from 100% natural and biodegradable banana leaves. 
          They are fully biodegradable, meaning they can naturally decompose without causing harm to the environment.
          The plates are free from chemicals, additives, and synthetic materials commonly found in traditional disposable plates. 
          They are a safe and healthy option for serving food, as they do not leach harmful substances into the food.
          
          <Typography variant="body2" mt={2}>
          After use, these plates can be easily disposed of in compost or organic waste bins. 
          They will naturally degrade, returning to the environment without leaving any harmful residues behind.
          They can be used for serving appetizers, main courses, desserts, and snacks at both indoor and outdoor events.
          These plates are heat-resistant, allowing you to serve piping hot meals without worrying about the plates losing their shape or integrity. 
          Similarly, they can withstand cold temperatures, making them suitable for serving chilled desserts or salads.
          </Typography>
          
          </Typography>
        </Box>
        <Box style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
          <img src={sl17} alt="About" style={{ ...imageStyle, height: '400px', width: '400px', margin: '10px' }} />
        </Box>
      </Box>
      <Box mt={4} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <Box style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
          <img src={sl18} alt="Another Image" style={{ ...imageStyle, height: '400px', width: '400px', margin: '10px' }} />
        </Box>
        <Box style={{ width: '50%', textAlign: 'justify' ,marginRight:'100px' }}>
         
          <Typography variant="body2" mt={2}>
          Despite their natural composition, Leafline Banana Leaf Plates are sturdy and durable.
           They can hold various types of food, including hot and cold dishes, without leaking or becoming soggy.
           The natural texture and patterns of banana leaves give the plates a unique and elegant appearance.
            They add a touch of natural beauty to any table setting, making them ideal for special events, parties, or eco-friendly weddings.
            Leafline Banana Leaf Plates come in various sizes and shapes, offering versatility for different types of food presentations. 
            <Typography variant="body2" mt={2}>
            The production of Leafline Banana Leaf Plates often involves sourcing the leaves from local farmers and communities.
             By using these plates, you support sustainable farming practices and contribute to the livelihoods of these communities.
             Leafline Banana Leaf Plates offer a sustainable and stylish alternative to conventional disposable plates, reducing the environmental impact associated with single-use plastics or non-biodegradable materials. 
             They provide an eco-friendly solution without compromising on quality or aesthetics.
          </Typography>
          
          </Typography>
        </Box>
        
      </Box>
    </Box>
  );
};

export default AboutUsPage;

