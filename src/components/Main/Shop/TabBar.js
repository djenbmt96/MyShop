import React, { Component } from 'react';
import { View } from 'react-native';
import {Tabs,Tab,TabHeading,Icon,Text,Content,Badge} from 'native-base';
import Collection from './Home/Collection';
import Category from './Home/Category';
import TopProduct from './Home/TopProduct';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Search from './Search/Search';

class TabBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
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
                    <Content padder>
                        <Collection />
                        <Category onOpen={this.props.onOpenList} />
                        <TopProduct onOpen={this.props.onOpenProduct} />
                    </Content>
                </Tab>
                <Tab heading={
                    <TabHeading style={styles.tabHead}>

                        <Icon name='cart' />
                        <Text>Cart</Text>
                        <Badge style={styles.badge}><Text>2</Text></Badge>
                    </TabHeading>
                }>
                    <Cart onOpen={this.props.onOpenProduct} />
                </Tab>
                <Tab heading={
                    <TabHeading style={styles.tabHead}>
                        <Icon name='search' />
                        <Text>Search</Text>
                    </TabHeading>
                }>
                    <Search onOpen={this.props.onOpenProduct} />
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
        );
    }
}

export default TabBar;