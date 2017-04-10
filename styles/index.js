import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    splash: {
        backgroundColor: 'red',
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    home: {
        backgroundColor: 'green',
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    title:{
        fontSize:35,
        fontWeight:'bold',
        color:'white'
    }
});

global.styles = styles