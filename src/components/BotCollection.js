import React, { useState, useEffect } from 'react';
import BotProfile from './BotProfile';

const BotCollection = ({ enlistBot }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="bot-collection">
      <h1>Bot Collection</h1>
      {bots.map(bot => (
        <BotProfile key={bot.id} bot={bot} onClick={enlistBot} />
      ))}
    </div>
  );
};

export default BotCollection;
