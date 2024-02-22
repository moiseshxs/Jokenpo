import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.areaHeader}>
        <View style={styles.areaUsuario}>
        
        </View>
        <View style={styles.areaConfig}>
          <View style={[styles.areaBotaoConfig, styles.shadowAreaElementos]}>
            <TouchableOpacity onPress={() => navigation.navigate('Luta')}>
              <Ionicons name="settings-sharp" size={50} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.areaMeio}>

      </View>

      <View style={styles.areaFooter}>
        <TouchableOpacity onPress={() => navigation.navigate('Luta')}>
          <View style={[styles.areaBotaoJogar, styles.shadowAreaElementos]}>
            <Text style={styles.fontJogar}>JOGAR</Text>
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}