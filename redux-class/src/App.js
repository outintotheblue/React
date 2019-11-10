import React from 'react';
import {Provider} from 'react-redux'
import configureStore from './redux/store'
import TestComponent  from './TestComponent';

const {store, persistor} = configureStore()

function App() {
  return (
   <Provider store = {store}>
     <TestComponent/>  
   </Provider>
  );
}

export default App;
