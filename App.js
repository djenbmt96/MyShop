import React, { Component } from 'react';
import Main from './src/components/Main/Main';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './src/reducers/index';

const store = createStore(allReducers);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>)
  }
}
export default App;
