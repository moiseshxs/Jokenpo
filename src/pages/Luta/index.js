import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View, Image } from "react-native";
import styles from "./styles";
import { useState } from "react";
import { TouchableOpacity } from "react-native-web";

export default function App() {
  const [jogador, setJogador] = useState(0);
  const [computador, setComputador] = useState(0);
  const [placarJ, setPlacarJ] = useState(0);
  const [placarC, setPlacarC] = useState(0);
  const [score, setScore] = useState(0);
  const [fogo1, setFogo1] = useState(0);
  const [agua1, setAgua1] = useState(0);
  const [gelo1, setGelo1] = useState(0);
  const [fogo2, setFogo2] = useState(0);
  const [agua2, setAgua2] = useState(0);
  const [gelo2, setGelo2] = useState(0);

  function jogar(valor) {
    setJogador(valor);
    let computador = Math.floor(Math.random()*3)+1
    setComputador(computador);

    if (valor == 1) {
      if (computador == 2) {
        setPlacarJ(placarJ + 1);
        setGelo1(gelo1 + 1);
      } else if (computador == 3) {
        setPlacarC(placarC + 1);
        setFogo2(fogo2 + 1);
      } else {
      }
    } else if (valor == 2) {
      if (computador == 1) {
        setPlacarC(placarC + 1);
        setGelo2(gelo2 + 1);
      } else if (computador == 3) {
        setPlacarJ(placarJ + 1);
        setAgua1(agua1 + 1);
      } else {
      }
    } else if (valor == 3) {
      if (computador == 1) {
        setPlacarJ(placarJ + 1);
        setFogo1(fogo1 + 1);
      } else if (computador == 2) {
        setPlacarC(placarC + 1);
        setAgua2(agua2 + 1);
      } else {
      }
    }

    if (gelo1 == 1 && agua1 == 1 && fogo1 == 1) {
      setScore(score + 1);
      setAgua1(0);
      setFogo1(0);
      setGelo1(0);
      setAgua2(0);
      setFogo2(0);
      setGelo2(0);
    } else if (gelo1 == 3) {
      setScore(score + 1);
      setAgua1(0);
      setFogo1(0);
      setGelo1(0);
      setAgua2(0);
      setFogo2(0);
      setGelo2(0);
    } else if (agua1 == 3) {
      setScore(score + 1);
      setAgua1(0);
      setFogo1(0);
      setGelo1(0);
      setAgua2(0);
      setFogo2(0);
      setGelo2(0);
    } else if (fogo1 == 3) {
      setScore(score + 1);
      setAgua1(0);
      setFogo1(0);
      setGelo1(0);
      setAgua2(0);
      setFogo2(0);
      setGelo2(0);
    } else {
    }

    if (gelo2 == 1 && agua2 == 1 && fogo2 == 1) {
      setScore(0);
      setAgua1(0);
      setFogo1(0);
      setGelo1(0);
      setAgua2(0);
      setFogo2(0);
      setGelo2(0);
    } else if (gelo2 == 3) {
      setScore(0);
      setAgua1(0);
      setFogo1(0);
      setGelo1(0);
      setAgua2(0);
      setFogo2(0);
      setGelo2(0);
    } else if (agua2 == 3) {
      setScore(0);
      setAgua1(0);
      setFogo1(0);
      setGelo1(0);
      setAgua2(0);
      setFogo2(0);
      setGelo2(0);
    } else if (fogo2 == 3) {
      setScore(0);
      setAgua1(0);
      setFogo1(0);
      setGelo1(0);
      setAgua2(0);
      setFogo2(0);
      setGelo2(0);
    } else {
    }
  }

  function exibirF(valor) {
    if (valor == 1) {
      return (
        <Image
          source={require("../../../assets/img/elementos/ice.png")}
          style={styles.fotoElemento}
        />
      );
    } else if (valor == 2) {
      return (
        <Image
          source={require("../../../assets/img/elementos/water.png")}
          style={styles.fotoElemento}
        />
      );
    } else if (valor == 3) {
      return (
        <Image
          source={require("../../../assets/img/elementos/fire.png")}
          style={styles.fotoElemento}
        />
      );
    } else {
      return null;
    }
  }

  function MostrarIcon(valor) {
    let posicao = 0;
    let imagens = [];
  
    for (let i = 0; i < valor; i++) {
      imagens.push(
        <Image
          key={i}
          source={require("../../../assets/img/elementos/floco.png")}
          style={{ height: 40, width: 40, position: 'absolute', top: posicao }}
        />
      );
      posicao += 5;
    }
  
    return imagens;
  }
  function MostrarIconA(valor) {
    let posicao = 0;
    let imagens = [];
  
    for (let i = 0; i < valor; i++) {
      imagens.push(
        <Image
          key={i}
          source={require("../../../assets/img/elementos/agua.png")}
          style={{ height: 40, width: 40, position: 'absolute', top: posicao,}}
        />
      );
      posicao += 5;
    }
  
    return imagens;
  }
  function MostrarIconF(valor) {
    let posicao = 0;
    let imagens = [];
  
    for (let i = 0; i < valor; i++) {
      imagens.push(
        <Image
          key={i}
          source={require("../../../assets/img/elementos/fogo.png")}
          style={{ height: 40, width: 40, position: 'absolute', top: posicao,}}
        />
      );
      posicao += 5;
    }
  
    return imagens;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.areaPlacar, styles.shadowAreaElementos]}>
        <View style={styles.areaEsqDir}>
        <View style={styles.areaFoto}>
              <Image
                  source={require('../../../assets/img/pinguim/sensei/sensei-luta.png')}
                  style={styles.fotoPerfil}
              />
          </View>
          <View style={styles.areaNumPlacar}>
            <Text style={styles.textPlacar}>{score}</Text>
          </View>
        </View>

        <View style={styles.areaMeio}>
          <Text style={styles.textPlacar}>X</Text>
        </View>

        <View style={styles.areaEsqDir}>
          <View style={styles.areaNumPlacar}>
            <Text style={styles.textPlacar}>{score}</Text>
          </View>
          <View style={styles.areaFoto}>
              <Image
                  source={require('../../../assets/img/pinguim/ninja/ninja-luta1.png')}
                  style={styles.fotoPerfil}
              />
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
            <View style={styles.areaCartasGanha}>
              <View style={[styles.areaAcumulada, styles.shadowElementos, {backgroundColor: '#e13c26',}]}>
                {MostrarIconA(agua2)}
              </View>
              <View style={[styles.areaAcumulada, styles.shadowElementos, {backgroundColor: '#a399cc',}]}>
                {MostrarIcon(gelo2)}
              </View>
              <View style={[styles.areaAcumulada, styles.shadowElementos, {backgroundColor: '#14489f',}]}>
                {MostrarIconF(fogo2)}
              </View>
            </View>
            <View style={styles.areaFotoPingo}>
              <Image
                  source={require('../../../assets/img/pinguim/ninja/ninja-luta2.png')}
                  style={styles.fotoPinguim}
              />
            </View>
            
          </View>
        </View>

        <View style={styles.areaJogador}>
          <View style={styles.areaPinguim}>
            <View style={styles.areaFotoPingo}>
              <Image
                  source={require('../../../assets/img/pinguim/sensei/decosta2.png')}
                  style={styles.fotoPinguim}
              />
            </View>
            <View style={styles.areaCartasGanha}>
              <View style={[styles.areaAcumulada, styles.shadowElementos, {backgroundColor: '#f2e429',}]}>
                {MostrarIconA(agua1)}
              </View>
              <View style={[styles.areaAcumulada, styles.shadowElementos, {backgroundColor: '#0d489c',}]}>
                {MostrarIcon(gelo1)}
              </View>
              <View style={[styles.areaAcumulada, styles.shadowElementos, {backgroundColor: '#5ebc44',}]}>
                {MostrarIconF(fogo1)}
              </View>
            </View>
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
              source={require("../../../assets/img/elementos/ice.png")}
              style={styles.fotoElemento}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => jogar(2)}>
          <View style={[styles.fundoElementos, styles.shadowElementos]}>
            <Image
              source={require("../../../assets/img/elementos/water.webp")}
              style={styles.fotoElemento}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => jogar(3)}>
          <View style={[styles.fundoElementos, styles.shadowElementos]}>
            <Image
              source={require("../../../assets/img/elementos/fire.png")}
              style={styles.fotoElemento}
            />
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
