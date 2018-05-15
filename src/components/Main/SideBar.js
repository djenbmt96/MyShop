import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { List, ListItem, Container, Content, Left, Icon, Text } from 'native-base';
const routes = [
    { name: 'Home', icon: "home", title: "Home" },
    { name: "Authentication", icon: "log-in", title: "Sign in" },
    { name: "OrderHistory", icon: "basket", title: "Order History" },
    { name: "ChangeInfo", icon: "brush", title: "Change Info" }
];
export default class SideBar extends Component {
    render() {
        return (
            <Container style={{backgroundColor:'#00d09f'}}>
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
                    <List
                        dataArray={routes}
                        contentContainerStyle={{ marginTop: 120 }}
                        renderRow={data => {
                            return (
                                <ListItem
                                    button
                                    onPress={() => this.props.navigation.navigate(data.name)}
                                >
                                    <Left>
                                        <Icon name={data.icon} />
                                        <Text>{data.title}</Text>
                                    </Left>
                                </ListItem>
                            );
                        }}
                    />
                </Content>
            </Container>
        );
    }
}