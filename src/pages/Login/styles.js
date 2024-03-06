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
      flex: 4,
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
      borderWidth: 3,
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


    areaHeader: {
      flex: 1,
      flexDirection: 'row',
      paddingHorizontal: 20,
  },
  areaAjuda: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
  },
  areaConfig: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
  },
  modal: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
},
caixaModal: {
    height: 400,
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#1da0ed',
    borderWidth: 2,
    borderColor: 'white',
},
areaBotaoFechar: {
    flex: 1,
    flexDirection: 'row',
},
areaConfigModal: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
},
areaRegra: {
    flex: 1,
    flexDirection: 'row',
},
titleModal: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
},
  });