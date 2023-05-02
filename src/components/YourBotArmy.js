import React from 'react';
import BotProfile from './BotProfile';

const YourBotArmy = ({ army, releaseBot, dischargeBot }) => {
  return (
    <div className="your-bot-army">
      <h1>Your Bot Army</h1>
      {army.map(bot => (
        <div key={bot.id} className="enlisted-bot">
          <BotProfile bot={bot} />
          <button onClick={() => releaseBot(bot.id)}>Release</button>
          <button onClick={() => dischargeBot(bot.id)}>Discharge</button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
