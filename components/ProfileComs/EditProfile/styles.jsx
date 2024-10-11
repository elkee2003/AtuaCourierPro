import { StyleSheet, } from 'react-native'


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:30,
        marginHorizontal:10,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        margin: 10,
    },
    bckBtn:{
        position:'absolute',
        top:10,
        left:-5,
        justifyContent:'center',
        alignItems:'center',
    },
    bckBtnIcon:{
        fontSize:35,
        color:"#3d3d3d",
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
        marginVertical:10,
    },
    img:{
        width:'100%',
        height:'100%',
        resizeMode:"contain",
        borderRadius:75,
    },
    plusIconContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -30 }, { translateY: -30 }], // Adjust translate values according to your icon size
        zIndex: 3,
    },
    plusIcon:{
        color: 'rgba(3, 3, 59, 0.7)',
        backgroundColor:'transparent',
        fontSize:60
    },
    input: {
        marginVertical: 10,
        backgroundColor: "white",
        padding: 15,
        borderRadius: 5,
    },
    error:{
        color:'#d80b0b',
        fontSize:13,
        marginTop:-10,
        marginHorizontal:5,
        marginBottom:5,
    },
    nxtBtn:{
        backgroundColor:'#1a1b1a',
        marginTop:10,
        padding:2,
        marginHorizontal:80,
        marginBottom:10,
        alignItems:'center',
        borderRadius:30,
    },
    nxtBtnIcon:{
        fontSize:50,
        color:'#ffffff'
    },
    gContainer:{
        position:'relative',
        height:'8%',
        zIndex:2,
        marginVertical:10,
    },
    clearIconContainer:{
        position:'absolute',
        right:10,
        top:15,
        zIndex:3,
    },
    clearIcon:{
        fontSize:35,
        color:'grey'
    }, 
    gContainerFocused: {
        height: '30%', // Set the desired height when typing
        zIndex: 2,
    },
    // gTextInputContainer:{
    //     paddingLeft:10,
    //     paddingRight:10,
    // },
    gTextInput: {
        height: 60,
    },
    // glistView:{
    //     paddingLeft:10,
    //     paddingRight:10,
    // },
    gPoweredContainer:{
        display:'none'
    },
  
  })

export default styles
