import { StyleSheet,} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:30,
        marginHorizontal:10,
    },
    profilePicContainer:{
        position:'relative',
        height:150,
        width:150,
        borderRadius:75,
        backgroundColor:'#a2a2a8',
        justifyContent:'center',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop:35,
    },
    img:{
        width:'100%',
        height:'100%',
        resizeMode:"contain",
        borderRadius:75,
    },
    name:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        color:'#313131',
    },
    info:{
        fontSize:17,
        textAlign:'center',
        color:"#5e5d5d",
        // marginVertical:5,
    },
    infoAddress:{
        fontSize:17,
        textAlign:'center',
        color:"#5e5d5d",
        marginBottom:10,
        // marginVertical:5,
    },
    btn:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#c4c3c3',
        padding:20,
        marginVertical:10,
        borderRadius:20,
    },
    // btnIcon:{
    //     fontSize:20,
    //     color:'black'
    // },
    // btnTxt:{
    //     fontSize:17,
    //     // fontWeight:'bold',
    // },
    signoutBtn:{
        position:'absolute',
        top:8,
        right:10,
    },
    signoutTxt:{
        fontSize:17,
        fontWeight:'bold',
        color:'#c90707',
    }
})

export default styles

