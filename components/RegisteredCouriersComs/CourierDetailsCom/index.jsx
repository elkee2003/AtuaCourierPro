import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import registeredCouriers from '../../../assets/data/registeredCouriers'

const registeredcourier = registeredCouriers[3]

const CourierDetailsCom = ({courier}) => {
    // if(!courier) return null; // Ensure courier data is passed
  return (
    <View style={styles.container}>
        <Text style={styles.header}>
            {courier.courierName} Details 
        </Text>
      
        <Text>
            {courier.courierName}
        </Text>

        <Text>
            {courier.courierLastName}
        </Text>

        <Text>
            {courier.courierAddress}
        </Text>

        <Text>
            {courier.courierEmail}
        </Text>

        <Text>
            {courier.courierPhoneNumber}
        </Text>

        <Text>
            {courier.courierId}
        </Text>

        <Text>
            {courier.courierBVN}
        </Text>

        <Text>
            {courier.companyCourierId}
        </Text>

        {/* Guarantor */}
        <Text>
            {courier.guarantorName}
        </Text>

        <Text>
            {courier.guarantorLastName}
        </Text>

        <Text>
            {courier.guarantorAddress}
        </Text>

        <Text>
            {courier.guarantorEmail}
        </Text>

        <Text>
            {courier.guarantorNumber}
        </Text>

        <Text>
            {courier.guarantorId}
        </Text>
    </View>
  )
}

export default CourierDetailsCom