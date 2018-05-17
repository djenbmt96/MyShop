import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Card, CardItem, Content, Text } from 'native-base';
import styles from '../../../../styles/Main/Shop';

class TopProduct extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card style={styles.cardContainer}>
                <CardItem>
                    <Text style={styles.textHeader}>TOP PRODUCT</Text>
                </CardItem>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap'
                }}>
                    <TouchableOpacity style={styles.product} onPress={this.props.onOpen}>
                        <Card>
                            <CardItem style={styles.itemNoPadding}>
                                <Image style={styles.imageProduct} source={require('../../../../../Images/sp1.jpeg')} />
                            </CardItem>
                            <CardItem  style={styles.itemName}>
                                <Text style={styles.productName}>{'name'.toUpperCase()}</Text>
                            </CardItem>
                            <CardItem style={styles.itemName}>
                                <Text style={styles.productPrice}>100$</Text>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.product}>
                        <Card>
                            <CardItem style={styles.itemNoPadding}>
                                <Image style={styles.imageProduct} source={require('../../../../../Images/sp2.jpeg')} />
                            </CardItem>
                            <CardItem  style={styles.itemName}>
                                <Text style={styles.productName}>NAME</Text>
                            </CardItem>
                            <CardItem style={styles.itemName}>
                                <Text style={styles.productPrice}>100$</Text>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.product}>
                        <Card>
                            <CardItem style={styles.itemNoPadding}>
                                <Image style={styles.imageProduct} source={require('../../../../../Images/sp3.jpeg')} />
                            </CardItem>
                            <CardItem  style={styles.itemName}>
                                <Text style={styles.productName}>NAME</Text>
                            </CardItem>
                            <CardItem style={styles.itemName}>
                                <Text style={styles.productPrice}>100$</Text>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.product}>
                        <Card>
                            <CardItem style={styles.itemNoPadding}>
                                <Image style={styles.imageProduct} source={require('../../../../../Images/sp4.jpeg')} />
                            </CardItem>
                            <CardItem  style={styles.itemName}>
                                <Text style={styles.productName}>NAME</Text>
                            </CardItem>
                            <CardItem style={styles.itemName}>
                                <Text style={styles.productPrice}>100$</Text>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                </View>
            </Card>
        );
    }
}

export default TopProduct;