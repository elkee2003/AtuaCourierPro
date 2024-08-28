import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useVehicleProfileProviderContext } from '../../../providers/VehicleProfileProvider';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles'
import { router } from 'expo-router';

const ReviewVehicles = () => {

    const {vehicleType, model, regNumber,} = useVehicleProfileProviderContext()

    // Function to save
    const onSaveVehicle = ()=>{
      console.warn('Saved!')
    }
  return (
    <View style={styles.container}>

      {/* Header */}
      <Text style={styles.header}>Vehicle Details</Text>

      {/* Back Button */}
      <TouchableOpacity onPress={()=>router.back()} style={styles.bckBtn}>
        <Ionicons name={'arrow-back'} style={styles.bckBtnIcon}/>
      </TouchableOpacity>

      {/* input fields */}
      <ScrollView>
          <Text style={styles.subHeader}>Vehicle Type</Text>
          <Text style={styles.input}>{vehicleType}</Text>

          <Text style={styles.subHeader}>Vehicle Model</Text>
          <Text style={styles.input}>{model}</Text>

          {regNumber && (
              <>
                  <Text style={styles.subHeader}>Registeration Number (Plate Number)</Text>
                  <Text style={styles.input}>{courierAddress}</Text>
              </>
          )}
      </ScrollView>
      <TouchableOpacity 
        style={styles.saveBtn}
        onPress={onSaveVehicle}
      >
        <Text style={styles.saveBtnTxt}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ReviewVehicles