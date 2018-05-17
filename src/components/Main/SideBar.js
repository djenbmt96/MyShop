import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { List, ListItem, Container, Content, Left, Icon, Text } from 'native-base';

export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggin: true
        };
    }
    _renderLoggin = () => (
        <List style={{paddingTop:50}}>
            <ListItem
                button
                onPress={() => this.props.navigation.navigate('Home')}
            >
                <Left>
                    <Icon style={{ color: "#FFF" }} name='home' />
                    <Text style={{ color: "#FFF", fontFamily: 'Avenir' }}>{'Home'.toUpperCase()}</Text>
                </Left>
            </ListItem>
            <ListItem
                button
                onPress={() => this.props.navigation.navigate('OrderHistory')}
            >
                <Left>
                    <Icon style={{ color: "#FFF" }} name='basket' />
                    <Text style={{ color: "#FFF", fontFamily: 'Avenir' }}>{'Order History'.toUpperCase()}</Text>
                </Left>
            </ListItem>
            <ListItem
                button
                onPress={() => this.props.navigation.navigate('ChangeInfo')}
            >
                <Left>
                    <Icon style={{ color: "#FFF" }} name='brush' />
                    <Text style={{ color: "#FFF", fontFamily: 'Avenir' }}>{'Change Info'.toUpperCase()}</Text>
                </Left>
            </ListItem>
            <ListItem
                button
                onPress={() => this.props.navigation.navigate('Signout')}
            >
                <Left>
                    <Icon style={{ color: "#FFF" }} name='log-out' />
                    <Text style={{ color: "#FFF", fontFamily: 'Avenir' }}>{'Sign out'.toUpperCase()}</Text>
                </Left>
            </ListItem>
        </List>
    )
    _renderLogout = () => (
        <List  style={{paddingTop:50}}>
            <ListItem
                button
                onPress={() => this.props.navigation.navigate('Home')}
            >
                <Left>
                    <Icon style={{ color: "#FFF" }} name='home' />
                    <Text style={{ color: "#FFF", fontFamily: 'Avenir' }}>{'Home'.toUpperCase()}</Text>
                </Left>
            </ListItem>
            <ListItem
                button
                onPress={() => this.props.navigation.navigate('Authentication')}
            >
                <Left>
                    <Icon style={{ color: "#FFF" }} name='log-in' />
                    <Text style={{ color: "#FFF", fontFamily: 'Avenir' }}>{'Sign in'.toUpperCase()}</Text>
                </Left>
            </ListItem>
        </List>
    )
    render() {
        return (
            <Container style={{ backgroundColor: '#34B089' }}>
                <Content>
                    <Image
                        square
                        style={{
                            height: 70,
                            width: 70,
                            position: "absolute",
                            alignSelf: "center",
                            top: 20,
                            borderRadius: 50
                        }}
                        source={require('../../../Images/profile.png')}
                    />
                    <Text style={{ color: "#FFF", paddingTop: 100, paddingLeft: 70 }}>Nguyen Tuan Dien</Text>
                    {this.state.isLoggin?this._renderLoggin():this._renderLogout()}
                </Content>
            </Container>
        );
    }
}