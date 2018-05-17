import React, { Component } from 'react';
import { View,Text, Image, TouchableOpacity } from 'react-native';
import {  Container, Content, Header, Card, CardItem, Left, Body, Icon, Title, Right, List, ListItem, Button } from 'native-base';
import Head from '../Head';
import styles from '../../../../styles/Main/Shop';

class ListProducts extends Component {
    constructor(props) {
        super(props);
    }
    goToDetail(){
        this.props.navigation.navigate('ProductDetail');
    }
    render() {
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
                        <Title style={{ color: '#CA6A27' }}>Party Dress</Title>
                    </Body>
                    <Right />
                </CardItem>
                <Content>
                    <Card>
                        <List
                            dataArray={[1, 2, 3,4,5]}
                            renderRow={(item) => {
                                return (
                                    <ListItem>
                                        <TouchableOpacity
                                        style={styles.productInList}
                                        onPress={()=>this.goToDetail()}
                                        >
                                            <Image style={styles.imageList} source={require('../../../../../Images/sp1.jpeg')} />
                                            <View style={styles.bodyText}>
                                                <Text style={styles.textNameProduct}>Party Dress</Text>
                                                <Text style={styles.price}>100$</Text>
                                                <Text>Meterial silk</Text>
                                                <Text>Color RoyalBlue</Text>
                                            </View>
                                        </TouchableOpacity>
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