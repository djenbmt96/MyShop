import React, { Component } from 'react';
import { View } from 'react-native';
import {
    Text, Left, Body, Right, Button, Icon, Title, Container, Content, Input, Tab, Tabs, TabHeading,
    Badge
} from 'native-base';
import Head from '../Head';
import styles from '../../../../styles/Main/Shop';
import TabBar from '../TabBar';

class Menu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Head onOpen={() => this.props.navigation.openDrawer()} />
                <TabBar
                    navigation={this.props.navigation}
                />
            </Container>
        );
    }
}

export default Menu;