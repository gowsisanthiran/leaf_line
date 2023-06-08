import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { useNavigate } from 'react-router-dom';

import { selectShippingInfo, saveShippingInfo } from '../../redux/features/shippingSlice';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';


import { Box, Typography, TextField, Button, TextareaAutosize, Grid, Avatar } from '@mui/material';

const Shipping = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { shipInfo } = useSelector(selectShippingInfo);
  const validationCriteria = {
    address: {
      required: true,
      minLength: 5, // Example: Address should have at least 5 characters
    },
    city: {
      required: true,
    },
    zipCode: {
      required: true,
      pattern: /^\d{5}$/ // Example: Zip code should be a 5-digit number
    },
    state: {
      required: true,
    },
    country: {
      required: true,
    },
    phone: {
      required: true,
      pattern: /^\d{10}$/ // Example: Phone number should be a 10-digit number
    },
  };


  const [address, setAddress] = useState(shipInfo.address || '');
  const [city, setCity] = useState(shipInfo.city || '');
  const [zipCode, setZipCode] = useState(shipInfo.zipCode || '');
  const [state, setState] = useState(shipInfo.state || '');
  const [country, setCountry] = useState(shipInfo.country || '');
  const [phone, setPhone] = useState(shipInfo.phone || '');
  const [errors, setErrors] = useState({});

  const validateShippingInfo = () => {
    const newErrors = {};

    // Validate each shipping field based on the validation criteria
    for (const field in validationCriteria) {
      const value = eval(field); // Get the value of the field dynamically

      // Check if the field is required and value is empty
      if (validationCriteria[field].required && !value) {
        newErrors[field] = 'This field is required.';
      }

      // Check if the field has a pattern to match
      if (
        validationCriteria[field].pattern &&
        value &&
        !validationCriteria[field].pattern.test(value)
      ) {
        newErrors[field] = 'Invalid format.';
      }

      // Check if the field has a minimum length
      if (
        validationCriteria[field].minLength &&
        value &&
        value.length < validationCriteria[field].minLength
      ) {
        newErrors[field] = `Must be at least ${validationCriteria[field].minLength} characters long.`;
      }
    }

    setErrors(newErrors); // Update the errors state
    return Object.keys(newErrors).length === 0; // Return true if there are no errors
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateShippingInfo()) {
      dispatch(saveShippingInfo({ address, phone, city, zipCode, state, country }));
      navigate('/confirm-order');
    }
  }
  return (
    <Box
      sx={{
        marginTop: 8,

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 2px 4px #5F8D4E',
        borderRadius: '4px',
        padding: '50px',
        backgroundColor: '#fff',
        height: "100% !important",
        width: "580px",
        marginLeft: "560px"

      }}
    >
      <Box sx={{ m: '0 auto', marginTop: 2, textAlign: 'center', maxWidth: '550px' }}>
        <LocationOnIcon sx={{ width: 100, height: 100, borderRadius: "25px", backgroundImage: 'linear-gradient(to right, #143a0d, #c0dca5)' }} />
        <Typography component='div' variant='h5'>Shipping Information</Typography>
        <Box component='form' onSubmit={handleSubmit} sx={{ p: 1 }}>
          <TextareaAutosize required
            aria-label='address'
            minRows={5}
            placeholder='Address'
            value={address}
            style={{ width: '100%', marginTop: '16px' }}
            onChange={(e => setAddress(e.target.value))}
          />
          {errors.address && <Typography color="error">{errors.address}</Typography>}

          <TextField type='text'
            id='phone'
            label='Phone'
            name='phone'
            margin='normal'
            required
            fullWidth
            color="success"
            value={phone}
            onChange={(e => setPhone(e.target.value))}
          />
          {errors.phone && <Typography color="error">{errors.phone}</Typography>}

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField type='text'
                id='city'
                label='City'
                name='city'
                margin='normal'
                color="success"
                required
                fullWidth
                value={city}
                onChange={(e => setCity(e.target.value))}
              />
              {errors.city && <Typography color="error">{errors.city}</Typography>}

            </Grid>
            <Grid item xs={6}>
              <TextField type='text'
                id='zipCode'
                label='Zip'
                name='zipCode'
                margin='normal'
                color="success"
                required
                fullWidth
                value={zipCode}
                onChange={(e => setZipCode(e.target.value))}
              />
              {errors.zipCode && <Typography color="error">{errors.zipCode}</Typography>}

            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <CountryDropdown classes='ship-drop-down'
                defaultOptionLabel='Select a coutry'
                style={{ width: '100%' }}
                value={country}
                valueType='short'
                priorityOptions={['CA', 'US', 'IN', 'GB']}
                onChange={(e => setCountry(e))}
              />
              {errors.country && <Typography color="error">{errors.country}</Typography>}

            </Grid>
            <Grid item xs={6}>
              <RegionDropdown classes='ship-drop-down'
                defaultOptionLabel='Now select a region'
                blankOptionLabel='No country selected'
                style={{ width: '100%' }}
                value={state}
                country={country}
                countryValueType='short'
                onChange={(e => setState(e))}
              />
              {errors.state && <Typography color="error">{errors.state}</Typography>}

            </Grid>
          </Grid>

          <Button type='submit'
            variant='contained'
            startIcon={<LocalShippingIcon />}
            sx={{ m: 4, backgroundColor: '#617A55' }}>
            Continue
          </Button>


        </Box>
      </Box>
    </Box>

  )
}

export default Shipping