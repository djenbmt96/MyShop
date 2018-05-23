import React, { Component } from 'react';
import { View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Card, CardItem, Content, Text, Left, Body, Icon, Thumbnail, List, ListItem } from 'native-base';
import Swiper from 'react-native-swiper';
import styles from '../../../../styles/Main/Shop';
import Global from '../../../Global';
import getList from '../../../../api/productApi';

class Category extends Component {
    constructor(props) {
        super(props);
    }
    showList(item){
        getList(item.id)
        .then(data=>{
            this.props.onOpen.navigate('ListProducts',{products:data,type:item});
        })
        .catch((error)=>{
            console.log('----------------------------');
            console.log('error:',error);
        })
    }

    render() {
        let types =this.props.types;
        return (
            <Card style={styles.cardContainer}>
                <CardItem>
                    <Text style={styles.textHeader}>LIST OF CATEGORY</Text>
                </CardItem>
                <Swiper showsPagination style={styles.wrapper}>
                    {
                        types.map(item => (
                            <TouchableOpacity key={item.id} style={styles.touchable} onPress={()=>this.showList(item)}>
                                <ImageBackground
                                    style={styles.imageBackground}
                                    source={{ uri: Global.DOMAIN_IMAGE + 'type/' + item.image }}
                                >
                                    <Text style={styles.textBody}>{item.name}</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        ))
                    }
                </Swiper>
            </Card>
        );
    }
}
export default Category;