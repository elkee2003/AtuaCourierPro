import { View, Text } from 'react-native'
import React, {useState, useContext, createContext} from 'react'

const ProfileContext = createContext({})

const ProfileProvider = ({children}) => {

    const [profilePic, setProfilePic] = useState(null)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [landMark, setLandMark] = useState(null)
    const [lat, setLat] = useState('0')
    const [lng, setLng] = useState('0')
    const [phoneNumber, setPhoneNumber]= useState("")
    const [bankName, setBankName] = useState('')
    const [accountNum, setAccountNum] = useState('')
    const [adminName, setAdminName] = useState("")
    const [adminLastName, setAdminLastName] = useState('')
    const [adminNumber, setAdminNumber] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const validateInput = () =>{
        setErrorMessage('')
        if(!profilePic){
          setErrorMessage('Profile Picture is Required')
          return false;
        }
        if(!firstName){
          setErrorMessage('First Name is Required')
          return false;
        }
        if(!address){
          setErrorMessage('Address is required')
          return false;
        }
        if(phoneNumber.length < 10){
          setErrorMessage('Kindly fill in Phone Number')
          return false;
        }
        return true;
    }

    const onValidateInput = () =>{
        if (validateInput()){
            return true;
        } else{
            return false;
        }
    }

  return (
    <ProfileContext.Provider value={{firstName,setFirstName, lastName, setLastName, address, setAddress, landMark, setLandMark, lat, setLat, lng, setLng, phoneNumber, setPhoneNumber, bankName, setBankName, accountNum, setAccountNum, adminName, setAdminName, adminLastName, setAdminLastName, adminNumber, setAdminNumber, errorMessage, setErrorMessage, profilePic, setProfilePic, onValidateInput}}>
      {children}
    </ProfileContext.Provider>
  )
}

export default ProfileProvider

export const useProfileContext = () => useContext(ProfileContext)