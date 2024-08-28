import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {useProfileContext} from '../../../providers/ProfileProvider'
import styles from './styles'
import { router } from 'expo-router'

const ProfilePage = () => {

    const {profilePic, firstName, lastName, address, phoneNumber,} = useProfileContext()
  return (
    <View style={styles.container}>
      <Text>{firstName}</Text>
      <Text>{address}</Text>
      <Text>{phoneNumber}</Text>

      {/* Buttons */}
      <TouchableOpacity 
      style={styles.btn}
      onPress={()=>router.push('/profile')}
      >
        <Text>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.btn}
      onPress={()=>router.push('/add')}
      >
        <Text>Add Courier</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.btn}
      onPress={()=>router.push('/add/addvehicle')}
      >
        <Text>Add Vehicles</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.btn}
      onPress={()=>router.push('/screens/registeredcouriers/courierlist')}
      >
        <Text>View Registered Couriers</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfilePage