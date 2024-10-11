import { StyleSheet,} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:10,
        marginVertical:10
    },
    courierInfoContainer:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#333333',
        borderRadius:10,
        justifyContent:'space-between',
        alignItems:'center',
        padding:10
    },
    courierInfo:{
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
    onlineDot:{
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#07e707',
    },
    profileImageContainer:{
        width:70,
        height:70,
        borderRadius:35,
        backgroundColor:'grey',
        overflow:'hidden',
        justifyContent:'center'
    },
    img:{
        width:'100%',
        height:'100%',
        resizeMode:"contain",
        borderRadius:35,
    },
    courierName:{
        fontSize:20,
        fontWeight:'bold'
    },
    onlineCouriersCount: {
        marginTop: 10,
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
    },
    placeholder: {
        textAlign: 'center',
        color: '#888',
        fontStyle: 'italic',
    },
    btn:{
        marginVertical:15,
        marginHorizontal:70,
        backgroundColor:'transparent',
        padding:5,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:'#0de90d',
        borderRadius:20
    },
    btnTxt:{
        fontSize:18,
        fontWeight:'bold',
    }
})

export default styles
