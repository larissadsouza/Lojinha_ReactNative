import { TouchableOpacity, View, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles';
import returnIcon from "../../assets/returnIcon.png";
import hotSales from "../../assets/hot_sales.png";
import cart_cat_icon from "../../assets/cart_cat_icon.png";
import empty_shopping_cart from "../../assets/empty_shopping cart.png";



export default function ComecePorAqui({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.viewSuperior}>

            </View>

            <View style={styles.viewCentral}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Home') }}
                    style={styles.botaoVoltar}>
                    <Image
                        onPress={() => { navigation.navigate('Home') }}
                        style={styles.botaoVoltar}
                        source={returnIcon}></Image>
                </TouchableOpacity>

                <Text style={styles.titulo}>Desapega</Text>

                <Text></Text>



                <View style={styles.viewTextos}>

                <View style={styles.viewTexto}>
                    <Text numberOfLines={2} style={styles.textoBotao}>Área do Anunciante</Text>
                </View>

                <View style={styles.viewTexto}>
                    <Text numberOfLines={2} style={styles.textoBotao}>Área do Comprador</Text>
                </View>

                </View>

                <View style={styles.viewBotoes}>

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => { navigation.navigate('Estoque') }}>
                        <Image source={hotSales}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => { navigation.navigate('Compras') }}>
                            <Image source={cart_cat_icon}></Image>
                    </TouchableOpacity>
                </View>


            </View>
            <View style={styles.viewInferior}>

                <View style={styles.menuInferior}>
                    <TouchableOpacity
                        style={styles.botaoMenuInferior}
                        onPress={() => { navigation.navigate('ComecePorAqui') }}>
                        <Text style={styles.textoBotaoMenuInferior}>Iniciar!</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <StatusBar style="auto" />
        </View>
    );
}