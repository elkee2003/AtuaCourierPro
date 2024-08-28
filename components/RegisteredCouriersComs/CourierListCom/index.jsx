import { View, Text, FlatList,TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import Ionicons from '@expo/vector-icons/Ionicons';
import registeredCouriers from '../../../assets/data/registeredCouriers'
import { router } from 'expo-router'

const CourierList = () => {

  const [searchCourier, setSearchCourier] = useState('')

  const goToCourierDetails = (id) =>{
    router.push(`/screens/registeredcouriers/${id}`)
  }

  return (
    <View style={styles.container}>

      <Text style={styles.headerTxt}>Registered Couriers</Text>

      {/* Back Button */}
      <TouchableOpacity onPress={()=>router.back()} style={styles.bckBtn}>
            <Ionicons name={'arrow-back'} style={styles.bckBtnIcon}/>
      </TouchableOpacity>

      {/* Search Engine */}
      <TextInput
      style={styles.searchEngine}
      value={searchCourier}
      onChangeText={setSearchCourier}
      placeholder='Search For Courier'
      />

      {/* Courier List */}
      <FlatList
      showsVerticalScrollIndicator={false}
      data={registeredCouriers}
      renderItem={({item})=>(
        <TouchableOpacity onPress={() => goToCourierDetails(item.id)}>
          <View style={styles.contactContainer}>
            <Text style={styles.input}>
              {item.courierName}
            </Text>

            <Text style={styles.input}>
              {item.courierAddress}
            </Text>

            <Text style={styles.input}>
              {item.courierPhoneNumber}
            </Text>

            <Text style={styles.input}>
              {item.companyCourierId}
            </Text>

            <Text style={styles.input}>
              {item.guarantorName}
            </Text>
          </View>
        </TouchableOpacity>
      )}
      />
    </View>
  )
}

export default CourierList