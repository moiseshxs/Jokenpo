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
      height: '40%',
      width: '100%',
      objectFit: 'contain',
    },

    areaBotoes: {
      flex: 2,
      padding: 20,
    },

    areaBotao: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    fundoBotao: {
      width: "85%",
      height: 80,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center', 
      borderWidth: 4,
    },
    bordaBotao:{
      borderColor: '#B89042',
    },
    bordaBotao1:{
      borderColor: '#155B97',
    },
    textBotao: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
    },

  });