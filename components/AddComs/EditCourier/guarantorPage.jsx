import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useCourierProfileContext } from '@/providers/CourierProfileProvider';
import styles from './styles'
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';


const GuarantorPage = () => {

    const {
        guarantorName, setGuarantorName,
        guarantorLastName, setGuarantorLastName,
        guarantorProfession, setGuarantorProfession,
        guarantorRelationship, setGuarantorRelationship,
        guarantorAddress, setGuarantorAddress,
        guarantorEmail, setGuarantorEmail,
        guarantorNumber, setGuarantorNumber,
        guarantorId, setGuarantorId,
        errorMessage,onValidateGurarantorInput} = useCourierProfileContext()

    const onGoToReview = () =>{
        if(onValidateGurarantorInput()){
            router.push('/add/reviewCourier')
        }
    }

  return (
    <View style={styles.container}>

        {/* Header */}
        <View>
            <Text style={styles.guarantorHeaderTxt}>Courier's Guarantor</Text>
        </View>
        <TouchableOpacity onPress={()=>router.back()} style={styles.bckBtn}>
              <Ionicons name={'arrow-back'} style={styles.bckBtnIcon}/>
        </TouchableOpacity>

        {/* Input */}
        <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.subHeader}>Guarantor's First Name</Text>
            <TextInput
            style={styles.input}
            value={guarantorName}
            onChangeText={setGuarantorName}
            placeholder="Guarantor's First Name"
            />

            <Text style={styles.subHeader}>Guarantor's Last Name</Text>
            <TextInput
            style={styles.input}
            value={guarantorLastName}
            onChangeText={setGuarantorLastName}
            placeholder="Guarantor's Last Name"
            />

            <Text style={styles.subHeader}>Guarantor's Address</Text>
            <TextInput
            style={styles.input}
            value={guarantorAddress}
            onChangeText={setGuarantorAddress}
            placeholder="Guarantor's Address"
            />

            <Text style={styles.subHeader}>Guarantor's Profession</Text>
            <TextInput
            style={styles.input}
            value={guarantorProfession}
            onChangeText={setGuarantorProfession}
            placeholder="Lawyer, Plumber, Chef, Engineer etc"
            />

            <Text style={styles.subHeader}>Relationship with Guarantor</Text>
            <TextInput
            style={styles.input}
            value={guarantorRelationship}
            onChangeText={setGuarantorRelationship}
            placeholder="Mother, brother, Uncle, friend, Boss etc"
            />
            
            {/* Input Row */}
            <View style={styles.containerInputRow}>
                <View>
                    <Text style={styles.subHeader}>Guarantor's Number</Text>
                    <TextInput
                    style={styles.inputRow}
                    value={guarantorNumber}
                    onChangeText={setGuarantorNumber}
                    placeholder="Guarantor's Phone Number"
                    />
                </View>

                <View>
                    <Text style={styles.subHeader}>Guarantor's Email (optional)</Text>
                    <TextInput
                    style={styles.inputRow}
                    value={guarantorEmail}
                    onChangeText={setGuarantorEmail}
                    placeholder="Guarantor's Email (optional)"
                    />
                </View>
            </View>

            <Text style={styles.subHeader}>Guarantor's NIN</Text>
            <TextInput
            style={styles.input}
            value={guarantorId}
            onChangeText={setGuarantorId}
            placeholder="e.g. 123456789"
            />

            <Text style={styles.error}>{errorMessage}</Text>
        </ScrollView>

        {/* Button */}
        <View>
            <TouchableOpacity onPress={onGoToReview} style={styles.goToReviewBtn}>
                <Text style={styles.txtBtn}>Review</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default GuarantorPage