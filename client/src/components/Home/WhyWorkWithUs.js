import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import WorkIcon from '@mui/icons-material/Work';
import SettingsIcon from '@mui/icons-material/Settings';
import StarIcon from '@mui/icons-material/Star';
import { spacing } from '@mui/system'; // Import the spacing function separately




const useStyles = makeStyles((theme) => ({
  section: {
    background: "white",
    padding: spacing(4),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  icon: {
    marginBottom: spacing(3),
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
  const classes = useStyles();

  return (
    <div className={classes.section} id="learn">
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardContent>
              <WorkIcon className={classes.icon} />
              <Typography variant="h5" component="h2" className={classes.heading}>
                Experience
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada
                laoreet tempus blandit pretium etc.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardContent>
              <SettingsIcon className={classes.icon} />
              <Typography variant="h5" component="h2" className={classes.heading}>
                Flexibility
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada
                laoreet tempus blandit pretium etc.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardContent>
              <StarIcon className={classes.icon} />
              <Typography variant="h5" component="h2" className={classes.heading}>
                Results
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada
                laoreet tempus blandit pretium etc.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default WhyWorkWithUs;
