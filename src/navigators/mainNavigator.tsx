import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {Alert} from 'react-native';
// import {useAppDispatch} from '@redux/hooks';

import Login from '@screens/login';

const Stack = createStackNavigator();

const MainNavigator = () => {
  //   const dispatch = useAppDispatch();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={() => ({headerShown: false})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
