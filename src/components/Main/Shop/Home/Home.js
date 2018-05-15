import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Left, Body, Right, Button, Icon, Title, Container, Content, Input, Tab, Tabs, TabHeading } from 'native-base';
import Cart from '../Cart/Cart';
import Contact from '../Contact/Contact';
import Search from '../Search/Search';
import Head from '../Head';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

class Menu extends Component {
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
                        <TabHeading style={{ backgroundColor: "#34B089" }}>
                            <Icon name='home' />
                            <Text>Home</Text>
                        </TabHeading>
                    }>
                        <Content padder>
                            <Collection />
                            <Category />
                            <TopProduct/>
                        </Content>
                    </Tab>
                    <Tab heading={
                        <TabHeading style={{ backgroundColor: "#34B089" }}>
                            <Icon name='cart' />
                            <Text>Cart</Text>
                        </TabHeading>
                    }>
                        <Cart />
                    </Tab>
                    <Tab heading={
                        <TabHeading style={{ backgroundColor: "#34B089" }}>
                            <Icon name='search' />
                            <Text>Search</Text>
                        </TabHeading>
                    }>
                        <Search />
                    </Tab>
                    <Tab heading={
                        <TabHeading style={{ backgroundColor: "#34B089" }}>
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

export default Menu;