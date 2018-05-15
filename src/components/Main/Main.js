import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem, Container, Content, Image, Left, Icon, Text } from 'native-base';
import { DrawerNavigator } from "react-navigation";
import Authentication from '../Authentication/Authentication';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import OrderHistory from '../OrderHistory/OrderHistory';
import SideBar from './SideBar';
import Home from './Shop/Home/Home';
import Shop from './Shop/Shop';

const Main = DrawerNavigator(
    {
        Home: {screen: Home},
        Authentication: { screen: Authentication },
        ChangeInfo: { screen: ChangeInfo },
        OrderHistory: { screen: OrderHistory },
        Shop : {screen: Shop},
    },
    {
        contentComponent: props => <SideBar {...props} />
    });
export default Main;