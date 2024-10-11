import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { router } from 'expo-router'

const BottomContainer = ({selectedCourier, onlineCouriersCount}) => {
  return (
    <View style={styles.container}>
      
        {selectedCourier ? (
          <View style={styles.courierInfoContainer}>
            <View style={styles.courierInfo}>
              {/* ImageContainer */}
              <View style= {styles.profileImageContainer}>
                  <Image style={styles.img} source={selectedCourier.img}/>
              </View>
              <Text style={styles.courierName}>{selectedCourier}</Text>
            </View>

            {/* onlineDot */}
            <View style={styles.onlineDot}/>
        </View>
        ):(
          <Text style={styles.placeholder}>Tap on marker to see courier name</Text>
        )}
        
        {/* Display the number of online couriers */}
        <Text style={styles.onlineCouriersCount}>Online Couriers: {onlineCouriersCount}</Text>
        
        {/* Button */}
        <TouchableOpacity style={styles.btn} onPress={()=>router.push('/screens/registeredcouriers/courierlist')}>
            <Text style={styles.btnTxt}>See All Couriers</Text>
        </TouchableOpacity>
    </View>
  )
}

export default BottomContainer;