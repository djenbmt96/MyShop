import React, { Component } from 'react';
import { View,TouchableOpacity,Image,Text } from 'react-native';
import styles from '../../../../styles/Main/Shop';
import Global from '../../../Global';

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
                <Image style={styles.imageList} source={{uri:Global.DOMAIN_IMAGE+'product/'+product.images[0]}} />
                <View style={styles.bodyText}>
                    <Text style={styles.textNameProduct}>{product.name}</Text>
                    <Text style={styles.price}>{product.price}$</Text>
                    <Text>{product.material}</Text>
                    <Text>{product.color}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default Product;