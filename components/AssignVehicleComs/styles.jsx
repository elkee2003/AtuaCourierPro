import { StyleSheet, } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:40,
        marginHorizontal:10
    },
    header:{
        fontSize:30,
        fontWeight:'bold',
        marginBottom:10,
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
        fontSize:30,
        color:"#3d3d3d",
    },
    subHeader:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:15,
    },
    input:{
        padding:8,
        borderWidth:2,
        borderColor:'#02061b', 
        borderRadius:20, 
        fontSize:16,
    },
    btn:{
        backgroundColor:'#1ec51e',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        borderRadius:20,
        marginHorizontal:50,
        marginVertical:15,
    },
    txtBtn:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    },

    // Assigned styles
    itemContainer: {
        marginBottom: 15,
        padding: 10,
        backgroundColor: '#dfdede',
        borderRadius: 15,
    },
    courierName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    vehicleInfo: {
        marginTop: 5,
        fontSize: 14,
        color: '#555',
    },
    noVehicle: {
        marginTop: 5,
        fontSize: 14,
        color: 'red',
    },
    btnRow:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:20,
        gap:20
    },
    assignBtn:{
        width:150,
        height:40,
        borderRadius:15,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
    },
    assignBtnTxt:{
        fontSize:18,
        fontWeight:'bold',
    },
    homeBtn:{
        width:150,
        height:40,
        backgroundColor:'#15c215',
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
    },
    homeBtnTxt:{
        fontSize:18,
        fontWeight:'bold'
    },

    // Vehicle List
    searchEngine:{
        backgroundColor:'white',
        padding:10,
        borderRadius:20,
        fontSize:15,
        marginBottom:10
    },
    vehicleContainer:{
        marginVertical:15,
        backgroundColor:'#dfdede',
        padding:10,
        borderRadius:20,
    },
    subHVehicle:{
        marginTop:15,
    },
    subHVehicleTop:{
       fontWeight:'bold'
    },
    input:{
        fontSize:15,
        fontWeight:'bold',
    },
})

export default styles
