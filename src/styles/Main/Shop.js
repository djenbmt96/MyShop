import { StyleSheet,Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const widthImage = width - 40;
const heightImage = (widthImage / 933) * 465;


export default styles=StyleSheet.create({
    cardContainer:{
        paddingBottom:0
    },
    cardBody:{
        padding:10, marginBottom:10
    },
    imageBody:{
        height: heightImage, width: "100%"
    },
    textHeader:{
        color: '#AFAEAF'
    },
    imageBackground:{
        width: '100%', height: heightImage, justifyContent: "center", alignItems: 'center' 
    },
    textBody:{
        color: "#9A9A9A", fontSize: 30, fontFamily: 'Avenir'
    },
    wrapper:{
        height: heightImage+20, width: "100%"
    },
    touchable:{
        padding: 10 
    },
    product:{
        width:width*0.42, height:width*0.73
    },
    imageProduct:{
        width:'100%', height:width*0.5
    },
    productName:{
        color: "#9A9A9A", fontFamily: 'Avenir'
    },
    productPrice:{
        color: "#e30387"
    },
    itemNoPadding:{
        paddingLeft: 2, paddingTop: 2, paddingRight: 2, paddingBottom: 2 
    },
    itemName:{
        alignItems:'center', paddingLeft: 10, paddingTop: 2, paddingRight: 2, paddingBottom: 2 
    },
    bodyTopProduct:{
        flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'
    },
    tabHead:{
        backgroundColor: "#34B089",flexDirection:'column' 
    },
    badge:{
        position:'absolute',right:0,top:0
    },
    imageList:{
        width:width*0.25, height:width*0.35
    },
    productInList:{
        flexDirection:'row',
    },
    textNameProduct:{
        color:'#909596', fontFamily:'Avenir', fontSize:20
    },
    bodyText:{
        justifyContent:'space-between', marginLeft:10
    },
    price:{
        color:'#BA0AC9', fontSize:18
    },
    imageDetail:{
        width:width*0.4, height:width*0.6
    },
    bodyImageDetail:{
        flexDirection:'row', justifyContent:'space-between'
    },
    nameDetail:{
        fontSize:20, paddingRight:10
    },
    priceDetail:{
        fontSize:20, color:'#98A0A3', paddingLeft:10
    },
    textBodyDetail:{
        justifyContent:'center', paddingTop:0
    },
    rightDetail:{
        flexDirection:"row",justifyContent:'space-around'
    }
})