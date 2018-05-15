import {StyleSheet,Dimensions} from 'react-native';

const { height } = Dimensions.get('window');
export default styles = StyleSheet.create({
    wrapper:{
        height: height / 8,
        backgroundColor: '#34B089',
        padding:10,
        justifyContent: 'space-around'
    },
    row1:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon:{color:'#FFF'},
    inputText:{
        backgroundColor:'#FFF',
        paddingLeft:10,
        paddingVertical:5
    }
})