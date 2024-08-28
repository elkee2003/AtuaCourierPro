import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import registeredCouriers from '../../../assets/data/registeredCouriers'
import CourierFullDetials from '../../../components/RegisteredCouriersComs/CourierDetailsCom'

const CourierDetails = () => {

    const {id} = useLocalSearchParams()
    const courierDetails = registeredCouriers.find(item => item.id === id)

  return (
    <View style={{flex:1}}>
      <CourierFullDetials courier={courierDetails}/>
    </View>
  )
}

export default CourierDetails