import { View, Text, FlatList, TouchableOpacity,} from 'react-native'
import React from 'react'
import styles from './styles'
import registeredCouriers from '@/assets/data/registeredCouriers'
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

const AssignedVehicle = () => {
  return (
    <View style={styles.container}>

      {/* header */}
      <Text style={styles.header}>
        Assigned Vehicle
      </Text>

      {/* Back Button */}
      <TouchableOpacity onPress={()=> router.back()} style={styles.bckBtn}>
            <Ionicons name={'arrow-back'} style={styles.bckBtnIcon}/>
      </TouchableOpacity>

      {/* Couriers and Vehicles */}
      <FlatList
        data={registeredCouriers}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
          <TouchableOpacity 
            style={styles.itemContainer}
            onPress={()=>router.push('/screens/assignvehicle/')}
          >
            <Text style={styles.courierName}>
              {item.courierName} {item.courierLastName}
            </Text>
            {item.assignedVehicle ? (
              <View>
              <Text style={styles.vehicleInfo}>
                Vehicle: {item.assignedVehicle.vehicleModel} ({item.assignedVehicle.vehicleType})
              </Text>
              <Text style={styles.vehicleInfo}>
                Registration Number: {item.assignedVehicle.vehicleRegNumber}
              </Text>
              </View>
            ):(
              <Text style={styles.noVehicle}>
                No Vehicle Assigned
              </Text>
            )}
          </TouchableOpacity>
        )}
      />

      {/* Buttons */}
      <View style={styles.btnRow}>

        {/* Go Home */}
        <TouchableOpacity style={styles.homeBtn} onPress={()=>router.push('/home')}>
          <Text style={styles.homeBtnTxt}>Home</Text>
        </TouchableOpacity>

        {/* Go to Assign */}
        <TouchableOpacity style={styles.assignBtn} onPress={()=>router.push('/screens/assignvehicle/')}>
          <Text style={styles.assignBtnTxt}>Assign Vehicle</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AssignedVehicle