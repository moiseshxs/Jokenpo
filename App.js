import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, Image } from 'react-native';
import styles from './style';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-web';

export default function App() {
  const [jogador, setJogador] = useState(0)
  const [computador, setComputador] = useState(0)
  const [placarJ, setPlacarJ] = useState(0)
  const [placarC, setPlacarC] = useState(0)
  const [score, setScore] = useState(0)
  const [fogo, setFogo] = useState(0)
  const [agua, setAgua] = useState(0)
  const [gelo, setGelo] = useState(0)

  function jogar(valor) {
    setJogador(valor)
    let computador = Math.floor(Math.random()*3)+1
    setComputador(computador)

    if (valor==1){
      if (computador==2){
        setPlacarJ(placarJ+1)
        setGelo(gelo+1)
      }else if(computador==3){
        setPlacarC(placarC+1)
      }else{

      }
    }else if (valor==2){
      if (computador==1){
        setPlacarC(placarC+1)
      }else if (computador==3){
        setPlacarJ(placarJ+1)
        setAgua(agua+1)
      }else{

      }
    }else if (valor==3){
      if (computador==1){
        setPlacarJ(placarJ+1)
        setFogo(fogo+1)
      }else if (computador==2){
        setPlacarC(placarC+1)
      }else{

      }
    }

    if(gelo==1 && agua==1 && fogo==1){
      setScore(score+1)
      setAgua(0)
      setFogo(0)
      setGelo(0)
    }else if(gelo==3){
      setScore(score+1)
      setAgua(0)
      setFogo(0)
      setGelo(0)
    }else if(agua==3){
      setScore(score+1)
      setAgua(0)
      setFogo(0)
      setGelo(0)
    }else if(fogo==3){
      setScore(score+1)
      setAgua(0)
      setFogo(0)
      setGelo(0)
    }else{

    }
    
  }

  function exibirF(valor){
    if(valor==1){
      return (<Image
        source={require('./assets/img/elementos/ice-removebg-preview.png')}
        style={styles.fotoElemento}
      />)
    }else if (valor==2){
      return (<Image
        source={require('./assets/img/elementos/agua.png')}
        style={styles.fotoElemento}
      />)
    }else if(valor==3) {
      return (<Image
        source={require('./assets/img/elementos/fire.png')}
        style={styles.fotoElemento}
      />)
    }else {
      return null
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.areaPlacar, styles.shadowAreaElementos]}>
        <View style={styles.areaEsqDir}>
          <View style={styles.areaFoto}>
              
          </View>
          <View style={styles.areaNumPlacar}>
              fogo: {fogo}
              agua: {agua}
              gelo: {gelo}
          </View>
        </View>

        <View style={styles.areaMeio}>
          <Text style={styles.textPlacar}>{score}</Text>
        </View>

        <View style={styles.areaEsqDir}>
          <View style={styles.areaNumPlacar}>
              
          </View>
          <View style={styles.areaFoto}>
            <View>
              <Image
                  source={require('./assets/img/pinguim/sensei/sensei-luta.png')}
                  style={styles.fotoPerfil}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.areaArena}>
        <View style={styles.areaJogador}>
          <View style={styles.areaCarta}>
            <View style={[styles.fundoCarta, styles.shadowElementos]}>
              {exibirF(computador)}
            </View>
          </View>
          <View style={styles.areaPinguim}>

          </View>
        </View>
        <View style={styles.areaJogador}>
          <View style={styles.areaPinguim}>

          </View>
          <View style={styles.areaCarta}>
            <View style={[styles.fundoCarta, styles.shadowElementos]}>
              {exibirF(jogador)}
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.areaCartas, styles.shadowElementos]}>
        <TouchableOpacity onPress={() => jogar(1)}>
          <View style={[styles.fundoElementos, styles.shadowElementos]}>
            <Image
              source={require('./assets/img/elementos/ice-removebg-preview.png')}
              style={styles.fotoElemento}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => jogar(2)}>
          <View style={[styles.fundoElementos, styles.shadowElementos]}>
            <Image
              source={require('./assets/img/elementos/agua.png')}
              style={styles.fotoElemento}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => jogar(3)}>
          <View style={[styles.fundoElementos, styles.shadowElementos]}>
            <Image
              source={require('./assets/img/elementos/fire.png')}
              style={styles.fotoElemento}
            />
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}