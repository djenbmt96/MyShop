import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Content, Text, Button, List, ListItem, Card } from 'native-base';
import styles from '../../../../styles/Main/Shop';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removecart } from '../../../../action/index';
import Global from '../../../Global';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { reload: false}
    }
    render() {
        console.log('----------------CART--------------------');
        console.log(this.props.cart);
        console.log('----------------END--------------------');
        return (
            <Content>
                <List
                    dataArray={this.props.cart}
                    renderRow={(item) => {
                        return (
                            <Card style={styles.productInList}>
                                <Image
                                    style={styles.imageList}
                                    source={{ uri: Global.DOMAIN_IMAGE + 'product/' + item.images[0] }}
                                />
                                <View style={styles.bodyText}>
                                    <Text style={styles.textNameProduct}>{item.name}</Text>
                                    <Text style={styles.price}>{item.price}$</Text>
                                    <View style={styles.quantity}>
                                        <View style={styles.changeQuantity}>
                                            <Button transparent>
                                                <Text>-</Text>
                                            </Button>
                                            <Text style={{ paddingTop: 11 }}>1</Text>
                                            <Button transparent>
                                                <Text>+</Text>
                                            </Button>
                                        </View>
                                        <Button
                                            transparent
                                            onPress={() => this.props.onOpen.navigate('ProductDetail', { product: item })}
                                        >
                                            <Text>Show detail</Text>
                                        </Button>
                                    </View>
                                </View>
                                <Button
                                    transparent
                                    style={styles.remove}
                                    onPress={()=>this.props.removecart(item.id)}
                                >
                                    <Text>x</Text>
                                </Button>
                            </Card>
                        )
                    }}
                />
                <Card>
                    <Button full success>
                        <Text>{'total 350$ checkout now'.toUpperCase()}</Text>
                    </Button>
                </Card>
            </Content>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart,
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ removecart }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Cart);