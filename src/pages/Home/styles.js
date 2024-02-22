import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
    },

    areaHeader: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'red',
    },
    areaUsuario: {
        flex: 3,
        backgroundColor: 'red',
    },
    areaConfig: {
        flex: 1,
        backgroundColor: 'pink',
    },
    
    areaMeio: {
        flex: 5,
        backgroundColor: 'blue',
    },

    areaFooter: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'green',
    },
    areaBotaoJogar: {
        height: '100%',
        width: '100%',
        backgroundColor: 'purple',
    },

    shadowAreaElementos: {
        shadowColor: '#333333',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 2.0,
        shadowRadius: 4,
    },
  });