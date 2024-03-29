import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View, Image, TouchableOpacity, ImageBackground, ActivityIndicator } from "react-native";
import styles from "./styles";
import { useState, useEffect } from "react";

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <View style={styles.header}>
          <Text>Meu Pinguim</Text>
          <View style={styles.foto}>
            <Image
              source={require("../../../assets/img/pinguim/Club-Penguin.png")}
              style={styles.fotoP}
            />
            <Text style={styles.text}>Nome Pinguim</Text>
          </View>
          
          <View style={styles.level}>
            <Text >Nivel</Text>
            <View style={styles.box}>
                <View>

                </View>
                <View>

                </View>
            </View>
          </View>
        </View>
        <View style={styles.dados}>

        </View>
      </View>
    </SafeAreaView>
  )
}