import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Modal,
  TextInput,
} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {

  const [cor, setCor ] = useState(0);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <View styles={styles.areaTitle}>
          <Text style={styles.title}>Crie seu Penguim</Text>
        </View>

        <View style={styles.cadastro}>
          <View style={styles.formulario}>
            <Text style={styles.labelInput}>Escolha a cor do seu penguim</Text>
          </View>
          <View style={styles.formulario}>
            <View style={styles.label}>
              <View style={styles.number}>1.</View>
              <Text style={styles.labelInput}>Nome do seu penguim</Text>
            </View>
            <TextInput style={styles.input} placeholder="NOME DO PENGUIM" />
          </View>
          <View style={styles.formulario}>
            <View style={styles.label}>
              <View style={styles.number}>2.</View>
              <Text style={styles.labelInput}>O email dos seus pais</Text>
            </View>
            <TextInput style={styles.input} placeholder="EMAIL DOS SEUS PAIS" />
          </View>
          <View style={styles.formulario}>
            <View style={styles.label}>
              <View style={styles.number}>3.</View>
              <Text style={styles.labelInput}>Senha</Text>
            </View>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              placeholder="SENHA"
            />
          </View>
          <View style={styles.formulario}>
            <View style={styles.label}>
              <View style={styles.number}>4.</View>
              <Text style={styles.labelInput}>Confirmar senha</Text>
            </View>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              placeholder="CONFIRMAR SENHA"
            />
          </View>
          <View style={styles.formulario}>
            <LinearGradient
              colors={["#6ed000", "#5db200"]}
              style={styles.button}
            >
              <TouchableOpacity>CRIAR UM PENGUIM</TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
