import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
    },
    fotoFundo: {
        height: '100%',
        width: '100%',
        alignSelf: 'flex-start',
    },
    //HEADER
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
    areaBotaoConfig: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        backgroundColor: '#1da0ed',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    //LOGO
    areaLogo: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fotoLogo: {
        height: 130,
        width: '100%',
        objectFit: 'contain',
    },

    areaFooter: {
        flex: 4,
        justifyContent: 'center', 
        paddingHorizontal: 20,
    },
    flex: {
        flex: 1,
        justifyContent: 'center',
    },
    flexCima: {
        flex: 2,
        justifyContent: 'center',
    },
    areaBotaoJogar: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 20,
        height: 70,
        width: '80%',
        backgroundColor: '#ffdd51',
        borderWidth: 0,
        borderColor: 'white',
    },
    fontJogar: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#6b4f25',
    },

    shadowAreaElementos: {
        shadowColor: '#333333',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.6,
        shadowRadius: 4,
    },
  });