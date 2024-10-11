navigator.geolocation = require('@react-native-community/geolocation');
import { Stack } from "expo-router";
import ProfileProvider from '../providers/ProfileProvider'
import CourierProfileProvider from '../providers/CourierProfileProvider'
import VehicleProfileProvider from '../providers/VehicleProfileProvider'
import {
  withAuthenticator,
  useAuthenticator
} from '@aws-amplify/ui-react-native';
import { Amplify } from 'aws-amplify';
import amplifyconfig from '../src/amplifyconfiguration.json'

Amplify.configure(amplifyconfig);

const RootLayout = () => {
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

// export default withAuthenticator(RootLayout);
export default RootLayout;
