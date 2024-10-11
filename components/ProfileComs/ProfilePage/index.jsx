import { View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React from 'react';
import {useProfileContext} from '../../../providers/ProfileProvider';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styles from './styles'
import { router } from 'expo-router'

const ProfilePage = () => {

    const {
      profilePic, 
      firstName, lastName, 
      address,
      landMark, 
      phoneNumber,
      bankName,
      accountNum, 
      adminName, 
      adminLastName,
      adminNumber, 
    } = useProfileContext()

    defaultImage = 'https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg'

    const onSignout = ()=>{
      Alert.alert(
        'Sign Out',
        'Are you sure you want to sign out?',
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Yes",
            onPress: () => console.warn('Sign Out'),
          },
        ],
        { cancelable: true }
      )
    }
  return (
    <View style={styles.container}>
      <View style={styles.profilePicContainer}>
        <Image 
          style={styles.img}
          source={{uri: profilePic || defaultImage}}
        />
      </View>
      <Text style={styles.name}>{firstName}</Text>
      <Text style={styles.info}>{phoneNumber}</Text>
      <Text style={styles.infoAddress}>{address}</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Buttons */}
        <TouchableOpacity 
        style={styles.btn}
        onPress={()=>router.push('/profile')}
        >
          <Text style={styles.btnTxt}>Edit Profile</Text>
          <MaterialIcons name="navigate-next" style={styles.btnIcon} />
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.btn}
        onPress={()=>router.push('/add')}
        >
          <Text style={styles.btnTxt}>Add Courier</Text>
          <MaterialIcons name="navigate-next" style={styles.btnIcon} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.btn}
          onPress={()=>router.push('/add/addvehicle')}
        >
          <Text style={styles.btnTxt}>Add Vehicles</Text>
          <MaterialIcons name="navigate-next" style={styles.btnIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={()=>router.push('/screens/assignvehicle')}
        >
          <Text style={styles.btnTxt}>Assign Vehicle</Text>
          <MaterialIcons name="navigate-next" style={styles.btnIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={()=>router.push('/screens/assignvehicle/assignedvehicle')}
        >
          <Text style={styles.btnTxt}>Go To Assigned Vehicle</Text>
          <MaterialIcons name="navigate-next" style={styles.btnIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={()=>router.push('/screens/assignvehicle/vehiclelist')}
        >
          <Text style={styles.btnTxt}>Go To Vehicle List</Text>
          <MaterialIcons name="navigate-next" style={styles.btnIcon} />
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.btn}
        onPress={()=>router.push('/screens/registeredcouriers/courierlist')}
        >
          <Text style={styles.btnTxt}>View Registered Couriers</Text>
          <MaterialIcons name="navigate-next" style={styles.btnIcon} />
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity style={styles.signoutBtn} onPress={onSignout}>
        <Text style={styles.signoutTxt}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfilePage