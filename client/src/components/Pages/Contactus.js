

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Typography, TextField, Button } from '@material-ui/core';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Avatar, Grid } from '@material-ui/core';
// import sl20 from '../../images/edit.png';
// import sl21 from '../../images/edit1.png';
// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     marginTop: theme.spacing(4),
//   },
//   form: {
//     width: '100%',
//     maxWidth: 400,
//     marginTop: theme.spacing(2),
//   },
//   field: {
//     marginBottom: theme.spacing(2),
//   },
//   button: {
//     marginTop: theme.spacing(2),
//     backgroundColor: '#3f51b5',
//     color: '#fff',
//     '&:hover': {
//       backgroundColor: '#2c387e',
//     },
//   },
// }));

// function ContactPage() {
//   const classes = useStyles();
//   const teamMembers = [
//     { name: 'John Doe', avatarUrl: 'https://example.com/avatar1.jpg' },
//     { name: 'Jane Smith', avatarUrl: 'https://example.com/avatar2.jpg' },
//     { name: 'Michael Johnson', avatarUrl: 'https://example.com/avatar3.jpg' },
//     // Add more team members as needed
//   ];

//   return (
//     <div className={classes.container}>
//       <div>
//         {/* Team */}
//       <Carousel
//         showArrows={true}
//         infiniteLoop={true}
//         showThumbs={false}
//         showStatus={false}
//         autoPlay={true}
//         interval={3000}
//       >
//         {teamMembers.map((member, index) => (
//           <div key={index}>
//             <Grid container justifyContent="center">
//               <Avatar
//                 alt={member.name}
//                 src={member.avatarUrl}
//                 style={{ width: '150px', height: '150px' }}
//               />
//             </Grid>
//             <p style={{ textAlign: 'center' }}>{member.name}</p>
//           </div>
//         ))}
//       </Carousel></div>
//       <Typography variant="h4" gutterBottom>
//         Contact <span style={{ color: 'green' }}>Us</span>
//       </Typography>
//       <form className={classes.form}>
//         <TextField
//           className={classes.field}
//           fullWidth
//           label="Name"
//           variant="outlined"
//           id="name"
//         />
//         <TextField
//           className={classes.field}
//           fullWidth
//           label="Email"
//           variant="outlined"
//           id="email"
//         />
//         <TextField
//           className={classes.field}
//           fullWidth
//           multiline
//           rows={5}
//           label="Message"
//           variant="outlined"
//           id="message"
//         />
//         <Button
//           className={classes.button}
//           variant="contained"
//           size="large"
//           type="submit"
//         >
//           Submit
//         </Button>

//       </form>

      
//     </div>
//   );
// }

// export default ContactPage;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Avatar, Grid } from '@material-ui/core';
import sl20 from '../../images/edit.png';
import sl21 from '../../images/edit1.png';
import './aboutus.css'
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(5),
    backdropFilter: 'blur(100px)', // Apply the glass-like effect
    backgroundColor: '#DAE2B6',
        padding: theme.spacing(5),
    borderRadius: theme.spacing(2),
  },
  field: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: '#3f51b5',
    color: '#fff',
    '&:hover': {
      backgroundColor:'#5f8273',
      borderColor:'#5f8273' ,
      color:'#ffffff' ,
    },
  },

}));

function ContactPage() {
  const classes = useStyles();


  return (
    
      
<div class="formContainer" style={{background: '#DAE2B6',marginTop:'10rem'}}>
  <div class="formcard">
    <div class="left">
      <img src="https://piantica.com/wp-content/uploads/2020/08/Untitled-design183-1024x379.png" style={{width:'400px',height:'500px'}}/>
    </div>
    <div class="right">
    <h2 style={{ fontFamily: 'Open Sans , sans-serif', fontSize: '40px', fontWeight:'bold' }}><span style={{color:'#008000'}}>Contact</span>Us</h2>

      <div class="contact">
        <div class="form-container">
          <form class="form">
            <div class="username">
              <input type="text" placeholder="Enter your Name"/>
            </div>
            <div class="useremail">
              <input type="email" placeholder="Enter your email" required/>
            </div>
            <div class="usermessage">
              <textarea placeholder="Enter your message" required></textarea>
            </div>
            <div class="usersubmit">
              <input type="submit" value="Contact Us" />
            </div>
          </form>
        </div>
        <div class="address">
          <div class="email">
            <h4>Contact</h4>
            <p>leafline@gmail.com</p>
          </div>
          <div class="location">
            <h4>Based in</h4>
            <p>Kopay,Jaffna<br/>Srilanka</p>
          </div>
          <div class="social">
            <span><a href="#"><i class="fab fa-facebook"></i></a></span>
            <span><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></span>
            <span><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default ContactPage;

