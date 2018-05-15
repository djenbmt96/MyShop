import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Card, CardItem, Content, Text } from 'native-base';
import styles from '../../../../styles/Main/Shop';


class Collection extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <Card style={styles.cardContainer}>
                    <CardItem>
                        <Text style={styles.textHeader}>SPRING COLLECTION</Text>
                    </CardItem>
                    <CardItem cardBody style={styles.cardBody}>
                        <Image style={styles.imageBody} source={require('../../../../../Images/banner.jpg')} />
                    </CardItem>
                </Card>
        );
    }
}

export default Collection;