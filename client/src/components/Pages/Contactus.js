import React from 'react'
import { Box,Typography, TextField, Button } from '@mui/material';
import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

const Contactus = () => {
  const [checked, setChecked] = useState(true);

  const handleChecked = () => setChecked(!checked);

  return (
    
    <Box component="section" py={12 } data-aos="fade-up">
      
      <Container>
        <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
          <Typography variant="h3" mb={1}>
            Contact Us
          </Typography>
        </Grid>
        <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
          <Box width="100%" component="form" method="post" autoComplete="off">
            <Box p={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField label="First Name" variant="standard" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField label="Last Name" variant="standard" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Email Address" variant="standard" type="email" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Your Message" variant="standard" multiline fullWidth rows={6} />
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
                    &nbsp;&nbsp;I agree to the&nbsp;
                  </Typography>
                  <Typography
                    component="a"
                    href="#"
                    variant="button"
                    fontWeight="regular"
                    color="#1F6415"
                  >
                    Terms and Conditions
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item justifyContent="center" xs={12} my={2}>
                <Button type="submit" variant="contained" color="success" fullWidth>
                  Send Message
                </Button>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Container>
      
    </Box>
  );
}



export default Contactus