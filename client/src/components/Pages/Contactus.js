// // import React from 'react'
// // import { Box,Typography, TextField, Button } from '@mui/material';
// // import { useState } from "react";

// // // @mui material components
// // import Container from "@mui/material/Container";
// // import Grid from "@mui/material/Grid";
// // import Switch from "@mui/material/Switch";

// // const Contactus = () => {
// //   const [checked, setChecked] = useState(true);

// //    const handleChecked = () => setChecked(!checked);
// //   // const handleSubmit = (e) => {
// //   //   e.preventDefault();}

// //   return (
    
// //     <Box component="section" py={12 } data-aos="fade-up" style={{backgroundColor: '#DAE2B6',boxShadow: '0 0 10px rgba(0, 100, 0, 0.5)',marginTop:'50px'}}>
      
// //       <Container>
// //         <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
// //           <Typography  mb={1} sx={{fontFamily: 'Open Sans , sans-serif',fontSize: '1.5rem',fontWeight: 'bold' }}>
// //             Contact <span style={{color: '#7eaf6c '}}>Us</span>
// //           </Typography>
// //         </Grid>
// //         <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
// //           <Box width="100%" component="form" method="post" autoComplete="off">
// //             <Box p={3}>
// //               <Grid container spacing={3}>
// //                 <Grid item xs={12} md={6} sx={{fontFamily: 'Poppins, sans-serif',fontSize:'15px'}}>
// //                   <TextField label="First Name" variant="standard" fullWidth  />
// //                 </Grid>
// //                 <Grid item xs={12} md={6}>
// //                   <TextField label="Last Name" variant="standard" fullWidth  />
// //                 </Grid>
// //                 <Grid item xs={12}>
// //                   <TextField label="Email Address" variant="standard" type="email" fullWidth />
// //                 </Grid>
// //                 <Grid item xs={12}>
// //                   <TextField label="Your Message" variant="standard" multiline fullWidth rows={6} />
// //                 </Grid>
// //                 <Grid item xs={12} alignItems="center" ml={-1}>
// //                   <Switch checked={checked} onChange={handleChecked} />
// //                   <Typography
// //                     variant="button"
// //                     fontWeight="regular"
// //                     color="text"
// //                     ml={-1}
// //                     sx={{ cursor: "pointer", userSelect: "none" ,fontFamily: 'Poppins, sans-serif'}}
// //                     onClick={handleChecked}
// //                   >
// //                     &nbsp;&nbsp;I agree to the&nbsp;
// //                   </Typography>
// //                   <Typography
// //                     component="a"
// //                     href="#"
// //                     variant="button"
// //                     fontWeight="regular"
// //                     color="#1F6415"
// //                   >
// //                     Terms and Conditions
// //                   </Typography>
// //                 </Grid>
// //               </Grid>
// //               <Grid container item justifyContent="center" xs={12} my={2}>
// //                 <Button type="submit" variant="contained" color="success" fullWidth>
// //                   Send Message
// //                 </Button>
// //               </Grid>
// //             </Box>
// //           </Box>
// //         </Grid>
// //       </Container>
      
// //     </Box>
// //   //   <div className="container">
// //   //   <div className="contact_main">
// //   //     <h1 className="request_text">A Call Back</h1>
// //   //     <form onSubmit={handleSubmit}>
// //   //       <div className="form-group">
// //   //         <input type="text" className="email-bt" placeholder="Name" name="Name" />
// //   //       </div>
// //   //       <div className="form-group">
// //   //         <input type="text" className="email-bt" placeholder="Email" name="Email" />
// //   //       </div>
// //   //       <div className="form-group">
// //   //         <input type="text" className="email-bt" placeholder="Phone Number" name="PhoneNumber" />
// //   //       </div>
// //   //       <div className="form-group">
// //   //         <textarea className="massage-bt" placeholder="Message" rows="5" id="comment" name="Message"></textarea>
// //   //       </div>
// //   //       <button type="submit" className="send_btn">SEND</button>
// //   //     </form>
// //   //   </div>
// //   // </div>
// //   );
// // }




// // export default Contactus

// import React, { useState } from 'react';
// import { Box, Typography, TextField, Button } from '@mui/material';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Switch from '@mui/material/Switch';

// const Contactus = () => {
//   const [checked, setChecked] = useState(true);

//   const handleChecked = () => setChecked(!checked);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add form submission logic here
//   };

//   return (
//     <Box component="section" py={12} data-aos="fade-up" style={{ backgroundColor: '#DAE2B6', boxShadow: '0 0 10px rgba(0, 100, 0, 0.5)', paddingTop: '50px',marginTop:'50px' }}>
//       <Container>
//         <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
//           <Typography mb={1} sx={{ fontFamily: 'Open Sans , sans-serif', fontSize: '1.5rem', fontWeight: 'bold' }}>
//             Contact <span style={{ color: 'green' }}>Us</span>
//           </Typography>
//         </Grid>
//         <Grid container item xs={12} lg={7} sx={{ mx: 'auto' }}>
//           <Box width="100%" component="form" method="post" autoComplete="off" onSubmit={handleSubmit}>
//             <Box p={3}>
//               <Grid container spacing={3}>
//                 <Grid item xs={12} md={6} sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px' }}>
//                   <TextField label="First Name" variant="standard" fullWidth required />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <TextField label="Last Name" variant="standard" fullWidth required />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField label="Email Address" variant="standard" type="email" fullWidth required />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField label="Your Message" variant="standard" multiline fullWidth rows={6} required />
//                 </Grid>
//                 <Grid item xs={12} alignItems="center" ml={-1}>
//                   <Switch checked={checked} onChange={handleChecked} />
//                   <Typography variant="button" fontWeight="regular" color="text" ml={-1} sx={{ cursor: 'pointer', userSelect: 'none', fontFamily: 'Poppins, sans-serif' }} onClick={handleChecked}>
//                     &nbsp;&nbsp;I agree to the&nbsp;
//                   </Typography>
//                   <Typography component="a" href="#" variant="button" fontWeight="regular" color="#1F6415">
//                     Terms and Conditions
//                   </Typography>
//                 </Grid>
//               </Grid>
//               <Grid container item justifyContent="center" xs={12} my={2}>
//                 <Button type="submit" variant="contained" color="success" fullWidth style={{color:"#D2FBA4",backgroundColor: '#1A2902',borderRadius:'15px'}} >
//                   Send Message
//                 </Button>
//               </Grid>
//             </Box>
//           </Box>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Contactus;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
  form: {
    width: '100%',
    maxWidth: 400,
    marginTop: theme.spacing(2),
  },
  field: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: '#3f51b5',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#2c387e',
    },
  },
}));

function ContactPage() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h4" gutterBottom>
      Contact <span style={{ color: 'green' }}>Us</span>
      </Typography>
      <form className={classes.form}>
        <TextField
          className={classes.field}
          fullWidth
          label="Name"
          variant="outlined"
          id="name"
        />
        <TextField
          className={classes.field}
          fullWidth
          label="Email"
          variant="outlined"
          id="email"
        />
        <TextField
          className={classes.field}
          fullWidth
          multiline
          rows={5}
          label="Message"
          variant="outlined"
          id="message"
        />
        <Button
          className={classes.button}
          variant="contained"
          size="large"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ContactPage;


