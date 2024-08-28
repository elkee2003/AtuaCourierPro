import { StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window')
const widthHalf = width / 2 - 13
const textInputSize = widthHalf

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:10,
        marginTop:40,
    },
    headerTxt:{
        fontSize:35,
        fontWeight:'bold',
        textAlign:'center'
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
        marginTop:10,
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
    subHeader:{
        marginTop:20,
        marginBottom:5,
        fontSize:15,
        fontWeight:'bold',
    },
    input:{
        backgroundColor:'white',
        padding:10,
        borderRadius:5,
    },
    containerInputRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        gap:8,
    },
    inputRow:{
        backgroundColor:'white',
        width:textInputSize,
        padding:10,
        borderRadius:5,
    },
    error:{
        color:'#d80b0b',
        fontStyle:'italic',
        fontSize:15,
        marginTop:5,
        marginBottom:15,
    },
    goToReviewBtn:{
        backgroundColor:'#1a1b1a',
        marginTop:10,
        padding:10,
        marginHorizontal:80,
        marginBottom:10,
        alignItems:'center',
        borderRadius:30,
    },
    txtBtn:{
        fontSize:20,
        color:'#ffffff'
    },
})

export default styles
