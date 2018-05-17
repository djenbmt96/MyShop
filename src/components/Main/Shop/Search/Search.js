import React, { Component } from 'react';
import { View, TouchableOpacity, Image,Text } from 'react-native';
import { Container, Content,  Button, List,ListItem,Card } from 'native-base';
import styles from '../../../../styles/Main/Shop';
import Product from '../ListProducts/Product';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Content>
                <Card>
                    <List
                        dataArray={[1, 2, 3, 4, 5]}
                        renderRow={(item) => {
                            return (
                                <ListItem>
                                    <Product product={item} onPress={this.props.onOpen}/>
                                </ListItem>
                            )
                        }}
                    />
                </Card>
            </Content>
            // <Content>
            //     <Button onPress={this.props.onOpen}>
            //         <Text>go to Product</Text>
            //     </Button>
            // </Content>
        );
    }
}

export default Search;