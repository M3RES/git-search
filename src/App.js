import './App.css';
import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserProfile from './components/UserProfile';
import RepositoryList from './components/RepositoryList';

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const fetchUserData = async (username) => {
    try {
      // Fetch user details
      const userDetailsResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      if (!userDetailsResponse.ok) {
        throw new Error(`User not found: ${username}`);
      }
      const userDetails = await userDetailsResponse.json();

      // Fetch user repositories
      const userReposResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const userRepos = await userReposResponse.json();

      // Update state
      setUser(userDetails);
      setRepos(userRepos);
    } catch (error) {
      console.error('Error fetching data: ', error);
      // Handle error (e.g., user not found, network error)
      setUser(null);
      setRepos([]);
    }
  };

  const resetAppState = () => {
    setUser(null);
    setRepos([]);
  };

  return (
    <div>
      <UserForm onSubmitUsername={fetchUserData} />
      {user && <UserProfile user={user} onReset={resetAppState} />}
      {repos.length > 0 && <RepositoryList repos={repos} />}
    </div>
  );
}

export default App;
