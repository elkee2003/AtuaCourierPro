import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:30,
        marginHorizontal:10,
    },
    scrollStyle:{
        flexGrow: 1,
    },
    header:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
    },
    bckBtn:{
        position:'absolute',
        top:8,
        left:-5,
        justifyContent:'center',
        alignItems:'center',
    },
    bckBtnIcon:{
        fontSize:30,
        color:"#3d3d3d",
    },
    subHeader:{
        fontSize:18,
        fontWeight:'bold',
        marginTop:20,
    },
    input:{
        fontSize:20,
        backgroundColor:'#696868',
        color:'white',
        padding:5,
        borderRadius:10,
    },
    delBtn:{
        padding:5,
        backgroundColor:'red',
        borderRadius:15,
        marginHorizontal:80,
        marginVertical:20,
        justifyContent:'center',
        alignItems:'center',
    },
    delTxt:{
        fontSize:25,
        fontWeight:'bold',
    },
})

export default styles
