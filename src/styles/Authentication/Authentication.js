import { StyleSheet,Dimensions } from 'react-native';
const {width}=Dimensions.get('window');


export default styles = StyleSheet.create({
    header:{
        backgroundColor: '#34B089'
    },
    icon:{
        color:'#FFF'
    },
    signIn:{
        backgroundColor:'#FFF',
        // borderBottomLeftRadius:20,
        // borderTopLeftRadius:20
    },
    signOut:{
        backgroundColor:'#FFF',
        // borderBottomRightRadius:20,
        // borderTopRightRadius:20
    },
    content:{
        backgroundColor:'#34B089'
    },
    textSignin:{
        color:'#34B089'
    },
    deactiveText:{
        color:'#D7D7D7'
    },
    footer:{
        backgroundColor:'#34B089',
        height:300
    },
    input:{
        backgroundColor:"#FFF",
        borderRadius:30,
        paddingLeft:20,
        marginBottom:10
    },
    bodyInput:{
        justifyContent:'space-around',
        margin:30
    }
})