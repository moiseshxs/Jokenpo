import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, Image } from 'react-native';
import styles from './style';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.areaPlacar, styles.shadowAreaElementos]}>
        <View style={styles.areaEsqDir}>
          <View style={styles.areaFoto}>

          </View>
          <View style={styles.areaNumPlacar}>

          </View>
        </View>

        <View style={styles.areaMeio}>
          <Text style={styles.textPlacar}>X</Text>
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

            </View>
          </View>
        </View>
      </View>

      <View style={[styles.areaCartas, styles.shadowElementos]}>
        <View style={[styles.fundoElementos, styles.shadowElementos]}>
          <Image
            source={require('./assets/img/elementos/ice-removebg-preview.png')}
            style={styles.fotoElemento}
          />
        </View>
        <View style={[styles.fundoElementos, styles.shadowElementos]}>
          <Image
            source={require('./assets/img/elementos/agua.png')}
            style={styles.fotoElemento}
          />
        </View>
        <View style={[styles.fundoElementos, styles.shadowElementos]}>
          <Image
            source={require('./assets/img/elementos/fire.png')}
            style={styles.fotoElemento}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}