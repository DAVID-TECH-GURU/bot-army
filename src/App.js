import React, { useState, useEffect } from 'react';
import './App.css';
import BotCard from './components/BotCard';
import BotCollection from './components/BotCollection';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';
import YourBotArmy from './components/YourBotArmy';
import BotProfile from './components/BotProfile';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [showSpecs, setShowSpecs] = useState(false);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortType, setSortType] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(res => res.json())
      .then(data => setBots(data))
      .catch(error => console.log(error));
  }, []);

  const handleEnlist = (bot) => {
    setArmy([...army, bot]);
    setBots(bots.filter((b) => b.id !== bot.id));
    setSelectedBot(null);
    setShowSpecs(false);
  };

  const handleBack = () => {
    setShowSpecs(false);
    setSelectedBot(null);
  };

  const handleSort = (type) => {
    if (sortType === type) {
      setBots([...bots.reverse()]);
    } else {
      setBots([...bots.sort((a, b) => b[type] - a[type])]);
    }
    setSortType(type);
  };

  const handleFilter = (classes) => {
    setBots([...bots.filter((bot) => classes.includes(bot.bot_class))]);
  };

  const handleSelect = (bot) => {
    setSelectedBot(bot);
    setShowSpecs(true);
  };

  const releaseBot = (id) => {
    const releasedBot = army.find(bot => bot.id === id);
    setArmy(army.filter(bot => bot.id !== id));
    setBots([...bots, releasedBot]);
  }

  const dischargeBot = (id) => {
    const dischargedBot = army.find(bot => bot.id === id);
    deleteBot(dischargedBot);
  }

  const deleteBot = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setBots((oldBots) => oldBots.filter((b) => b !== bot));
        setArmy((oldArmy) => oldArmy.filter((b) => b !== bot));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <h1>Bot Army</h1>
      <SortBar handleSort={handleSort} />
      <BotCollection
        bots={bots}
        handleSelect={handleSelect}
        handleFilter={handleFilter}
      />
      <YourBotArmy
        army={army}
        releaseBot={releaseBot}
        dischargeBot={dischargeBot}
      />
      <div className="card-container">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleSelect={handleSelect} />
        ))}
      </div>
      <div className="filter-container">
        <h2>Filter by Class:</h2>
        <button onClick={() => handleFilter(['Support'])}>Support</button>
        <button onClick={() => handleFilter(['Medic'])}>Medic</button>
        <button onClick={() => handleFilter(['Assault'])}>Assault</button>
        <button onClick={() => handleFilter(['Defender'])}>Defender</button>
        <button onClick={() => handleFilter(['Captain'])}>Captain</button>
        <button onClick={() => handleFilter(['Witch'])}>Witch</button>
      </div>
      <div className="army-container">
        <h2>Your Bot Army:</h2>
        {army.map((bot) => (
          <div key={bot.id}>
            <h3>{bot.name}</h3>
            <p>Class: {bot.bot_class}</p>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <button onClick={() => dischargeBot(bot.id)}>Discharge</button>
          </div>
        ))}
      </div>
      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          handleEnlist={handleEnlist}
          handleBack={handleBack}
        />
      ) : (
        <div>
          <div className="bot-profile-container">
            {bots.map((bot) => (
              <BotProfile key={bot.id} bot={bot} onClick={handleEnlist} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
  }
export default App;


