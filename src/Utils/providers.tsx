import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux'
import {getPersistor} from '@rematch/persist'
import {PersistGate} from 'redux-persist/lib/integration/react'
import RootContainer from '../App'
import store from './Redux'
import {render} from 'react-snapshot'
import Amplify from 'aws-amplify'
import awsconfig from './Constants/amplify'
import ReactDOM from 'react-dom';
Amplify.configure(awsconfig)


export default(element:any) => {

  ReactDOM.render(
      <Provider store={store}>
        <PersistGate persistor={getPersistor()}>
          <Router>
            {/* <Route path="/" component={RootContainer}/> */}
            <RootContainer/>
          </Router>
        </PersistGate>
      </Provider>
  , element);

};

