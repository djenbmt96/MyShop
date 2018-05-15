import React, { Component } from 'react';
import { View, TextInput,TouchableOpacity } from 'react-native';
import { Button, Icon, Title } from 'native-base';
import styles from '../../../styles/Main/Head';




class Head extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.row1}>
                    <TouchableOpacity
                        onPress={this.props.onOpen}>
                        <Icon style={styles.icon} name="menu" />
                    </TouchableOpacity>
                    <Title>My Shop</Title>
                    <Icon style={styles.icon} name='shirt' />
                </View>
                <TextInput
                    style={styles.inputText}
                    placeholder="What do you want to buy?"
                    underlineColorAndroid='transparent'
                />
            </View>
        );
    }
}

export default Head;