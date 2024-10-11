import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import vehicles from '@/assets/data/vehicles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

const VehicleListCom = () => {

    const [searchVehicle, setSearchVehicle] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Registered Vehicles</Text>

      {/* Back Button */}
      <TouchableOpacity onPress={()=>router.back()} style={styles.bckBtn}>
            <Ionicons name={'arrow-back'} style={styles.bckBtnIcon}/>
      </TouchableOpacity>

      {/* Search Engine */}
      <TextInput
      style={styles.searchEngine}
      value={searchVehicle}
      onChangeText={setSearchVehicle}
      placeholder='Search For Courier'
      />

      {/* List of Vehicles */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={vehicles}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
            <View style={styles.vehicleContainer}>
                <Text>Vehicle Type:</Text>
                <Text style={styles.input}>{item.type}</Text>

                <Text style={styles.subHVehicle}>Vehicle Model:</Text>
                <Text style={styles.input}>{item.model}</Text>

                <Text style={styles.subHVehicle}>Vehicle Reg Number:</Text>
                <Text style={styles.input}>{item.regNumber}</Text>
            </View>
        )}
      />
    </View>
  )
}

export default VehicleListCom