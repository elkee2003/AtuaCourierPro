import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useCourierProfileContext } from '@/providers/CourierProfileProvider'
import styles from './styles'
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router'

const ReviewCourier = () => {

    const {
        courierProfilePic,
        courierName, 
        courierLastName,
        courierAddress, 
        courierEmail,
        courierPhoneNumber, 
        courierId,
        courierBVN,
        companyCourierId,
        guarantorName,
        guarantorLastName, 
        guarantorProfession,
        guarantorRelationship,
        guarantorAddress, 
        guarantorEmail, 
        guarantorNumber, 
        guarantorId,
    } = useCourierProfileContext()

    // Function to save
    const onSaveCourier = ()=>{
      console.warn('Saved!')
    }

  return (
    <View 
    style={styles.container}
    >
        <View>
          <Text style={styles.header}>Courier Details</Text>
        </View>
        <TouchableOpacity onPress={()=>router.back()} style={styles.bckBtn}>
              <Ionicons name={'arrow-back'} style={styles.bckBtnIcon}/>
        </TouchableOpacity>
        <ScrollView
        showsVerticalScrollIndicator={false}>
          {/* Courier Profile Picture */}
          <TouchableOpacity style={styles.profilePicContainer}>
            <Image source={{ uri: courierProfilePic }} style={styles.img} />
          </TouchableOpacity>

          <Text style={styles.subHeader}>Courier's First Name</Text>
          <Text style={styles.input}>{courierName}</Text>

          <Text style={styles.subHeader}>Courier's Last Name</Text>
          <Text style={styles.input}>{courierLastName}</Text>

          <Text style={styles.subHeader}>Courier's Address</Text>
          <Text style={styles.input}>{courierAddress}</Text>

          {courierEmail && (
            <>
              <Text style={styles.subHeader}>Courier's Email</Text>
              <Text style={styles.input}>{courierEmail}</Text>
          
            </>
            )
          }

          <Text style={styles.subHeader}>Courier's Phone Number</Text>
          <Text style={styles.input}>{courierPhoneNumber}</Text>

          <Text style={styles.subHeader}>Courier's NIN</Text>
          <Text style={styles.input}>{courierId}</Text>

          {courierBVN && (
          <>
            <Text style={styles.subHeader}>Courier's BVN</Text>
            <Text style={styles.input}>{courierBVN}</Text>
          </>
          )}

          {companyCourierId && (
          <>
            <Text style={styles.subHeader}>Courier's Company ID</Text>
            <Text style={styles.input}>{companyCourierId}</Text>
          </>)
          }

          <Text style={styles.subHeader}>Guarantor's First Name</Text>
          <Text style={styles.input}>{guarantorName}</Text>

          <Text style={styles.subHeader}>Guarantor's Last Name</Text>
          <Text style={styles.input}>{guarantorLastName}</Text>

          <Text style={styles.subHeader}>Guarantor's Address</Text>
          <Text style={styles.input}>{guarantorAddress}</Text>

          <Text style={styles.subHeader}>Guarantor's Profession</Text>
          <Text style={styles.input}>{guarantorProfession}</Text>

          <Text style={styles.subHeader}>Relationship with Guarantor</Text>
          <Text style={styles.input}>{guarantorRelationship}</Text>

          <Text style={styles.subHeader}>Guarantor's Phone Number</Text>
          <Text style={styles.input}>{guarantorNumber}</Text>

          {guarantorEmail && (
            <>
              <Text style={styles.subHeader}>Guarantor's Email</Text>
              <Text style={styles.input}>
            {guarantorEmail}</Text>
            </>
          )}

          <Text style={styles.subHeader}>Guarantor's NIN</Text>
          <Text style={styles.lastInput}>{guarantorId}</Text>
        </ScrollView>

        {/* Button */}
        <TouchableOpacity style={styles.saveBtn} onPress={onSaveCourier}>
          <Text style={styles.saveBtnTxt}>Save</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ReviewCourier;