import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';

const Account = ({ navigation }) => {
  
  const onShowRegistrationCard = () => {
    navigation.navigate('CardRegistration');
  };

  const onShowPayAccount = () => {
    navigation.navigate('PayAccount');
  };

  const onSalir = () => {
    navigation.navigate('Log_in');
  };

  return (
    <View style={styles.container}>
      <Text>Pantalla de saldos de la cuenta de usuario</Text>
      <Button onPress={onShowRegistrationCard} title="Añadir tarjeta bancaria" />
      <Button onPress={onShowPayAccount} title="Recargar saldo" />
      <Button onPress={onSalir} title="Salir" />
    </View>
  );
};

export default Account;
