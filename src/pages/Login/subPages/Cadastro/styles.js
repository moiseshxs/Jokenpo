import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
    },
    background: {
      flex: 1, 
      backgroundColor: '#007AD7',
      alignItems: 'center'
    },
    areaTitle: {
      flex: 1,
    },
    title: {
      flex: 1,
      fontSize: 40,
      color: 'white',
      fontWeight: 'bold',
    },
    label: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    labelInput: {
      marginStart:10,
      color: 'white',
      fontSize: 30,
      fontWeight: '600',
      alignSelf: 'flex-start',
      marginBottom: 10
    },
    cadastro: {
      flex: 1,
      alignItems: 'center'
    },
    input: {
      width: '100%',
      color: '#0655BD',
      backgroundColor: 'white',
      height: 50,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: 'black',
      paddingHorizontal: 10,
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 17
    },
    formulario: {
      flex:1,
      width: '100%',
      paddingHorizontal: 10
    },
    formulario1: {
      flex:2,
      width: '100%',
      paddingHorizontal: 10
    },
    number: {
      backgroundColor: '#0068B7',
      color: 'white',
      fontSize: 20,
      borderRadius: '50%',
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Verdana',
      fontWeight: 'bold'
    }, 
    button: {
      marginTop: 10,
      fontFamily: 'Verdana',
      fontWeight: 'bold',
      color: 'white',
      width: '100%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    areaFoto: {
      width:'100%',
      height:'80%',
      display: 'flex',
      justifyContent: 'flex-start'
    },
    areaOpcoes: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-around'
    },
    opcao: {
      width: 40,
      height: 40,
    },
    fotoP: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    }
  });