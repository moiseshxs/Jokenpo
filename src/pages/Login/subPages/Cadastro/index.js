import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Modal,
  TextInput,
} from "react-native";
import React, { useState } from 'react';
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {

  const[cor, setCor] = useState('cinza')

  function escolherCinza(){
    setCor('cinza');
  }
  function escolherVerde(){
    setCor('verde');
  }
  function escolherVermelho(){
    setCor('vermelho');
  }

  function mostrarPenguin(){
    if (cor=='cinza'){
      return <Image
      source={require("../../../../../assets/img/pinguim/PCinza.png")}
      style={styles.fotoP}
    /> 
    }else if (cor == 'verde'){
      return <Image
      source={require("../../../../../assets/img/pinguim/PVerde.png")}
      style={styles.fotoP}
    />
    }else{
      return <Image
      source={require("../../../../../assets/img/pinguim/PVermelho.png")}
      style={styles.fotoP}
    />
    }
  }

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <View style={styles.cadastro}>
          <View style={styles.formulario1}>
            <View style={styles.areaFoto}>
              {mostrarPenguin()}
            </View>
            <View style={styles.areaOpcoes}>
              <TouchableOpacity style={styles.opcao} onPress={() => escolherCinza()}>
                <View style={{width:'100%', height:'100%', backgroundColor: 'grey', borderRadius: '100%'}}></View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.opcao} onPress={() => escolherVerde()}>
                <View style={{width:'100%', height:'100%', backgroundColor: 'green', borderRadius: '100%'}}></View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.opcao} onPress={() => escolherVermelho()}>
                <View style={{width:'100%', height:'100%', backgroundColor: 'red', borderRadius: '100%'}}></View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.formulario}>
            <View style={styles.label}>
              <View style={styles.number}>1.</View>
              <Text style={styles.labelInput}>Nome do seu penguim</Text>
            </View>
            <TextInput style={styles.input} placeholder="NOME DO PENGUIM" />
          </View>
          <View style={styles.formulario}>
            <View style={styles.label}>
              <View style={styles.number}>2.</View>
              <Text style={styles.labelInput}>O email dos seus pais</Text>
            </View>
            <TextInput style={styles.input} placeholder="EMAIL DOS SEUS PAIS" />
          </View>
          <View style={styles.formulario}>
            <View style={styles.label}>
              <View style={styles.number}>3.</View>
              <Text style={styles.labelInput}>Senha</Text>
            </View>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              placeholder="SENHA"
            />
          </View>
          <View style={styles.formulario}>
            <View style={styles.label}>
              <View style={styles.number}>4.</View>
              <Text style={styles.labelInput}>Confirmar senha</Text>
            </View>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              placeholder="CONFIRMAR SENHA"
            />
          </View>
          <View style={styles.formulario}>
            <LinearGradient
              colors={["#6ed000", "#5db200"]}
              style={styles.button}
            >
              <TouchableOpacity>CRIAR UM PENGUIM</TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
