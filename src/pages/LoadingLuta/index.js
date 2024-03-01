import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Image, useState, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';


import Gif from '../../../assets/img/loading/pizza.gif';


export default function App() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Luta');
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image 
        source={Gif}
        style={styles.fotoLoading}
      />
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fotoLoading: {
    height: '100%',
    width: '100%',
  },
});
