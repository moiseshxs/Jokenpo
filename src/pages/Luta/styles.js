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
    //PLACAR
    areaPlacar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f2ebdb',
        borderBottomWidth: 10,
        borderColor: '#9f795c',
    },
    areaEsqDir: {
        flex: 5,
        flexDirection: 'row',
        
    },
    areaFoto: {
        flex: 2,
        alignItems: 'center',
    },
    fotoPerfil: {
        height: '100%',
        width: 200,
    },
    areaNumPlacar:{
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
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
        flex: 5,
    },
    areaJogador: {
        flex: 1,
        flexDirection: 'row',
    },
    areaPinguim: {
        flex: 1,
    },
    areaFotoPingo: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    fotoPinguim: {
        height: '100%',
        width: '100%'
    },
    areaCartasGanha: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    areaAcumulada: {
        height: 50,
        width: 50,
        borderWidth: 4,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
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
        borderWidth: 8,
        borderRadius: 5,
        borderColor: '#9f795c',
        backgroundColor: '#f2ebdb',
    },

    //CARTAS
    areaCartas: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f2ebdb',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopWidth: 10,
        borderColor: '#9f795c',
        justifyContent:'space-between'
    },
    fundoElementos: {
        width: 99,
        height: 99,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: '#9f795c',

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
        shadowOpacity: 0.7,
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