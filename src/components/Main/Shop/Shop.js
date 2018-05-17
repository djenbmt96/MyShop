import React, { Component } from 'react';
import { View } from 'react-native';
import {
    Text, Left, Body, Right, Button, Icon, Title, Container, Content, Input, Tab, Tabs, TabHeading,
    Badge
} from 'native-base';
import Home from './Home/HomeNavigation';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Search from './Search/Search';
import Head from './Head';
import styles from '../../../styles/Main/Shop';

class Shop extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Head onOpen={() => this.props.navigation.openDrawer()} />
                <Tabs initialPage={0}
                    tabBarPosition='bottom'
                    locked
                >
                    <Tab heading={
                        <TabHeading style={styles.tabHead}>
                            <Icon name='home' />
                            <Text>Home</Text>
                        </TabHeading>
                    }>
                        <Home/>
                    </Tab>
                    <Tab heading={
                        <TabHeading style={styles.tabHead}>
                        
                            <Icon name='cart' />
                            <Text>Cart</Text>
                            <Badge style={styles.badge}><Text>2</Text></Badge>
                        </TabHeading>
                    }>
                        <Cart />
                    </Tab>
                    <Tab heading={
                        <TabHeading style={styles.tabHead}>
                            <Icon name='search' />
                            <Text>Search</Text>
                        </TabHeading>
                    }>
                        <Search />
                    </Tab>
                    <Tab heading={
                        <TabHeading style={styles.tabHead}>
                            <Icon name='contact' />
                            <Text>Contact</Text>
                        </TabHeading>
                    }>
                        <Contact />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

export default Shop;