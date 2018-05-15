// import React, { Component } from 'react';
// import { View } from 'react-native';
// import { Container, Content } from 'native-base';
// import { StackNavigator } from 'react-navigation';
// import Authentication from './src/components/Authentication/Authentication';
// import ChangeInfo from './src/components/ChangeInfo/ChangeInfo';
// import Main from './src/components/Main/Main';
// import OrderHistory from './src/components/OrderHistory/OrderHistory';

// const App = StackNavigator({
//   Main: { screen: Main },
//   Authentication: { screen: Authentication },
//   ChangeInfo: { screen: ChangeInfo },
//   OrderHistory: { screen: OrderHistory }
// },
//   {
//     inittialRouteName:"Main",
//     headerMode:'none'
//   });

// export default App;

import React, { Component } from 'react';
import Main from './src/components/Main/Main';

class App extends Component{
  render(){
    return <Main/>;
  }
}
export default App;
