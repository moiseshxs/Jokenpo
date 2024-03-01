import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, Image, TouchableOpacity, Modal, ImageBackground } from 'react-native';
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
          source={require("../../../assets/img/icon/Disney_Club_Penguin_Logo.svg.png")}
          style={styles.fotoLogo}
        />
      </View>
      <View style={styles.areaBotoes}>
        <View style={styles.areaBotao}>       
        
          <View style={styles.fundoBotao}>
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
              <Text style={styles.textBotao}>Crie seu Pinguim</Text>
            </TouchableOpacity>
          </View>
          
        </View>
        <View style={styles.areaBotao}>
          <View style={styles.fundoBotao}>
            <TouchableOpacity onPress={() => navigation.navigate('Entrar')}>
              <Text style={styles.textBotao}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
      </ImageBackground>
    </SafeAreaView>
  );
}