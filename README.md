#wk2 code challenge bot battlr
#Learning Goals
A mini web application has been created using React, which allows users to view a list of bots, view their details, and enlist them in their army. This README provides information on how to use the app, including installation and usage instructions.

#Installation
To use this app, you will need to follow these steps:

Clone the repository to your local machine.
Navigate to the project directory in your terminal or command prompt.
Run npm install to install the necessary dependencies.
Run json-server --watch db.json to start the backend server.
In your browser, navigate to http://localhost:3000/bots to ensure that the server is working correctly.
Usage
Once you have installed the app and confirmed that the server is running, you can start using the app. Simply run npm start in your terminal or command prompt to start the app, and then navigate to http://localhost:3000 in your browser.

#Core Deliverables
The app's core functionality includes the following:

View a list of bots rendered in BotCollection.
Add an individual bot to your army by clicking on it. The selected bot should
render in the YourBotArmy component. The bot can be enlisted only once.
The bot does not disappear from the BotCollection.
Release a bot from your army by clicking on it. The bot disappears from the
YourBotArmy component.
Discharge a bot from its service forever by clicking the red button marked
"x," which would delete the bot both from the backend and from the
YourBotArmy on the frontend.
#Advanced Deliverables
The app's advanced functionality includes the following:

Choose if you want to enlist a bot into your army or just see its data. Clicking
on the card displays a show view (BotSpecs) for that bot,
which replaces BotCollection. BotSpecs has two buttons: one
to go back to the list view and another to enlist that bot.
Sort bots by their health, damage or armor. For this, create a new component,
SortBar.
When you enlist a bot, it will be removed from the BotCollection and added
to YourBotArmy.
Endpoints
GET /bots
Returns a JSON array of all bots, including their name, health, damage, armor, bot class, catchphrase, avatar URL, and creation/update timestamps.

DELETE /bots/:id
Deletes the bot with the specified id from the backend.

#Conclusion
This README file provides all the necessary information to get started with the Learning Goals web app. If you encounter any issues or have any questions, please feel free to reach out to the project contributors.

#MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
