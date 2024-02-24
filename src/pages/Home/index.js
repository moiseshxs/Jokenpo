import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ImageBackground, Modal } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


export default function App() {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const [isModalVisible1, setIsModalVisible1] = useState(false);  

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
            <TouchableOpacity onPress={() => setIsModalVisible1(true)}>
              <Entypo name="help" size={30} color="white" />
            </TouchableOpacity>
          </View>

          <Modal
          visible={isModalVisible1}
          onRequestClose={() => setIsModalVisible1(false)}
          animationType='slide'
          presentationStyle='overFullScreen'
          transparent='true'
          >
            <ImageBackground
              source={require("../../../assets/img/fundos/vila.jpg")}
              style={styles.fotoFundo}>

            <View style={styles.modal}>
              <View style={styles.caixaModal}>
                <View style={styles.areaBotaoFechar}>   
                  <View style={styles.flex}>
                    
                  </View>     
                  <View style={styles.flexCima}>
                    <Text style={styles.titleModal}>REGRAS</Text>
                  </View>  
                  <View style={styles.flex}>
                    <View style={[styles.areaBotaoConfig, styles.shadowAreaElementos]}>              
                      <TouchableOpacity onPress={() => setIsModalVisible1(false)}>
                        <FontAwesome name="close" size={30} color="white" />
                      </TouchableOpacity>
                    </View>
                  </View> 
                </View>

                <View style={styles.areaConfigModal}>
                    <View style={styles.areaRegra}>
                      <View style={styles.areaElemento}>
                        <Image
                          source={require("../../../assets/img/elementos/fogo.png")}
                          style={styles.fotoElemento}
                        />
                      </View>
                      <View style={styles.areaElementoMeio}><FontAwesome name="arrow-right" size={30} color="black" /></View>
                      <View style={styles.areaElemento}>
                        <Image
                          source={require("../../../assets/img/elementos/floco.png")}
                          style={styles.fotoElemento}
                        />
                      </View>
                    </View>
                    <View style={styles.areaRegra}>
                      <View style={styles.areaElemento}>
                        <Image
                          source={require("../../../assets/img/elementos/agua.png")}
                          style={styles.fotoElemento}
                        />
                      </View>
                      <View style={styles.areaElementoMeio}><FontAwesome name="arrow-right" size={30} color="black" /></View>
                      <View style={styles.areaElemento}>
                        <Image
                          source={require("../../../assets/img/elementos/fogo.png")}
                          style={styles.fotoElemento}
                        />
                      </View>
                    </View>
                    <View style={styles.areaRegra}>
                      <View style={styles.areaElemento}>
                        <Image
                          source={require("../../../assets/img/elementos/floco.png")}
                          style={styles.fotoElemento}
                        />
                      </View>
                      <View style={styles.areaElementoMeio}><FontAwesome name="arrow-right" size={30} color="black" /></View>
                      <View style={styles.areaElemento}>
                        <Image
                          source={require("../../../assets/img/elementos/agua.png")}
                          style={styles.fotoElemento}
                        />
                      </View>
                    </View>
                </View>

              </View>
            </View>
            </ImageBackground>
          </Modal>

        </View>
        <View style={styles.areaConfig}>
          <View style={[styles.areaBotaoConfig, styles.shadowAreaElementos]}>
            <TouchableOpacity onPress={() => setIsModalVisible(true)}>
              <Ionicons name="settings-sharp" size={30} color="white" />
            </TouchableOpacity>
          </View>

          <Modal
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
          animationType='slide'
          presentationStyle='overFullScreen'
          transparent='true'
          >
            <ImageBackground
              source={require("../../../assets/img/fundos/vila.jpg")}
              style={styles.fotoFundo}>

            
            <View style={styles.modal}>
              <View style={styles.caixaModal}>
                <View style={styles.areaBotaoFechar}>        
                  <View style={[styles.areaBotaoConfig, styles.shadowAreaElementos]}>              
                    <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                      <FontAwesome name="close" size={30} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.areaConfigModal}>

                </View>
              </View>
            </View>
            </ImageBackground>
          </Modal>

        </View>
      </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}