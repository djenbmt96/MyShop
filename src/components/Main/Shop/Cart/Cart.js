import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Content, Text, Button, List, ListItem, Card } from 'native-base';
import styles from '../../../../styles/Main/Shop';

class Cart extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Content>
                <List
                    dataArray={[1, 2]}
                    renderRow={(item) => {
                        return (
                            <Card style={styles.productInList}>
                                <Image style={styles.imageList} source={require('../../../../../Images/sp1.jpeg')} />
                                <View style={styles.bodyText}>
                                    <Text style={styles.textNameProduct}>Party Dress</Text>
                                    <Text style={styles.price}>100$</Text>
                                    <View style={styles.quantity}>
                                        <View style={styles.changeQuantity}>
                                            <Button transparent>
                                                <Text>-</Text>
                                            </Button>
                                            <Text style={{ paddingTop: 11 }}>2</Text>
                                            <Button transparent>
                                                <Text>+</Text>
                                            </Button>
                                        </View>
                                        <Button
                                            transparent
                                            onPress={this.props.onOpen}
                                        >
                                            <Text>Show detail</Text>
                                        </Button>
                                    </View>
                                </View>
                                <Button transparent style={styles.remove}>
                                    <Text>x</Text>
                                </Button>
                            </Card>
                        )
                    }}
                />
                <Card>
                    <Button full success>
                        <Text>{'total 350$ checkout now'.toUpperCase()}</Text>
                    </Button>
                </Card>
                {/* <Button onPress={this.props.onOpen}>
                    <Text>go to Detail</Text>
                </Button> */}
            </Content>
        );
    }
}

export default Cart;