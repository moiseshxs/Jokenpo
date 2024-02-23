import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


export default function App() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
      source={require("../../../assets/img/fundos/vila.jpg")}
      style={styles.fotoFundo}>
      

      <View style={styles.areaLogo}>
        <Image
          source={require("../../../assets/img/icon/logo.png")}
          style={styles.fotoLogo}
        />
      </View>

      <View style={styles.areaFooter}>
        <View style={styles.flexCima}></View>
        <View style={styles.flex}>
        <TouchableOpacity onPress={() => navigation.navigate('Luta')}>
          <View style={[styles.areaBotaoJogar, styles.shadowAreaElementos]}>
            <Text style={styles.fontJogar}>Jogar Agora!</Text>
          </View>
        </TouchableOpacity>
        </View>
        <View style={styles.flex}></View>
      </View>

      <View style={styles.areaHeader}>
        <View style={styles.areaAjuda}>
          <View style={[styles.areaBotaoConfig, styles.shadowAreaElementos]}>
            <TouchableOpacity onPress={() => navigation.navigate('Luta')}>
              <Entypo name="help" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.areaConfig}>
          <View style={[styles.areaBotaoConfig, styles.shadowAreaElementos]}>
            <TouchableOpacity onPress={() => navigation.navigate('Luta')}>
              <Ionicons name="settings-sharp" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}