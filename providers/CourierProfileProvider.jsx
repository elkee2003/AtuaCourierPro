import { View, Text } from 'react-native'
import React, {useState, useContext, createContext} from 'react'

const CourierProfileContext = createContext({})

const CourierProfileProvider = ({children}) => {

    const [courierProfilePic, setCourierProfilePic] = useState(null)
    const [courierName, setCourierName] = useState('')
    const [courierLastName, setCourierLastName] = useState('')
    const [courierAddress, setCourierAddress] = useState('')
    const [courierEmail, setCourierEmail] = useState('')
    const [courierPhoneNumber, setCourierPhoneNumber] = useState('')
    const [courierId, setCourierId] = useState('')
    const [courierBVN, setCourierBVN] = useState('')
    const [companyCourierId, setCompanyCourierId] = useState('')
    const [guarantorName, setGuarantorName] = useState('')
    const [guarantorLastName, setGuarantorLastName] = useState('')
    const [guarantorProfession, setGuarantorProfession] = useState('')
    const [guarantorRelationship, setGuarantorRelationship] = useState('')
    const [guarantorNumber, setGuarantorNumber] = useState('')
    const [guarantorAddress, setGuarantorAddress] = useState('')
    const [guarantorEmail, setGuarantorEmail] = useState('')
    const [guarantorId, setGuarantorId] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    // Validation for Courier
    const validateCourierInput = () => {
        setErrorMessage('')
        if(!courierProfilePic){
            setErrorMessage('Profile Photo is required')
            return false;
        }
        if(!courierName){
            setErrorMessage('First name is required')
            return false;
        }
        if(!courierLastName){
            setErrorMessage('Last Name is required')
            return false;
        }
        if(!courierAddress){
            setErrorMessage('Address is required')
            return false;
        }
        if(courierPhoneNumber.length < 10){
            setErrorMessage('Phone number is required')
            return false;
        }
        if(!courierId){
            setErrorMessage('NIN is required')
            return false;
        }
        return true;
    }

    // Validate Guarantor Input
    const validateGuarantorInput = () =>{
        setErrorMessage('')
        if(!guarantorName){
            setErrorMessage("Guarantor's Name is required")
            return false;
        }
        if(!guarantorLastName){
            setErrorMessage("Guarantor's Last Name is required")
            return false;
        }
        if(!guarantorAddress){
            setErrorMessage("Guarantor's Address is required")
            return false;
        }
        if(!guarantorProfession){
            setErrorMessage("Guarantor's Profession is required")
            return false;
        }
        if(!guarantorRelationship){
            setErrorMessage("Relationship with Guarantor is required")
            return false;
        }
        if(guarantorNumber.length < 10){
            setErrorMessage("Guarantor's Phone Number is required")
            return false;
        }
        if(!guarantorId){
            setErrorMessage("Guarantor's NIN is required")
            return false;
        }
        return true;
    }

    // OnValidate courierInput
    const onValidateCourierInput = () =>{
        if(validateCourierInput()){
            return true;
        }else{
            return false;
        }
    }

    // onValidate guarantorInput
    const onValidateGurarantorInput = () =>{
        if(validateGuarantorInput()){
            return true;
        }else{
            return false;
        }
    }

  return (
    <CourierProfileContext.Provider value={{
        courierProfilePic,setCourierProfilePic,
        courierName, setCourierName,
        courierLastName, setCourierLastName,
        courierAddress, setCourierAddress,
        courierEmail, setCourierEmail,
        courierPhoneNumber, setCourierPhoneNumber,
        courierId, setCourierId,
        courierBVN, setCourierBVN,
        companyCourierId, setCompanyCourierId,
        guarantorName, setGuarantorName,
        guarantorLastName, setGuarantorLastName,
        guarantorProfession, setGuarantorProfession,
        guarantorRelationship, setGuarantorRelationship,
        guarantorAddress, setGuarantorAddress,
        guarantorEmail, setGuarantorEmail,
        guarantorNumber, setGuarantorNumber,
        guarantorId, setGuarantorId,
        errorMessage, setErrorMessage,
        onValidateCourierInput, onValidateGurarantorInput
    }}>
      {children}
    </CourierProfileContext.Provider>
  )
}

export default CourierProfileProvider

export const useCourierProfileContext = () => useContext(CourierProfileContext)