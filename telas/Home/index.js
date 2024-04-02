import { TouchableOpacity, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.viewSuperior}></View>

            <View style={styles.viewCentral}>


                <Text style={styles.titulo}>Bazar</Text>
                <Text style={styles.texto}>Aqui você se livras das suas coisas encostadas e adquire as bugigangas de outras pessoas também. Clique no botão "Iniciar" abaixo e comece sua jornada do desapego!</Text>


                <View style={styles.viewBotoes}>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => { navigation.navigate('ComecePorAqui') }}>
                        <Text style={styles.textoBotao}>Iniciar!</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.viewInferior}></View>

            <StatusBar style="auto" />
        </View>


    );
}