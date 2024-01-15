// RepositoryList.js
import React from 'react';
import PropTypes from 'prop-types';

function RepositoryList({ repos }) {
  return (
    <ul className='repo-list'>
      {repos.map((repo) => (
        <li key={repo.id} className='repo-item'>
          {repo.name}
        </li>
      ))}
    </ul>
  );
}

RepositoryList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default RepositoryList;
