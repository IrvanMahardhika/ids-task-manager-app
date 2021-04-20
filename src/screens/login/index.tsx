import React from 'react';
import {SafeAreaView, Text} from 'react-native';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

const Login: React.FC<Props> = () => {
  return (
    <SafeAreaView>
      <Text>Login Screen</Text>
    </SafeAreaView>
  );
};

export default Login;
