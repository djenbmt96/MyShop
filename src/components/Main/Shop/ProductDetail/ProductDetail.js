import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Text, Container, Content, Card, CardItem, Left, Right, Button, Body, Icon } from 'native-base';
import Head from '../Head';
import styles from '../../../../styles/Main/Shop';
import TabBar from '../TabBar';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Head onOpen={() => { this.props.navigation.openDrawer() }} />
                <CardItem bordered>
                    <Left>
                        <Button style={{ height: 28 }} transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Right>
                        <Icon name='cart' />
                    </Right>
                </CardItem>
                <Content>
                    <Card>
                        <CardItem style={styles.bodyImageDetail}>
                            <Image style={styles.imageDetail} source={require('../../../../../Images/sp1.jpeg')} />
                            <Image style={styles.imageDetail} source={require('../../../../../Images/sp2.jpeg')} />

                        </CardItem>
                        <CardItem bordered style={styles.textBodyDetail}>
                            <Text style={styles.nameDetail}>lalalalLeeu leeu</Text>
                            <Text>/</Text>
                            <Text style={styles.priceDetail}>801$</Text>
                        </CardItem>
                        <CardItem>
                            <Text note>Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or ...</Text>
                        </CardItem>
                        <CardItem style={{paddingTop:0}}>
                            <Left>
                                <Text style={styles.price}>Meterial lether</Text>
                            </Left>
                            <Right style={styles.rightDetail}>
                                <Text style={styles.price}>Color Khaki</Text>
                                <Icon style={{color:'red'}} name='ionic'/>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
export default ProductDetail;