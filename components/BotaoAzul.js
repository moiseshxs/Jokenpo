import { View, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BotaoAzul({ icone, cor }) {
    return (
        <View style={[styles.areaBotaoConfig, styles.shadowAreaElementos]}>
                <Ionicons name={icone} size={30} color={cor} />
        </View>
    )
}

const styles = StyleSheet.create({
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
    
    shadowAreaElementos: {
        shadowColor: '#333333',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
    },
})
