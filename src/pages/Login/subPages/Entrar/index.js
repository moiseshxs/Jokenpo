import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ImageBackground, Modal } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}