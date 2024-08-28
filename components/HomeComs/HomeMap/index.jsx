import { View, useWindowDimensions, ActivityIndicator, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import styles from './styles'
import Entypo from '@expo/vector-icons/Entypo';
import TMediums from '../../../assets/data/TMedium'
import {orders} from '@/assets/data/orders'

const HomeMap = () => {
    const {width, height} = useWindowDimensions()
    const [avaliableOrders, setAvaliableOrders] = useState(orders);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const getImage=(type)=>{
      if (type === 'Bicycle'){
          return require('../../../assets/atuaImages/Bicycle.png')
      }
      if (type === 'Bike'){
          return require('../../../assets/atuaImages/Bike.jpg')
      }
      if (type === 'Car'){
          return require('../../../assets/atuaImages/top-UberXL.png')
      }
      if (type === 'Group'){
          return require('../../../assets/atuaImages/Deliverybicycle.png')
      }
      return require('../../../assets/atuaImages/Walk.png')
    }

    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
    }, []);

    if (!location){
        return <ActivityIndicator size={"large"} style={{marginTop:50}}/>
    }

  return (
    <View style={styles.container}>
      <MapView
      style={{width, height: height - 120}}
      initialRegion={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsUserLocation
      >
        {/* Couriers */}
        {TMediums.map((TMedium)=>{
          return <Marker
                key={TMedium.id}
                coordinate={{ latitude : TMedium.latitude , longitude : TMedium.longitude }}
                title={TMedium.name}
                description={'courier'}
                >
                  <Image style={{width:50,
                  height:70,
                  resizeMode:'contain',
                  transform:[{
                  rotate:`${TMedium.heading}.deg`
                  }]
                  }} 
                 source={getImage(TMedium.type)}/>
                </Marker>
        })}

        {/* Destination Marker */}
        {avaliableOrders.map(order => (
            <Marker
                key={order.id}
                title={order.User.name}
                description={'Destination Location'}
                coordinate={{
                    latitude: order.User.destLat,
                    longitude: order.User.destLng,
                }}
            >
                <View style={{ backgroundColor: 'red', padding: 5, borderRadius: 20 }}>
                    <Entypo name={'location-pin'} color={'white'} size={24} />
                </View>
            </Marker>
        ))}
      </MapView>
    </View>
  )
}

export default HomeMap