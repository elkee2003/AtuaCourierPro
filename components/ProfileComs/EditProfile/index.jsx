import { View, Text, TextInput,Pressable, Alert, ScrollView, Image, TouchableOpacity} from 'react-native'
import React, {useState, useRef} from 'react'
import * as ImagePicker from 'expo-image-picker';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from '@/keys';
import styles from './styles'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { AntDesign } from '@expo/vector-icons';
import { useProfileContext } from '../../../providers/ProfileProvider';



const EditProfile = () => {

    const [isFocused, setIsFocused] = useState(false);

    const autocompleteRef = useRef(null)

    const {
      firstName,setFirstName, 
      lastName, setLastName, 
      profilePic, setProfilePic, 
      address, setAddress,
      landMark, setLandMark, 
      lat, setLat, lng, setLng, 
      phoneNumber, setPhoneNumber,
      bankName, setBankName, 
      accountNum, setAccountNum, 
      adminName, setAdminName, 
      adminLastName, setAdminLastName,
      adminNumber, setAdminNumber, errorMessage, onValidateInput,
    } = useProfileContext()

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });
  
      if (!result.canceled) {
        setProfilePic(result.assets[0].uri);
      }
    };

    // Function to go to Guarantor Page
    const onNxtPage = () => {
        if(onValidateInput()){
            console.warn('next page')
            router.push('/profile/profilepage');
        }
    }
    
    // // Navigation Function
    // const handleSave = () => {
    //   if (onValidateInput()) {
    //       router.push('/profile/profilepage'); // Navigate to the profile screen upon successful validation
    //   }
    // };

    // function to handle focus
    const handleFocusChange = (focused) => {
      setIsFocused(focused);
    };

    // Start Of GooglePlacesAutoComplete function
    const handlePlaceSelect = (data, details = null) => {
      // Extract the address from the selected place
      const selectedLandMark = data?.description || details?.formatted_address;

      const selectedAddylat = JSON.stringify(details?.geometry?.location.lat) 

      const selectedAddylng = JSON.stringify(details?.geometry?.location.lng) 

      console.log(selectedAddylng, selectedAddylat)
  
      // Update the address state
      setLandMark(selectedLandMark);
      setLat(selectedAddylat)
      setLng(selectedAddylng)
  
    };

    // function to clear autocompleter
    const handleClearAddress = () => {
        autocompleteRef.current?.clear(); // Clear the autocomplete input
        setLandMark(null);
    };


    return (
    <View style={styles.container}>

      <Text style={styles.title}>Profile</Text>
      <TouchableOpacity onPress={()=>router.back()} style={styles.bckBtn}>
              <Ionicons name={'arrow-back'} style={styles.bckBtnIcon}/>
      </TouchableOpacity>

      {/* Upload Profile Picture */}
      <View style={styles.profilePicContainer}>
        {profilePic && <Image source={{ uri: profilePic }} style={styles.img} />}
        <View style={styles.plusIconContainer}>
            <TouchableOpacity onPress={pickImage}>
            <AntDesign style={styles.plusIcon} name="pluscircle"  />
            </TouchableOpacity>
        </View>
      </View>
      {/* <TouchableOpacity onPress={pickImage}>
        <AntDesign style={styles.plusIcon} name="pluscircle" size={30} color="#03033b" />
      </TouchableOpacity> */}
        

      <TextInput 
      value={firstName}
      onChangeText={setFirstName}
      placeholder='Name / Company name'
      style={styles.input}
      />
      <TextInput 
      value={lastName}
      onChangeText={setLastName}
      placeholder='Surname (Optional)'
      style={styles.input}
      />
      
      <TextInput 
      value={address}
      onChangeText={setAddress}
      placeholder='Address'
      style={styles.input}
      />

      {/* Googleplaces autocomplete */}
      <View style={isFocused ? styles.gContainerFocused : styles.gContainer}>
        <GooglePlacesAutocomplete
        fetchDetails
        ref={autocompleteRef}
        placeholder='Select closest land mark from here'
        onPress={handlePlaceSelect}
        textInputProps={{
          onFocus:() => handleFocusChange(true),
          onBlur:() => handleFocusChange(false),
          
        }} 
        styles={{
          textInput:styles.gTextInput,
          textInputContainer:styles.gTextInputContainer,
          listView:styles.glistView,
          poweredContainer:styles.gPoweredContainer
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: 'en',
          components: 'country:ng',
        }}
        // renderRightButton={() => (
        //   <TouchableOpacity onPress={handleClearAddress} style={styles.clearIconContainer}>
        //     <Ionicons name='close-circle' style={styles.clearIcon}/>
        //   </TouchableOpacity>
        // )}
        />
        <TouchableOpacity onPress={handleClearAddress} style={styles.clearIconContainer}>
          <Ionicons name='close-circle' style={styles.clearIcon}/>
        </TouchableOpacity>
      </View>
    
      <TextInput
      value={phoneNumber}
      onChangeText={setPhoneNumber}
      placeholder='Phone Number'
      style={styles.input}
      keyboardType='numeric'
      />

      {/* Error Message */}
      <Text style={styles.error}>{errorMessage}</Text>
      
      {/* Button */}
      <View>
          <TouchableOpacity onPress={onNxtPage} style={styles.nxtBtn}>
              <MaterialIcons name="navigate-next" style={styles.nxtBtnIcon} />
          </TouchableOpacity>
      </View>
      
      
    </View>
  )
}

export default EditProfile;