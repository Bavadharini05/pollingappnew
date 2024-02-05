import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Polling.css';

function Polling() {
  const navigate = useNavigate();

  // Use state to manage poll data
  const [pollData, setPollData] = useState({
    movie: 0,
    music: 0,
    game: 0,
    book: 0,
  });

  // Function to handle vote
  const handleVote = (pollOption) => {
    setPollData((prevData) => ({
      ...prevData,
      [pollOption]: prevData[pollOption] + 1,
    }));
  };

  // Function to handle logout
  const handleLogout = () => {
    // Navigate to the home page on logout
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Entertainment Poll</h2>

      {/* Movie Poll */}
      <div>
        <h3>Movie Poll</h3>
        <p>{`Votes: ${pollData.movie}`}</p>
        <button onClick={() => handleVote('movie')}>Vote</button>
      </div>

      {/* Music Poll */}
      <div>
        <h3>Music Poll</h3>
        <p>{`Votes: ${pollData.music}`}</p>
        <button onClick={() => handleVote('music')}>Vote</button>
      </div>

      {/* Game Poll */}
      <div>
        <h3>Game Poll</h3>
        <p>{`Votes: ${pollData.game}`}</p>
        <button onClick={() => handleVote('game')}>Vote</button>
      </div>

      {/* Book Poll */}
      <div>
        <h3>Book Poll</h3>
        <p>{`Votes: ${pollData.book}`}</p>
        <button onClick={() => handleVote('book')}>Vote</button>
      </div>

      {/* Logout Button */}
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Polling;
