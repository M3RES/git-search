// UserForm.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function UserForm({ onSubmitUsername }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitUsername(username);
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <input
        type='text'
        className='input-field'
        placeholder='GitHub Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type='submit' className='submit-button'>
        GO!
      </button>
    </form>
  );
}

UserForm.propTypes = {
  onSubmitUsername: PropTypes.func.isRequired,
};

export default UserForm;
