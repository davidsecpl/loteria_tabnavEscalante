import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';

const Login = ({ navigation }) => {
  
  const onLogin = () => {
    navigation.navigate('Session');
  };

  const onRecovery = () => {
    navigation.navigate('Recovery');
  };

  const onRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text>Pantalla Login</Text>
      <Button onPress={onLogin} title="Ingresar" />
      <Button onPress={onRecovery} title="Recovery" />
      <Button onPress={onRegister} title="Register" />
    </View>
  );
};

export default Login;
