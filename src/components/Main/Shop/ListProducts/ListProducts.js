import React, { Component } from 'react';
import { View,Text, Image, TouchableOpacity } from 'react-native';
import {  Container, Content, Header, Card, CardItem, Left, Body, Icon, Title, Right, List, ListItem, Button } from 'native-base';
import Head from '../Head';
import styles from '../../../../styles/Main/Shop';
import Product from './Product';

class ListProducts extends Component {
    constructor(props) {
        super(props);
    }
    goToDetail(product){
        this.props.navigation.navigate('ProductDetail',{product:product});
    }
    render() {
        const products=this.props.navigation.getParam('products',[]);
        const type=this.props.navigation.getParam('type',[]);
        return (
            <Container>
                <Head onOpen={() => this.props.navigation.openDrawer()} />
                <CardItem bordered>
                    <Left>
                        <Button style={{height:28}} transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ color: '#CA6A27' }}>{type.name}</Title>
                    </Body>
                    <Right />
                </CardItem>
                <Content>
                    <Card>
                        <List
                            dataArray={products}
                            renderRow={(item) => {
                                return (
                                    <ListItem>
                                        <Product product={item} onPress={()=>this.goToDetail(item)}/>
                                    </ListItem>
                                )
                            }}
                        />
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default ListProducts;