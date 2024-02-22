import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
    },

    //PLACAR
    areaPlacar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'brown',
    },
    areaEsqDir: {
        flex: 5,
        flexDirection: 'row',
    },
    areaFoto: {
        flex: 1,
        alignItems: 'center',
    },
    fotoPerfil: {
        height: '100%',
        width: 140,
    },
    areaNumPlacar:{
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'pink'
    },

    areaMeio: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textPlacar: {
        fontSize: 40,
        fontWeight: 'bold',
    },

    //ARENA
    areaArena: {
        flex: 4,
    },
    areaJogador: {
        flex: 1,
        flexDirection: 'row',
    },
    areaPinguim: {
        flex: 1,
    },
    areaCarta: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fundoCarta: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 125,
        width: 125,
        borderWidth: 10,
        borderRadius: 5,
        backgroundColor: 'white',
    },

    //CARTAS
    areaCartas: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'brown',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopWidth: 10,
        borderColor: 'black',
        justifyContent:'space-between'
    },
    fundoElementos: {
        flex: 1,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: 'black',

        justifyContent: 'center',
        alignItems: 'center',
    },
    fotoElemento: {
        height: 90,
        width: 90,
    },
    fotoElemento2: {
        height:30,
        width:30
    },

    shadowElementos: {
        shadowColor: '#333333',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 2.2,
        shadowRadius: 4,
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