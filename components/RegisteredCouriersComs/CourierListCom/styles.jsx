import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:40,
        marginHorizontal:10,
    },
    headerTxt:{
        fontSize:35,
        fontWeight:'bold',
        marginLeft:25,
        marginBottom:20,
    },
    bckBtn:{
        position:'absolute',
        top:10,
        left:-8,
        justifyContent:'center',
        alignItems:'center',
    },
    bckBtnIcon:{
        fontSize:30,
        color:"#3d3d3d",
    },
    searchEngine:{
        backgroundColor:'white',
        padding:10,
        borderRadius:20,
        fontSize:15,
        marginBottom:10
    },
    contactContainer:{
        backgroundColor:'grey',
        padding:5,
        borderRadius:10,
        justifyContent:'center',
        marginVertical:10
    },
    input:{
        color:'white',
        fontSize:20,
    }
})

export default styles
