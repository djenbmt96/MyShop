import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content, Header, Left, Right, Body, Icon, Title, Button, Card, List } from 'native-base';
import styles from '../../styles/OrderHistory';

class OrderHistory extends Component {
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
                        <Title>Order History</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content padder>
                    <List
                        dataArray={[1, 2, 3]}
                        renderRow={(item) => {
                            return (
                                <Card>
                                    <View style={styles.bodyRow}>
                                        <Text style={styles.titleFirst}>Order Id:</Text>
                                        <Text style={styles.id}>ORD15</Text>
                                    </View>
                                    <View style={styles.bodyRow}>
                                        <Text style={styles.titleFirst}>Order Time:</Text>
                                        <Text style={styles.time}>17-Mar-2018 5:25PM</Text>
                                    </View>
                                    <View style={styles.bodyRow}>
                                        <Text style={styles.titleFirst}>Status:</Text>
                                        <Text style={styles.status}>Pending</Text>
                                    </View>
                                    <View style={styles.bodyRow}>
                                        <Text style={styles.titleFirst}>Total:</Text>
                                        <Text style={styles.total}>800$</Text>
                                    </View>
                                </Card>
                            )
                        }}
                    />

                </Content>
            </Container>
        );
    }
}

export default OrderHistory;