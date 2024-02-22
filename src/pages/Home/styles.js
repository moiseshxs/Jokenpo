import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue'
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
        padding: 10,
        
    },
    areaBotaoConfig: {
        height: '100%',
        width: '100%',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: 'brown',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    areaMeio: {
        flex: 5,
    },

    areaFooter: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    areaBotaoJogar: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 100,
        width: '100%',
        backgroundColor: 'brown',
        borderWidth: 2,
    },
    fontJogar: {
        fontSize: 40,
        fontWeight: 'bold',
    },

    shadowAreaElementos: {
        shadowColor: '#333333',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 1.2,
        shadowRadius: 4,
    },
  });