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
        height: 180,
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
        alignItems: 'center',
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

    //MODAL
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
    areaElemento: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    areaElementoMeio: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fotoElemento: {
        height: '70%',
        width: '70%',
        objectFit: 'contain'
    },
  });