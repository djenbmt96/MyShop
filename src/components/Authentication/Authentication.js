import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content, Header, Footer, Left, Body, Right, Button, Icon, Title, Tabs, Tab, TabHeading } from 'native-base';
import styles from '../../styles/Authentication/Authentication';
import Signin from './Signin';
import Signup from './Signup';

class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0
        }
    }
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
                        <Title>My Shop</Title>
                    </Body>
                    <Right>
                        <Icon style={styles.icon} name='shirt' />
                    </Right>
                </Header>
                <Tabs initialPage={this.state.currentTab}
                    locked
                    tabBarUnderlineStyle={{width:0}}
                    tabBarPosition='bottom'
                    
                    style={styles.footer}
                    onChangeTab={({ i }) => this.setState({ currentTab: i })}
                >
                    <Tab
                        heading={
                            <TabHeading style={styles.signIn}>
                                <Text style={this.state.currentTab == 0 ? styles.textSignin : styles.deactiveText}>Sign in</Text>
                            </TabHeading>
                        }>
                        <Content style={styles.content}>
                            <Signin />
                        </Content>
                    </Tab>
                    <Tab
                        heading={
                            <TabHeading style={styles.signOut}>
                                <Text style={this.state.currentTab == 1 ? styles.textSignin : styles.deactiveText}>Sign up</Text>
                            </TabHeading>
                        }>
                        <Content style={styles.content}>
                            <Signup />
                        </Content>
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

export default Authentication;