import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectLoggedInUser } from '../../redux/features/authSlice';
import jwtDecode from 'jwt-decode';


const UserProfile = () => {
  const { user, accessToken } = useSelector(selectLoggedInUser);
  const { UserInfo } = jwtDecode(accessToken);

  return (
    <div class="container" style={{paddingTop: '100px', fontFamily: 'Poppins, sans-serif', fontSize:'15px',color: ''}}>
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Account Details</h3>
          <img class="card-img-top user-profile-avatar" src={user.avatar.url} alt={user.name} style={{width: '80px',height: '80px',borderRadius: '50%',margin: '0 auto',marginBottom: '1rem'
  }} />
          <h3 class="card-subtitle">{user.name}</h3>
          <p class="card-text">{UserInfo.roles}</p>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col-4">
                  <span class="font-weight-bold">E-mail:</span>
                </div>
                <div class="col-8">
                  <span>{UserInfo.email}</span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-4">
                  <span class="font-weight-bold">Joined Date:</span>
                </div>
                <div class="col-8">
                  <span>{String(user.createdAt).substr(0, 10)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="row">
            <div class="col-md-6">
              <a href="/me/update" class="btn btn-primary">
                Update Profile
              </a>
            </div>
            <div class="col-md-6">
              <a href="/password/update" class="btn btn-primary">
                Change Password
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default UserProfile;
