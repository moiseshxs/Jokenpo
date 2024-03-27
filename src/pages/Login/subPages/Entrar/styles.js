import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#007AD7'
    },
    area1: {
      flex:1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    area: {
      flex:2,
      display: 'flex',
      justifyContent:'center',
      alignItems: 'center'
    },
    login: {
      width:'90%',
      height:'90%',
      backgroundColor: '#0d489c',
      borderRadius: 20,
      paddingVertical: 40,
      paddingHorizontal: 20,
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      shadowColor: '#333333',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.7,
        shadowRadius: 20,
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
    button: {
      fontFamily: 'Verdana',
      fontWeight: 'bold',
      color: 'white',
      width: '100%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    foto: {
      width: '100%',
      height: '100%'
    },
    foto1:{
      width: '80%',
      height: '100%',
     resizeMode: 'contain',
    }
  });