import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ImageBackground, Modal } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-web';
import React, { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";

export default function App() {

  const[email, setEmail] = useState('');
  const[senha, setSenha] = useState('');

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.area1}>
        <Image
          source={require("../../../../../assets/img/pinguim/login.png")}
          style={styles.foto1}
          />
        </View>
        <View style={styles.area}>
          <View style={styles.login}>
            <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Email" />
            <TextInput style={styles.input} onChangeText={setSenha} value={senha} placeholder="Senha" />
            <LinearGradient
              colors={["#6ed000", "#5db200"]}
              style={styles.button}
            >
              <TouchableOpacity>LOGIN</TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.area1}> 
        <Image
          source={require("../../../../../assets/img/pinguim/puffles.png")}
          style={styles.foto}
          />
        </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}