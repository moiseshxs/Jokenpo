import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container:{
    flex:1,
  },

  background:{
    flex:1,
    backgroundColor:'#007AD7',
  },
  header: {
    flex:1,
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dados: {
    flex:1,
    backgroundColor: 'green'
  },
  foto: {
    flex: 1,
    backgroundColor: 'pink',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  level:{
    flex: 1,
    width:'100%',
    display: 'flex',
    alignItems: 'center'
  },
  fotoP: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    borderRadius: '50%',
    borderWidth: 3,
    borderColor: 'red',
    marginVertical: 10
  },
  text: {
    textTransform: 'uppercase',
    fontSize: 25
  },
  box: {
    width:'90%',
    height:'80%',
    backgroundColor: 'purple',
    borderRadius: 25
  }

})