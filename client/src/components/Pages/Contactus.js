

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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(5),
    backdropFilter: 'blur(100px)', // Apply the glass-like effect
    backgroundColor: 'rgba(0, 128, 0, 0.5)',
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
  image: {
    width: '150px',
    height: '150px',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: theme.spacing(2),
  },
  imageWrapper: {
    marginLeft: theme.spacing(2),
  },
}));

function ContactPage() {
  const classes = useStyles();
  const teamMembers = [
    { name: 'Hubert Robinshan', avatarUrl: 'https://example.com/avatar1.jpg' },
    { name: 'Gayathri Jeyananthan', avatarUrl: 'https://example.com/avatar2.jpg' },
    { name: 'Gowsalya Santhirasegaram', avatarUrl: 'https://example.com/avatar3.jpg' },
    // Add more team members as needed
  ];

  return (
    <div className={classes.container }  >
     

<Typography variant="h4" gutterBottom style={{textAlign:'center',fontFamily: 'Open Sans'}}>
        Our <span style={{ color: 'green' }}>Team</span>
      </Typography>
      <Typography variant="h5" gutterBottom style={{textAlign:'center'}}>
         <span style={{ color: 'green',fontFamily: 'Open Sans' }}>Feel free and contact us with our members</span>
      </Typography>
      {/* Team */}
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
      >
        {teamMembers.map((member, index) => (
          <div key={index}>
            <Grid container justifyContent="center">
              <Avatar
                alt={member.name}
                src={member.avatarUrl}
                style={{ width: '250px', height: '250px' }}
              />
            </Grid>
            <p style={{ textAlign: 'center' }}>{member.name}</p>
          </div>
        ))}
      </Carousel>
      

      <Typography variant="h4" gutterBottom style={{ textAlign: 'center', fontFamily: 'Open Sans',scrollPaddingBottom:'400px' }}>
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
          style={{backgroundColor:'#5f8273',
          borderColor:'#5f8273' ,
          color:'#ffffff' }}
        >
          Submit
        </Button>
      </form>
      
    </div>
  );
}

export default ContactPage;

