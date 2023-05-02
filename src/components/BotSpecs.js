import React from 'react';

const BotSpecs = ({ bot, handleEnlist, handleBack }) => {
  return (
    <div>
      <h2>{bot.name}</h2>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={handleEnlist}>Enlist Bot</button>
      <button onClick={handleBack}>Back to List</button>
    </div>
  );
};

export default BotSpecs;
