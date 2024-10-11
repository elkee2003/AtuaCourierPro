import { View, Text, Alert,TouchableOpacity } from 'react-native'
import React, {useState,} from 'react'
import {Picker} from '@react-native-picker/picker';
// import { Dropdown } from 'react-native-element-dropdown';
import Ionicons from '@expo/vector-icons/Ionicons';
import registeredCouriers from '@/assets/data/registeredCouriers';
import vehicles from '../../assets/data/vehicles'
import styles from './styles';
import { router } from 'expo-router';

const EditAssignVehicleCom = () => {

    const [selectedCourierId, setSelectedCourierId] = useState('');
    const [selectedVehicleId, setSelectedVehicleId] = useState('');

    // const [isFocus, setIsFocus] = useState(false);

    const assignVehicleToCourier = (courierId, vehicleId) => {
      const courier = registeredCouriers.find(c => c.id === courierId);
      const vehicle = vehicles.find(v => v.id === vehicleId)

      // Unassign the vehicle from any courier that currently has it
      registeredCouriers.forEach(courier => {
        if (courier.assignedVehicle && courier.assignedVehicle.vehicleRegNumber === vehicle.regNumber) {
          courier.assignedVehicle = null;
        }
      });

      if (courier && vehicle){
        courier.assignedVehicle = {
          vehicleType: vehicle.type,
          vehicleModel: vehicle.model,
          vehicleRegNumber: vehicle.regNumber,
        };
        Alert.alert(
          'Success',
          `${courier.courierName} has been assigned to ${vehicle.model} (${vehicle.regNumber})`
        );
      }else{
        Alert.alert('Error', 'Courier or Vehicle not found');
      }
    }

    const handleAssign = () => {
      if (selectedCourierId && selectedVehicleId) {
        assignVehicleToCourier(selectedCourierId, selectedVehicleId);
        router.push('/screens/assignvehicle/assignedvehicle')
      } else {
        Alert.alert('Error', 'Please select both a courier and a vehicle');
      }
    };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Assign Vehicle to Courier</Text>

      {/* Back Button */}
      <TouchableOpacity onPress={()=>router.back()} style={styles.bckBtn}>
            <Ionicons name={'arrow-back'} style={styles.bckBtnIcon}/>
      </TouchableOpacity>

      {/* Select Courier */}
      <Text style={styles.subHeader}>Select Courier</Text>
      <Picker
        selectedValue={selectedCourierId}
        onValueChange={(itemValue) => setSelectedCourierId(itemValue)}
      >
        <Picker.Item label="Select a Courier" value="" />
        {registeredCouriers.map(courier => (
          <Picker.Item
            key={courier.id}
            label={`${courier.courierName} ${courier.courierLastName}`}
            value={courier.id}
          />
        ))}
      </Picker>

      {/* Select Vehicle */}
      <Text style={styles.subHeader}>Select Vehicle:</Text>
      <Picker
        selectedValue={selectedVehicleId}
        onValueChange={(itemValue) => setSelectedVehicleId(itemValue)}
      >
        <Picker.Item label="Select a Vehicle" value="" />
        {vehicles.map(vehicle => (
          <Picker.Item
            key={vehicle.id}
            label={`${vehicle.type} - ${vehicle.model}`}
            value={vehicle.id}
          />
        ))}
      </Picker>

      {/* Button */}
      <TouchableOpacity style={styles.btn} onPress={handleAssign}>
        <Text style={styles.txtBtn}>Assign Vehicle</Text>
      </TouchableOpacity>
    </View>
  )
}

export default EditAssignVehicleCom