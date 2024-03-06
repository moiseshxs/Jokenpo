import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, Image, TouchableOpacity, Modal, ImageBackground } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../../assets/img/fundos/vila.jpg")}
        style={styles.fotoFundo}>

      <View style={styles.areaLogo}>
        <Image
          source={require("../../../assets/img/icon/Disney_Club_Penguin_Logo.svg.png")}
          style={styles.fotoLogo}
        />
      </View>
      <View style={styles.areaBotoes}>
        <View style={styles.areaBotao}>       
        
        <LinearGradient
        // Button Linear Gradient
        colors={['#1D98E8', '#0960C1']}
        style={[styles.fundoBotao, styles.bordaBotao1]}>
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
              <Text style={styles.textBotao}>Crie seu pinguim</Text>
            </TouchableOpacity>
        </LinearGradient>
          
        <LinearGradient
        // Button Linear Gradient
        colors={['#f9d42b', '#fda50d']}
        style={[styles.fundoBotao, styles.bordaBotao]}>
            <TouchableOpacity onPress={() => navigation.navigate('Entrar')}>
              <Text style={styles.textBotao}>Entrar</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
      <StatusBar style="auto" />
      </ImageBackground>
    </SafeAreaView>
  );
}