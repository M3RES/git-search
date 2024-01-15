import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserProfile extends Component {
  render() {
    const { user, onReset } = this.props;
    return (
      <div className='profile-container'>
        {user && (
          <>
            <img
              src={user.avatar_url}
              alt={`${user.name}'s avatar`}
              className='profile-image'
            />
            <h2>{user.name}</h2>
            <p className='profile-details'>{user.location}</p>
            <p className='profile-details'>{user.bio}</p>
            {/* Reset button */}
            <button onClick={onReset} className='reset'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24'
                viewBox='0 -960 960 960'
                width='24'>
                <path d='M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440h80q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-6l62 62-56 58-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Z' />
              </svg>
              Reset
            </button>
          </>
        )}
      </div>
    );
  }
}

UserProfile.propTypes = {
  user: PropTypes.object,
  onReset: PropTypes.func.isRequired,
};

export default UserProfile;
