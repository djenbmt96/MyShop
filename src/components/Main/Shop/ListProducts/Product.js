import React, { Component } from 'react';
import { View,TouchableOpacity,Image,Text } from 'react-native';
import styles from '../../../../styles/Main/Shop'

class Product extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let product=this.props.product;
        return (
            <TouchableOpacity
                style={styles.productInList}
                onPress={this.props.onPress}
            >
                <Image style={styles.imageList} source={require('../../../../../Images/sp1.jpeg')} />
                <View style={styles.bodyText}>
                    <Text style={styles.textNameProduct}>Party Dress</Text>
                    <Text style={styles.price}>{product}$</Text>
                    <Text>Meterial silk</Text>
                    <Text>Color RoyalBlue</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default Product;