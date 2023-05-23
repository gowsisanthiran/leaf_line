import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Login from './Login';
import Registration from './Registration';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const Auth = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    if (index > 1) {
      index = 1;
    }
    setValue(index);
  };
  const glassmorphismStyles = {

    bgcolor: 'transparent',
    maxWidth: 500,
    margin: '0 auto',
    padding: '5px',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.2)',

  };

  return (
    <Box sx={{ bgcolor: 'background.paper', maxWidth: 500, margin: '0 auto', padding: '5px' }} style={glassmorphismStyles} className='box-shadow'>
      <AppBar position="static" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          style={{ backgroundColor: "white", color: "black" }}
        >
          <Tab label="Login" {...a11yProps(0)} />
          <Tab label="Registration" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
  index={value}
  onChangeIndex={handleChangeIndex}
>
  <TabPanel
    value={value}
    index={0}
    dir={theme.direction}
    style={{
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      padding: '10px',
      border: '1px solid rgba(255, 255, 255, 0)', // Transparent border
    }}
  >
    <Login />
  </TabPanel>
  <TabPanel
    value={value}
    index={1}
    dir={theme.direction}
    style={{
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      padding: '10px',
      border: '1px solid rgba(255, 255, 255, 0)', // Transparent border
    }}
  >
    <Registration />
  </TabPanel>
</SwipeableViews>

    </Box>
  )
}

export default Auth