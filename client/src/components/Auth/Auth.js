import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import logo from '../../images/Bg2.jpeg'
import Header2 from '../Layout/Header2'
import Login from './Login';
import Registration from './Registration';
import { MDBContainer, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import './auth.css'

const Auth = () => {

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <>
    <Header2/>
{/*Banner starts*/}
<section class="banner productpage">
        <div class="container container2">
            <div class="row">
                <div class="col-lg-12 d-flex justify-content-start">
                    <div class="text-center">
                        <h2 class="banner-title">Login | Register</h2>
                        <nav aria-label="breadcrumb" class="d-flex justify-content-center fast-breadcrumb">
                            <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to='/'><HomeIcon/> Home</Link></li>
                              <li class="breadcrumb-item active" aria-current="page">Authentication </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
                    {/*Banner Ends*/}
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink  onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === 'tab1'}>
          <Login />
        </MDBTabsPane>
        <MDBTabsPane show={justifyActive === 'tab2'}>
          <Registration />
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
    </>
  );
}

      export default Auth