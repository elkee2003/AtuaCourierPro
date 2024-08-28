import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import {useVehicleProfileProviderContext} from '../../../providers/VehicleProfileProvider'
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles'
import { router } from 'expo-router'

const EditVehicles = () => {
    
    const {vehicleType, setVehicleType,
        model, setModel, 
        regNumber, setRegNumber,
        errorMessage, setErrorMessage, 
        onValidateVehicleInput} = useVehicleProfileProviderContext()
    
    const goToReview = () =>{
        if (onValidateVehicleInput()){
            router.push('/add/reviewVehicles')
        }
    }
  return (
    <View style={styles.container}>

        {/* Header */}
        <View>
            <Text style={styles.headerTxt}>Vehicle Profile</Text>
        </View>

        {/* Back Button */}
        <TouchableOpacity onPress={()=>router.back()} style={styles.bckBtn}>
              <Ionicons name={'arrow-back'} style={styles.bckBtnIcon}/>
        </TouchableOpacity>

        {/* Inputs */}
        <ScrollView>
            <Text style={styles.subHeader}>Vehicle Type</Text>
            <TextInput
            style={styles.input}
            value={vehicleType}
            onChangeText={setVehicleType}
            placeholder="Bike, Bicycle, Car, Van etc"
            />

            <Text style={styles.subHeader}>Vehicle Model</Text>
            <TextInput
            style={styles.input}
            value={model}
            onChangeText={setModel}
            placeholder="Honda, Toyota, Trek Domane (Company of Vehicle)"
            />

            <Text style={styles.subHeader}>Registration Number (for Cars, and Bikes)</Text>
            <TextInput
            style={styles.input}
            value={regNumber}
            onChangeText={setRegNumber}
            placeholder="RIVERS AHB 234 AA"
            />

            {/* <Text style={styles.subHeaderG}>Guarantor's NIN</Text>
            <TextInput
            style={styles.input}
            value={guarantorId}
            onChangeText={setGuarantorId}
            placeholder="e.g. 123456789"
            /> */}

            <Text style={styles.error}>{errorMessage}</Text>
        </ScrollView>
        {/* Button */}
        <View>
            <TouchableOpacity onPress={goToReview} style={styles.goToReviewBtn}>
                <Text style={styles.txtBtn}>Review</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default EditVehicles