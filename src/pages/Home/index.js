import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ImageBackground, Modal } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import BotaoAzul from '../../../components/BotaoAzul';
import Regra from '../../../components/Regra';

import Fogo from '../../../assets/img/elementos/fogo.png';
import Floco from '../../../assets/img/elementos/floco.png';
import Agua from '../../../assets/img/elementos/agua.png';


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
        <TouchableOpacity onPress={() => navigation.navigate('LoadingLuta')}>
          <View style={[styles.areaBotaoJogar, styles.shadowAreaElementos]}>
            <Text style={styles.fontJogar}>Jogar Agora!</Text>
          </View>
        </TouchableOpacity>
        </View>
        <View style={styles.flex}>
        </View>
      </View>

      <View style={styles.areaHeader}>
        <View style={styles.areaAjuda}>
            <TouchableOpacity onPress={() => setIsModalVisible1(true)}>
              <BotaoAzul icone='help-sharp' cor='white'/>
            </TouchableOpacity>
         
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
                      <TouchableOpacity onPress={() => setIsModalVisible1(false)}>
                        <BotaoAzul icone='close-sharp' cor='white'/>
                      </TouchableOpacity>
                  </View> 
                </View>

                <View style={styles.areaConfigModal}>
                  <Regra foto={Fogo} foto2={Floco}/>
                  <Regra foto={Agua} foto2={Fogo}/>
                  <Regra foto={Floco} foto2={Agua}/>
                </View>

              </View>
            </View>
            </ImageBackground>
          </Modal>

        </View>
        <View style={styles.areaConfig}>
            <TouchableOpacity onPress={() => setIsModalVisible(true)}>
            <BotaoAzul icone='settings-sharp' cor='white'/>
            </TouchableOpacity>
  

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
                  <View style={styles.flex}>
                    
                  </View>     
                  <View style={styles.flexCima}>
                    <Text style={styles.titleModal}></Text>
                  </View>  
                  <View style={styles.flex}>  
                      <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                        <BotaoAzul icone='close-sharp' cor='white'/>
                      </TouchableOpacity>
                  </View> 
                </View>

                <View style={styles.areaConfigModal}>
                <Image
                  source={require("../../../assets/img/pinguim/sensei/senseifundo.gif")}
                  style={styles.fotoLogo}
                />
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