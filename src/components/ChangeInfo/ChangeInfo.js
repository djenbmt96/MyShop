import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Header, Left, Right, Body, Icon, Title, Button, Card, List, Text, Input } from 'native-base';
import styles from '../../styles/ChangeInfo';

class ChangeInfo extends Component {
    render() {
        return (
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>User Infomation</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content padder>
                    <View style={styles.body}>
                        <Input style={styles.input} placeholder='Enter your email' />
                        <Input style={styles.input} placeholder='Enter your address' />
                        <Input style={styles.input} placeholder='Enter your phone number' />
                        <Button success rounded full>
                            <Text>CHANGE YOUR INFOMATION</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default ChangeInfo;