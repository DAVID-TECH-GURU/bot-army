import React from 'react';
import PropTypes from 'prop-types';

const BotCard = ({ bot, onBotSelect, onBotRemove }) => {
  const handleBotClick = () => {
    onBotSelect(bot);
  };

  const handleBotRemove = () => {
    onBotRemove(bot);
  };

  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <div className="bot-card-details">
        <h3>{bot.name}</h3>
        <p>{bot.catchphrase}</p>
        <button onClick={handleBotClick}>Select</button>
        {onBotRemove && <button onClick={handleBotRemove}>Remove</button>}
      </div>
    </div>
  );
};

BotCard.propTypes = {
  bot: PropTypes.object.isRequired,
  onBotSelect: PropTypes.func,
  onBotRemove: PropTypes.func,
};

export default BotCard;
