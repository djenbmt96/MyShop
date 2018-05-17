import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Content, Text, Card, CardItem, List, ListItem, Left, Body, Right,Icon } from 'native-base';
import { MapView } from 'react-native-maps';
import styles from '../../../../styles/Main/Shop';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Content>
                <Card>
                    <CardItem>
                        <Image style={styles.map} source={require('../../../../../Images/map.jpg')} />
                    </CardItem>
                </Card>
                <Card>
                    <List>
                        <ListItem icon>
                            <Left>
                                <Icon name='locate'/>
                            </Left>
                            <Body>
                            </Body>
                            <Right>
                                <Text >24 Ham Mac Tu, HCM city</Text>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name='phone-portrait'/>
                            </Left>
                            <Body>
                            </Body>
                            <Right>
                                <Text >099726354</Text>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name='paper-plane'/>
                            </Left>
                            <Body>
                            </Body>
                            <Right>
                                <Text >djenbmt96@gmail.com</Text>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name='mail'/>
                            </Left>
                            <Body>
                            </Body>
                            <Right>
                                <Text >(028) 234 432</Text>
                            </Right>
                        </ListItem>
                    </List>
                </Card>
            </Content>
        );
    }
}

export default Contact;