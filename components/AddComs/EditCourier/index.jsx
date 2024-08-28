import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, {useState} from 'react';
import * as ImagePicker from 'expo-image-picker';
import { useCourierProfileContext } from '@/providers/CourierProfileProvider';
import { AntDesign } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styles from './styles'
import { router } from 'expo-router';

const AddCourier = () => {

    const {courierProfilePic,setCourierProfilePic,
        courierName, setCourierName,
        courierLastName, setCourierLastName,
        courierAddress, setCourierAddress,
        courierEmail, setCourierEmail,
        courierPhoneNumber, setCourierPhoneNumber,
        courierId, setCourierId,
        courierBVN, setCourierBVN,
        companyCourierId, setCompanyCourierId,
        errorMessage,
        onValidateCourierInput,} = useCourierProfileContext()

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });
  
      if (!result.canceled) {
        setCourierProfilePic(result.assets[0].uri);
      }
    };

    // Function to go to Guarantor Page
    const onNxtPage = () => {
        if(onValidateCourierInput()){
            router.push('/add/guarantor')
        }
    }

  return (
    <View 
    style={styles.container}
    >

        {/* Header */}
        <View>
            <Text style={styles.headerTxt}>Add Courier</Text>
        </View>

        {/* Back Button */}
        <TouchableOpacity onPress={()=>router.back()} style={styles.bckBtn}>
              <Ionicons name={'arrow-back'} style={styles.bckBtnIcon}/>
        </TouchableOpacity>

        <ScrollView showsVerticalScrollIndicator={false}>
            
            {/* Upload Profile Picture */}
            <View style={styles.profilePicContainer}>
                {courierProfilePic && <Image source={{ uri: courierProfilePic }} style={styles.img} />}
                <View style={styles.plusIconContainer}>
                <TouchableOpacity onPress={pickImage}>
                <AntDesign style={styles.plusIcon} name="pluscircle"  />
                </TouchableOpacity>
                </View>
            </View>

            {/* Input fields */}
            <Text style={styles.subHeader}>First Name</Text>
            <TextInput
            style={styles.input}
            value={courierName}
            onChangeText={setCourierName}
            placeholder="Courier's First Name"
            />

            <Text style={styles.subHeader}>Last Name</Text>
            <TextInput
            style={styles.input}
            value={courierLastName}
            onChangeText={setCourierLastName}
            placeholder="Courier's Last Name"
            />

            <Text style={styles.subHeader}>Address</Text>
            <TextInput
            style={styles.input}
            value={courierAddress}
            onChangeText={setCourierAddress}
            placeholder="Courier's Address"
            />

            {/* Input Row */}
            <View style={styles.containerInputRow}>
                <View>
                    <Text style={styles.subHeader}>Email (optional)</Text>
                    <TextInput
                    style={styles.inputRow}
                    value={courierEmail}
                    onChangeText={setCourierEmail}
                    placeholder="Courier's email (optional)"
                    />
                </View>

                <View>
                    <Text style={styles.subHeader}>Phone Number</Text>
                    <TextInput
                    style={styles.inputRow}
                    value={courierPhoneNumber}
                    onChangeText={setCourierPhoneNumber}
                    placeholder="Courier's Phone Number"
                    keyboardType='numeric'
                    />
                </View>
            </View>

                <Text style={styles.subHeader}>National Identification Number (NIN)</Text>
                <TextInput
                style={styles.input}
                value={courierId}
                onChangeText={setCourierId}
                placeholder="e.g. 123456789"
                />

            {/* Input Row */}
            <View style={styles.containerInputRow}>
                <View>
                    <Text style={styles.subHeader}>BVN (optional)</Text>
                    <TextInput
                    style={styles.inputRow}
                    value={courierBVN}
                    onChangeText={setCourierBVN}
                    placeholder="e.g. 123456789(optional)"
                    />
                </View>

                <View>
                <Text style={styles.subHeader}>Company ID (optional)</Text>
                <TextInput
                style={styles.inputRow}
                value={companyCourierId}
                onChangeText={setCompanyCourierId}
                placeholder="e.g. Atua-123-ABC (optional)"
                />
                </View>
            </View>

            

            <Text style={styles.error}>{errorMessage}</Text>

        </ScrollView>

        {/* Button */}
        <View>
            <TouchableOpacity onPress={onNxtPage} style={styles.nxtBtn}>
                <MaterialIcons name="navigate-next" style={styles.nxtBtnIcon} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default AddCourier;