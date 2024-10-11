import { View, Text,  } from 'react-native'
import React, {useRef, useMemo, useState} from 'react'
import HomeMap from '../HomeMap';
import BottomContainer from '../BottomContainer'
import BottomSheet, { BottomSheetScrollView,} from '@gorhom/bottom-sheet';
import { useCourierProfileContext } from '@/providers/CourierProfileProvider';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import registeredCouriers from '@/assets/data/registeredCouriers';
import styles from './styles'

const HomeComponent = () => {

    const [selectedCourier, setSelectedCourier] = useState('')

    const {isOnline, setIsOnline} = useCourierProfileContext()
    
    const bottomSheetRef = useRef(null)
    const snapPoints = useMemo(()=>['18%', '37%'], [])

    // Filter and count online couriers
    const onlineCouriersCount = registeredCouriers.filter(courier => courier.isOnline).length;

  return (
    <GestureHandlerRootView style={styles.container}>

        {/* Map */}
        <HomeMap setSelectedCourier={setSelectedCourier}/>

        {/* BottomSheet */}
        <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        topInset={1}
        >
            <BottomSheetScrollView>
                {/* <HomeSearch/> */}
                <BottomContainer
                  selectedCourier={selectedCourier}
                  onlineCouriersCount={onlineCouriersCount}
                />
            </BottomSheetScrollView>
        </BottomSheet>
    </GestureHandlerRootView>
  )
}

export default HomeComponent