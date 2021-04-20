import React, {useEffect} from 'react';
import splashScreen from 'react-native-splash-screen';
import asyncStorage from '@react-native-async-storage/async-storage';

import MainNavigator from '@navigators/mainNavigator';

const AppInit: React.FC = () => {
  const checkAuthData = async () => {
    await asyncStorage.getItem('auth');
    splashScreen.hide();
  };

  useEffect(() => {
    checkAuthData();
  }, []);

  return <MainNavigator />;
};

export default AppInit;
