import { View, Text, } from 'react-native'
import React, {useState, useContext, createContext} from 'react'

const VehicleProfileProviderContext = createContext({})

const VehicleProfileProvider = ({children}) => {

    const [vehicleType, setVehicleType] = useState("")
    const [model, setModel] = useState('')
    const [regNumber, setRegNumber] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const validateVehicleInput = () =>{
      setErrorMessage("")
      if(!vehicleType){
        setErrorMessage('Vehicle Type is required')
        return false;
      }
      if(!model){
        setErrorMessage('Vehicle Model is required')
        return false;
      }
      return true;
    }

    const onValidateVehicleInput = () => {
      if (validateVehicleInput()){
        return true;
      }else{
        return false;
      }
    }

  return (
    <VehicleProfileProviderContext.Provider value={{vehicleType, setVehicleType, model, setModel, regNumber, setRegNumber, errorMessage, setErrorMessage, onValidateVehicleInput}}>
        {children}
    </VehicleProfileProviderContext.Provider>
  )
}

export default VehicleProfileProvider;

export const useVehicleProfileProviderContext = () => useContext(VehicleProfileProviderContext)