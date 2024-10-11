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
    fullContainer:{
        flexDirection:'row',
        padding:10,
        justifyContent:'space-between',
        backgroundColor:'#cecbcb',
        borderRadius:10,
        marginVertical:10
    },
    contactContainer:{
    },
    onlineDot:{
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#07e707',
    },
    cSubHeaderTop:{
        fontSize:16,
    },
    cSubHeader:{
        fontSize:16,
        marginTop:15,
    },
    input:{
        color:'#292828',
        fontSize:17,
        fontWeight:'bold',
    },
})

export default styles
