import { View, Text, TouchableOpacity } from "react-native";

import styles from './styles';

export default function Compras({navigation}){
    return(
        <View style={styles.container}>
            <TouchableOpacity
            onPress={() => {navigation.navigate('ComecePorAqui')}}
            style={styles.botao}>
                <Text style={styles.textoBotao}>Voltar</Text>
            </TouchableOpacity>
        </View>

    );
}