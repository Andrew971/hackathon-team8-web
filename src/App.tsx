import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import { Auth,Interactions } from 'aws-amplify'

// import { Interactions } from 'aws-amplify';


type Response = {
  message:string
}

function App() {
  // Auth.signUp({
  //   username:'andrew.entreprise@gmail.com',
  //   password:'Littleswak971',
  //   validationData: []  //optional
  //   })
  React.useEffect(() => {
    addResponseMessage('Welcome to this awesome chat!');
    signIn()
    // test()
  }, []);
  async function signIn () {
    
    
    const user = await Auth.signIn('andrew.entreprise@gmail.com', 'Littleswak971')
    console.log('user',user)
  }
  const handleNewUserMessage = async (newMessage: string) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    const response:any = await Interactions.send("ScheduleAppointment", newMessage);
    addResponseMessage(response.message);
  };

  async function test() {
    let userInput = "I would like to book an appointment";

    // Provide a bot name and user input
    const response:any = await Interactions.send("ScheduleAppointment", userInput);

    // Log chatbot response
    console.log(response.message);
    addResponseMessage(response.message);
  }

  const handleComplete = function (err:any, confirmation:any) {
    if (err) {
      alert('bot conversation failed');
      return;
    }
    alert('done: ' + JSON.stringify(confirmation, null, 2));

    return 'Trip booked. Thank you! What would you like to do next?';
  }

  Interactions.onComplete('ScheduleAppointment', handleComplete);
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
