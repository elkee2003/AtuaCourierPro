import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles'
import registeredCouriers from '../../../assets/data/registeredCouriers'
import { router } from 'expo-router';

const CourierDetailsCom = ({courier}) => {

    const handleDelete = () => {
        Alert.alert(
            "Delete Courier",
            `Are you sure you want to delete ${courier.courierName} ${courier.courierLastName}?`,
            [
            {
                text: "Cancel",
                style: "cancel",
            },
            {
                text: "OK",
                onPress: () => deleteCourier(),
            },
            ],
            { cancelable: false }
        );
    };

    const deleteCourier = () => {
        const index = registeredCouriers.findIndex(item => item.id === courier.id);
        if (index !== -1) {
            registeredCouriers.splice(index, 1);
            router.back();  // Navigate back after deletion
        }
    };

  return (
    <View style={styles.container}>
        <Text style={styles.header}>
            {courier.courierName}'s Details 
        </Text>

        {/* Back Button */}
        <TouchableOpacity onPress={()=>router.back()} style={styles.bckBtn}>
            <Ionicons name={'arrow-back'} style={styles.bckBtnIcon}/>
        </TouchableOpacity>

        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollStyle} 
        >

            <Text style={styles.subHeader}>Courier's First Name</Text>
            <Text style={styles.input}>
                {courier.courierName}
            </Text>

            <Text style={styles.subHeader}>
                Courier's Last Name
            </Text>
            <Text style={styles.input}>
                {courier.courierLastName}
            </Text>

            <Text style={styles.subHeader}>
                Courier's Address
            </Text>
            <Text style={styles.input}>
                {courier.courierAddress}
            </Text>

            <Text style={styles.subHeader}>
                Courier's Email
            </Text>
            <Text style={styles.input}>
                {courier.courierEmail}
            </Text>

            <Text style={styles.subHeader}>
                Courier's Phone Number
            </Text>
            <Text style={styles.input}>
                {courier.courierPhoneNumber}
            </Text>

            <Text style={styles.subHeader}>
                Courier's NIN
            </Text>
            <Text style={styles.input}>
                {courier.courierId}
            </Text>

            <Text style={styles.subHeader}>
                Courier's BVN 
            </Text>
            <Text style={styles.input}>
                {courier.courierBVN}
            </Text>

            <Text style={styles.subHeader}>
                Courier's Company ID
            </Text>
            <Text style={styles.input}>
                {courier.companyCourierId}
            </Text>

            {/* Guarantor */}
            <Text style={styles.subHeader}>
                Guarantor's First Name
            </Text>
            <Text style={styles.input}>
                {courier.guarantorName}
            </Text>

            <Text style={styles.subHeader}>
                Guarantor's Last Name
            </Text>
            <Text style={styles.input}>
                {courier.guarantorLastName}
            </Text>

            <Text style={styles.subHeader}>
                Guarantor's Address
            </Text>
            <Text style={styles.input}>
                {courier.guarantorAddress}
            </Text>

            <Text style={styles.subHeader}>
                Guarantor's Email
            </Text>
            <Text style={styles.input}>
                {courier.guarantorEmail}
            </Text>

            <Text style={styles.subHeader}>
                Guarantor's Phone Number
            </Text>
            <Text style={styles.input}>
                {courier.guarantorNumber}
            </Text>

            <Text style={styles.subHeader}>
                Guarantor's NIN
            </Text>
            <Text style={styles.input}>
                {courier.guarantorId}
            </Text>
        </ScrollView>

        {/* Button */}
        <TouchableOpacity 
            style={styles.delBtn}
            onPress={handleDelete}
        >
            <Text style={styles.delTxt}>Delete</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CourierDetailsCom