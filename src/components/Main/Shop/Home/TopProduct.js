import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Card, CardItem, Content, Text } from 'native-base';
import styles from '../../../../styles/Main/Shop';
import Global from '../../../Global';

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
                    {
                        this.props.topProducts.map(
                            item => (
                                <TouchableOpacity key={item.id} style={styles.product} onPress={()=>this.props.onOpen.navigate('ProductDetail',{product:item})}>
                                    <Card>
                                        <CardItem style={styles.itemNoPadding}>
                                            <Image style={styles.imageProduct} source={{uri:Global.DOMAIN_IMAGE+'product/'+item.images[0]}} />
                                        </CardItem>
                                        <CardItem style={styles.itemName}>
                                            <Text style={styles.productName}>{item.name.toUpperCase()}</Text>
                                        </CardItem>
                                        <CardItem style={styles.itemName}>
                                            <Text style={styles.productPrice}>{item.price}$</Text>
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity>
                            )
                        )
                    }

                </View>
            </Card>
        );
    }
}

export default TopProduct;