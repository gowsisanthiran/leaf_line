import { makeStyles } from '@mui/styles';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#DAE2B6', 
    padding: '24px 0', 
  },
  link: {
    margin: '8px 12px', 
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box component="footer" className={classes.footer} style={{}}>
      <Container maxWidth="lg">
        <Box mt={5}>
          <Typography variant="body2" color="textSecondary" align="center">
            {'© '}
            {new Date().getFullYear()}
            {' LEAFLINE. All rights reserved.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
