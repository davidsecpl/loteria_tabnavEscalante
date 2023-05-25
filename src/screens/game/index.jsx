import React from "react";
import { View, Text, Button } from "react-native";
import {styles} from './styles';

const Game = ({navigation})=>{
   
    const onShowFrequentQuestions = ()=>{
        navigation.navigate('FrequentQuestions');
    };

    const onShowPayTable = ()=>{
        navigation.navigate('PayTable');
    };

    const onSalir = ()=>{
        navigation.navigate('Log_in');
    };

    return (
        <View style={styles.container}>
            <Text>Pantalla Game</Text>
            <Button onPress={onShowFrequentQuestions} title="? Frecuentes" />
            <Button onPress={onShowPayTable} title="# de pagos" />
            <Button onPress={onSalir} title="Salir" />
        </View>
    );
};

export default Game;