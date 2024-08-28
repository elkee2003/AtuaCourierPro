import { Stack } from "expo-router";
import ProfileProvider from '../providers/ProfileProvider'
import CourierProfileProvider from '../providers/CourierProfileProvider'
import VehicleProfileProvider from '../providers/VehicleProfileProvider'

export default function RootLayout() {
  return (
    <ProfileProvider>
      <CourierProfileProvider>
        <VehicleProfileProvider>
          <Stack screenOptions={{
            headerShown:false
          }}>
              <Stack.Screen name='(tabs)'/>
          </Stack>
        </VehicleProfileProvider>
      </CourierProfileProvider>
    </ProfileProvider>
  );
}
