import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: "#007AD7",
  },
  header: {
    flex: 2,
    backgroundColor: "red",
    flexDirection: "row",
  },
  area1: {
    flex: 2,
    borderWidth: 3,
    borderColor: "white",
  },
  foto:{
    flex: 3,
    borderWidth: 3,
    borderColor: "white",
    padding: 10
  },
  photo:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: 'blue'
  },
  id:{
    flex: 1,
  },
  idPlace:{
    flex: 1,
    backgroundColor: 'purple'
  },
  area2: {
    flex: 3,
    padding: 20
  },
  data:{
    flex: 1
  },
  input: {
    flex: 0.5,
    width: "100%",
    color: "#0655BD",
    backgroundColor: "white",
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    paddingHorizontal: 10,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 17,
    marginBottom: 5
  },
  dados: {
    flex: 3,
    backgroundColor: "green",
  },
  cores: {
    flex: 1,
    backgroundColor: "blue",
    flexDirection: 'row',
  },
  cor:{
    flex: 1,
    borderWidth: 2,
    borderColor: 'red',
    padding: 10,
  },
});
