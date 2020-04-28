import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

// import { Interactions } from 'aws-amplify';


type Response = {
  message:string
}

function App() {
  React.useEffect(() => {
    addResponseMessage('Welcome to this awesome chat!');
    // test()
  }, []);
  const handleNewUserMessage = (newMessage: string) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage(newMessage);
  };
  // async function test() {
  //   let userInput = "I want to reserve a hotel for tonight";

  //   // Provide a bot name and user input
  //   const response:any = await Interactions.send("ScheduleAppointment", userInput);

  //   // Log chatbot response
  //   console.log(response.message);
  // }

  // const handleComplete = function (err:any, confirmation:any) {
  //   if (err) {
  //     alert('bot conversation failed');
  //     return;
  //   }
  //   alert('done: ' + JSON.stringify(confirmation, null, 2));

  //   return 'Trip booked. Thank you! What would you like to do next?';
  // }

  // Interactions.onComplete('ScheduleAppointment', handleComplete);
  return (
    <div className="App">
      <header className="App-header">
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          profileAvatar={logo}
          title="My new awesome title"
          subtitle="And my cool subtitle"
        />
      </header>
    </div>
  );
}

export default App;
