import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Text, Container, Content, Card, CardItem, Left, Right, Button, Body, Icon } from 'native-base';
import Head from '../Head';
import styles from '../../../../styles/Main/Shop';
import TabBar from '../TabBar';
import Global from '../../../Global';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addcart } from '../../../../action/index';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const product = this.props.navigation.getParam('product', []);
        return (
            <Container>
                <Head onOpen={() => { this.props.navigation.openDrawer() }} />
                <CardItem style={styles.noPaddingTopBot}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Right>
                        <Button bordered info onPress={()=>this.props.addcart(product)}>
                            <Icon name='cart' />
                        </Button>
                    </Right>
                </CardItem>
                <Content>
                    <Card>
                        <CardItem style={styles.bodyImageDetail}>
                            <Image style={styles.imageDetail} source={{ uri: Global.DOMAIN_IMAGE + 'product/' + product.images[0] }} />
                            <Image style={styles.imageDetail} source={{ uri: Global.DOMAIN_IMAGE + 'product/' + product.images[1] }} />

                        </CardItem>
                        <CardItem bordered style={styles.textBodyDetail}>
                            <Text style={styles.nameDetail}>{product.name}</Text>
                            <Text>/</Text>
                            <Text style={styles.priceDetail}>{product.price}$</Text>
                        </CardItem>
                        <CardItem>
                            <Text note>{product.description}</Text>
                        </CardItem>
                        <CardItem style={{ paddingTop: 0 }}>
                            <Left>
                                <Text style={styles.price}>{product.material}</Text>
                            </Left>
                            <Right style={styles.rightDetail}>
                                <Text style={styles.price}>{product.color}</Text>
                                <Icon style={{ color: 'red' }} name='ionic' />
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
function mapStateToProps(state) {
    return {
      cart: state.cart.cart,
    };
  }
  function matchDispatchToProps(dispatch) {
    return bindActionCreators({addcart}, dispatch)
  }
  
  export default connect(mapStateToProps, matchDispatchToProps)(ProductDetail);