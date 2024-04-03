import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import styles from "./styles";
import { useState, useEffect } from "react";
import { TextInput } from "react-native-web";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <View style={styles.header}>
          <View style={styles.area1}>
            <View style={styles.foto}>
              <Image
                source={require("../../../assets/img/pinguim/PVerde.png")}
                style={styles.photo}
              />
            </View>
            <View style={styles.id}>
              <View styles={styles.idPlace}></View>
            </View>
          </View>
          <View style={styles.area2}>
            <View style={styles.data}>
              <TextInput style={styles.input} placeholder="Nome" />
              <TextInput style={styles.input} placeholder="Email" />
            </View>
            <View style={styles.data}></View>
          </View>
        </View>
        <View style={styles.dados}></View>
        <View style={styles.cores}>
          <View style={styles.cor}>a</View>
          <View style={styles.cor}>a</View>
          <View style={styles.cor}>a</View>
          <View style={styles.cor}>a</View>
        </View>
      </View>
    </SafeAreaView>
  );
}
