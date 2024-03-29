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
import asyncStorage from '@react-native-async-storage/async-storage';
import axios, { Axios } from 'axios'

export default function App() {
  const[cor, setCor] = useState('cinza');
  const[username, setUsername] = useState('');
  const[email, setEmail] = useState('');
  const[senha, setSenha] = useState(''); 
  const [validacao, setValidacao] = useState("");
  const[confirmSenha, setConfirmSenha] = useState('');

  const vazio = [cor, username, email, senha, confirmSenha];


  const verificar = ()  => {
    if(verificarCampos()){
    if (senha === confirmSenha) {
        salvar();
        setValidacao("")
      }else {
        setValidacao("")
        setValidacao("As senhas não correspondem");
      }   
    } else {
      setValidacao("Preencha todos os campos");
    }
  }

  const verificarCampos = () => {
    let todosCamposPreenchidos = true;
    for (let i = 0; i < vazio.length; i++) {
      if (!vazio[i]) {
        todosCamposPreenchidos = false;
        break;
      }
    }
    return todosCamposPreenchidos;
  }


  const salvar = async() => {
    
    const dadosUser = {
      'username' : username,
      'email' : email,
      'cor' : cor,
      'senha' : senha,
    };
    
    
  //   var dados = JSON.stringify(dadosUser)
    
    
  //   asyncStorage.setItem('user', dados )
  // .then(() =>{
  //   console.log('Dados armazenados com sucesso!')
  // })
  // .catch (error => {
  //   console.log('erro', error)
  // })
  
  const axiosConfig = {
    headers: {
      /*         'Accept': 'application/json',
       */ "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  try {
    const response = await axios.post(
      "http://localhost:9000/api/clienteStore",
      dadosUser,
      axiosConfig
    );
    console.log(response.data);
  } catch (error) {
    console.error("Erro ao criar pinguim", error);
    return false;
  }
};

  function escolherCorPenguim(cor){
    setCor(cor);
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
              <TouchableOpacity style={styles.opcao} onPress={() => escolherCorPenguim('cinza')}>
                <View style={{width:'100%', height:'100%', backgroundColor: 'grey', borderRadius: '100%'}}></View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.opcao} onPress={() => escolherCorPenguim('verde')}>
                <View style={{width:'100%', height:'100%', backgroundColor: 'green', borderRadius: '100%'}}></View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.opcao} onPress={() => escolherCorPenguim('vermelho')}>
                <View style={{width:'100%', height:'100%', backgroundColor: 'red', borderRadius: '100%'}}></View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.formulario}>
            <View style={styles.label}>
              <View style={styles.number}>1.</View>
              <Text style={styles.labelInput}>Nome do seu penguim</Text>
            </View>
            <TextInput style={styles.input} onChangeText={setUsername} value={username} placeholder="NOME DO PENGUIM" />
          </View>
          <View style={styles.formulario}>
            <View style={styles.label}>
              <View style={styles.number}>2.</View>
              <Text style={styles.labelInput}>O email dos seus pais</Text>
            </View>
            <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="EMAIL DOS SEUS PAIS" />
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
              onChangeText={setSenha} value={senha}
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
              onChangeText={setConfirmSenha} value={confirmSenha}
              placeholder="CONFIRMAR SENHA"
            />
          </View>
          <Text>{validacao}</Text>
          <View style={styles.formulario}>
            <LinearGradient
              colors={["#6ed000", "#5db200"]}
              style={styles.button}
            >
              <TouchableOpacity onPress={() => {verificar()}}>CRIAR UM PENGUIM</TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
