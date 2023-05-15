import { makeStyles } from '@mui/styles';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#DDFFBB', 
    padding: '24px 0', 
  },
  link: {
    margin: '8px 12px', 
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box component="footer" className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              LEAFLINE
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique laborum quos rem, assumenda, unde dolorum enim voluptate harum at obcaecati doloribus, beatae aliquid! Quasi quod recusandae, cupiditate dolores nulla in.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Navigation
            </Typography>
            <nav>
              <Link
                variant="button"
                color="textPrimary"
                href="/"
                className={classes.link}
              >
                Home
              </Link><br/>
              <Link
                variant="button"
                color="textPrimary"
                href="/product"
                className={classes.link}
              >
                Products
              </Link><br/>
              <Link
                variant="button"
                color="textPrimary"
                href="/about-us"
                className={classes.link}
              >
                About
              </Link><br/>
              <Link
                variant="button"
                color="textPrimary"
                href="/contact-us"
                className={classes.link}
              >
                Contact
              </Link>
            </nav>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <nav>
              <Link
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
              >
                Terms
              </Link><br/>
              <Link
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
              >
                Privacy
              </Link>
            </nav>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Social
            </Typography>
              <nav>
                <Grid item xs={12} sm={6} md={2}>
              <Link
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
              >
                <FacebookIcon className={classes.icon} />
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
              >
                <TwitterIcon className={classes.icon} value='Twitter' />
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
              >
                <InstagramIcon className={classes.icon} />
              </Link>
              </Grid>
              </nav>
            </Grid>
          </Grid>
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
