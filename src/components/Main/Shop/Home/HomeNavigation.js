import React, { Component } from 'react';
import { View } from 'react-native';
import { StackNavigator} from "react-navigation";
import ListProducts from '../ListProducts/ListProducts';
import ProductDetail from '../ProductDetail/ProductDetail';
import Home from './Home';

const HomeNavigation = StackNavigator({
    Home: { screen: Home },
    ListProducts: { screen: ListProducts },
    ProductDetail: { screen: ProductDetail }
    },
    {
        initialRouteName: "Home",
        headerMode:'none',
        
    })

export default HomeNavigation;