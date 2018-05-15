import React, { Component } from 'react';
import { View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Card, CardItem, Content, Text, Left, Body, Icon, Thumbnail, List, ListItem } from 'native-base';
import Swiper from 'react-native-swiper';
import styles from '../../../../styles/Main/Shop';

class Category extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card style={styles.cardContainer}>
                <CardItem>
                    <Text style={styles.textHeader}>LIST OF CATEGORY</Text>
                </CardItem>
                <Swiper style={styles.wrapper}>
                    <TouchableOpacity style={styles.touchable} onPress={() => {}}>
                        <ImageBackground
                            style={styles.imageBackground}
                            source={require('../../../../../Images/party.jpg')}
                        >
                            <Text style={styles.textBody}>Party</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchable} onPress={() => { }}>
                        <ImageBackground
                            style={styles.imageBackground}
                            source={require('../../../../../Images/maxi.jpg')}
                        >
                            <Text style={styles.textBody}>Maxi</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchable} onPress={() => { }}>
                        <ImageBackground
                            style={styles.imageBackground}
                            source={require('../../../../../Images/midi.jpg')}
                        >
                            <Text style={styles.textBody}>Midi</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </Swiper>
            </Card>
        );
    }
}

export default Category;