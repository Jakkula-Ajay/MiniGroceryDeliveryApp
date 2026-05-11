import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext }
from '../context/AuthContext';
import LoginScreen from '../screens/LoginScreen';
import OtpScreen from '../screens/OtpScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import OrderSuccessScreen from '../screens/OrderSuccessScreen';
const Stack =
  createNativeStackNavigator();
const AppNavigator = () => {
  const { isLoggedIn } =
    useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
      >
        {!isLoggedIn ? (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
            />
            <Stack.Screen
              name="Otp"
              component={OtpScreen}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
            />

            <Stack.Screen
              name="Details"
              component={DetailsScreen}
            />

            <Stack.Screen
              name="Cart"
              component={CartScreen}
            />

            <Stack.Screen
              name="Checkout"
              component={CheckoutScreen}
            />

            <Stack.Screen
              name="Success"
              component={OrderSuccessScreen}
            />

          </>

        )}

      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default AppNavigator;