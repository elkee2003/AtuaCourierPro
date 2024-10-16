import { View, useWindowDimensions, ActivityIndicator, Image, PermissionsAndroid, Platform, } from 'react-native'
import React, {useState, useEffect} from 'react'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import * as Location from 'expo-location';
import styles from './styles'
import Entypo from '@expo/vector-icons/Entypo';
import TMediums from '../../../assets/data/TMedium'
import registeredCouriers from '../../../assets/data/registeredCouriers'
import {orders} from '@/assets/data/orders'

const HomeMap = ({setSelectedCourier}) => {
    const {width, height} = useWindowDimensions()
    const [avaliableOrders, setAvaliableOrders] = useState(orders);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    // Function to select courier
    const selectCourier =(selected) =>{
      const courier = registeredCouriers.find(c => c.courierName === selected)
      if (courier){
        setSelectedCourier(`${courier.courierName} ${courier.courierLastName}`)
      }
    }

    // function to get image
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
        let watchId;
    
        const requestLocationPermission = async () => {
            try {
                // For both iOS and Android
                if (Platform.OS === 'ios' || Platform.OS === 'android') {
                Geolocation.requestAuthorization(); // Request permission on iOS and Android
                }
        
                // Watch the user's location and update it continuously
                watchId = Geolocation.watchPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ latitude, longitude });
                    console.log('Updated Location:', position);
                },
                (error) => {
                    console.error('Geolocation error:', error);
                    setErrorMsg('Error fetching location');
                },
                {
                    enableHighAccuracy: true,
                    timeout: 20000,
                    maximumAge: 1000,
                    distanceFilter: 500, // Update based on distance (e.g., every 500 meters)
                }
                );
            } catch (error) {
                console.error('Location permission error:', error);
                setErrorMsg('Failed to request location permission');
            }
        };
    
        requestLocationPermission();
    
        // Cleanup subscription when the component unmounts
        return () => {
          if (watchId !== null) {
            Geolocation.clearWatch(watchId);
          }
        };
    }, []);

    if (!location || !location.latitude || !location.longitude) {
      return <ActivityIndicator style={{ marginTop: 30 }} size="large" />;
    }

  return (
    <View style={styles.container}>
      <MapView
        style={{width, height: height - 120}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Couriers */}
        {TMediums.map((TMedium)=>{
          return <Marker
                key={TMedium.id}
                coordinate={{ latitude : TMedium.latitude , longitude : TMedium.longitude }}
                title={TMedium.name}
                description={'courier'}
                onPress = {()=>selectCourier(TMedium.name)}
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
                description={'Order'}
                coordinate={{
                    latitude: order.User.originLat,
                    longitude: order.User.originLng,
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