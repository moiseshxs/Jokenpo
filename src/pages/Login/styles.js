import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
    },
    fotoFundo: {
      height: '100%',
      width: '100%',
    },

    areaLogo: {
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center',
    },
    fotoLogo: {
      height: '70%',
      width: '70%',
      objectFit: 'contain',
    },

    areaBotoes: {
      flex: 4,
      backgroundColor: '#0D81CC',
      borderWidth: 5,
      borderColor: '#0159B3',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      padding: 20,
    },

    areaBotao: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    fundoBotao: {
      width: '90%',
      height: '50%',
      backgroundColor: '#0051B4',
      borderRadius: 30,
      borderWidth: 5,
      borderColor: '#0159B3',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textBotao: {
      color: 'white',
      fontSize: 35,
    },
  });