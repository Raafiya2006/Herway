import { Provider } from 'react-redux';
import store from './store';
import MapScreen from './screens/MapScreen';
import HomeScreen from './screens/HomeScreen';
import TestScreen  from "./screens/TestScreen";
import ProfileScreen from "./screens/ProflieScreen";
import SOSButton from "./components/SOSButton";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="TestScreen"
              component={TestScreen}
              options={{
                headerShown: false,
              }}
              
            />
            <Stack.Screen
              name="ProfileScreen"
              component={ProfileScreen}
              options={{
                headerShown: false,
              }}
            />

          </Stack.Navigator>
          <SOSButton/>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

