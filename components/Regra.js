import { View, Image, StyleSheet} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Regra({ foto, foto2 }) {
    return (
        <View style={styles.areaRegra}>
            <View style={styles.areaElemento}>
                <Image
                    source={foto}
                    style={styles.fotoElemento}
                />
            </View>
            <View style={styles.areaElementoMeio}><FontAwesome name="arrow-right" size={30} color="black" /></View>
            <View style={styles.areaElemento}>
                <Image
                    source={foto2}
                    style={styles.fotoElemento}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    areaRegra: {
        flex: 1,
        flexDirection: 'row',
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
})
