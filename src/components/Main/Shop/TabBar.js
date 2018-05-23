import React, { Component } from 'react';
import { View } from 'react-native';
import { Tabs, Tab, TabHeading, Icon, Text, Content, Badge } from 'native-base';
import Collection from './Home/Collection';
import Category from './Home/Category';
import TopProduct from './Home/TopProduct';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Search from './Search/Search';
import Global from '../../Global';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import initData from '../../../api/init';
import {initCart} from '../../../action';
import getCart from '../../../api/getCart';

class TabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            types: [],
            topProducts: [],
            cart:[]
        };
    }
    componentDidMount() {
        getCart()
        .then((response)=>{
            this.setState({cart:response},()=>this.props.initCart(this.state.cart))
        });
        initData()
            .then(data => {
                this.setState({
                    types: data.types,
                    topProducts: data.topProducts
                })
            })
            .catch((error) => {
                console.log('error', error);
            });
    }
    render() {
        console.log("CART HERE",this.props.cart);
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
                        <Category types={this.state.types} onOpen={this.props.navigation} />
                        <TopProduct topProducts={this.state.topProducts} onOpen={this.props.navigation} />
                    </Content>
                </Tab>
                <Tab heading={
                    <TabHeading style={styles.tabHead}>

                        <Icon name='cart' />
                        <Text>Cart</Text>
                        <Badge primary style={styles.badge}><Text>{this.props.cart.length}</Text></Badge>
                    </TabHeading>
                }>
                    <Cart onOpen={this.props.navigation} />
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
function mapStateToProps(state) {
    return {
        cart: state.cart.cart,
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ initCart }, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(TabBar);