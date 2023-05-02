import React from 'react';

const BotProfile = ({ bot, onClick }) => {
  const { id, name, bot_class, health, damage, armor, avatar_url, catchphrase } = bot;

  return (
    <div className="bot-profile">
      <img src={avatar_url} alt={name} className="bot-avatar" />
      <div className="bot-details">
        <h2>{name}</h2>
        <p>{`Class: ${bot_class}`}</p>
        <p>{`Health: ${health}`}</p>
        <p>{`Damage: ${damage}`}</p>
        <p>{`Armor: ${armor}`}</p>
        <p>{`Catchphrase: ${catchphrase}`}</p>
        <button onClick={() => onClick(id)}>Enlist</button>
      </div>
    </div>
  );
};

export default BotProfile;
