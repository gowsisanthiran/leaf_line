import React from 'react'
import { Box,Typography } from '@mui/material';
import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

const Contactus = () => {
//   return (
//    <>
//     <div className='contact_info'>
//       <div className='container-fluid'>
//         <div className='row'>
//           <div className='col-lg-10 offsel-lg-5 d-flex justify-contant-between'>
//             {/*phone number*/}
//             <div className='contact_info_item d-flex justify-content-start align-items-center'>
//               <img src=''alt = 'phone' />
//               <div className='contact_info_content'>
//                 <div className='contact_info_title'>
//                   Phone
//                 </div>
//                 <div className='contact_info_text'>
//                   +9477XXXXXXX
//                   </div> 
//               </div>

//             </div>
//             {/*email*/}
//             <div className='contact_info_item d-flex justify-content-start align-items-center'>
//               <img src=''alt = 'phone' />
//               <div className='contact_info_content'>
//                 <div className='contact_info_title'>
//                   Email
//                 </div>
//                 <div className='contact_info_text'>
//                   leafline@gmail.com
//                   </div> 
//               </div>

//             </div>
//             {/*address*/}
//             <div className='contact_info_item d-flex justify-content-start align-items-center'>
//               <img src=''alt = 'phone' />
//               <div className='contact_info_content'>
//                 <div className='contact_info_title'>
//                   Address
//                 </div>
//                 <div className='contact_info_text'>
//                   No 1, LeafLine lane, Jaffna, SriLanka
//                   </div> 
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </> 


      
//       {/* contact us form */}
// <div className='contact_form'>
//   <div className='container'>
//     <div className='row'>
//       <div className='col-lg-10 offset-lg-1'>
//         <div className='contact_form_container py-5'>
//          <div className='contact_form_title'>
//              Get in Touch

//          </div>
//         </div>

//       </div>
//     </div>
//   </div>
// </div>
//   )
// }





// Material Kit 2 React components
//import MKBox from "components/MKBox";

//import MKButton from "components/MKButton";
//import MKTypography from "components/MKTypography";

// function FormSimple() {
  const [checked, setChecked] = useState(true);

  const handleChecked = () => setChecked(!checked);

  return (
    <Box component="section" py={12}>
      <Container>
        <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
          <Typography variant="h3" mb={1}>
            Contact Us
          </Typography>
        </Grid>
        <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
          <Box width="100%" component="form" method="post" autocomplete="off">
            <Box p={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <input variant="standard" label="First Name" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <input variant="standard" label="Last Name" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <input variant="standard" type="email" label="Email Address" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <input variant="standard" label="Your Message" multiline fullWidth rows={6} />
                </Grid>
                <Grid item xs={12} alignItems="center" ml={-1}>
                  <Switch checked={checked} onChange={handleChecked} />
                  <Typography
                    variant="button"
                    fontWeight="regular"
                    color="text"
                    ml={-1}
                    sx={{ cursor: "pointer", userSelect: "none" }}
                    onClick={handleChecked}
                  >
                    &nbsp;&nbsp;I agree the&nbsp;
                  </Typography>
                  <Typography
                    component="a"
                    href="#"
                    variant="button"
                    fontWeight="regular"
                    color="dark"
                  >
                    Terms and Conditions
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item justifyContent="center" xs={12} my={2}>
                <button type="submit" variant="gradient" color="dark" fullWidth>
                  Send Message
                </button>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}



export default Contactus