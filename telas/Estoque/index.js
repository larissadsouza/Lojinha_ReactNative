import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';

export default function Estoque({ navigation }) {
    const [codigo, setCodigo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [precoUnitario, setPrecoUnitario] = useState('');

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.botao}
                onPress={() => { navigation.navigate('ComecePorAqui') }}>
                <Text style={styles.textoBotao}>Voltar</Text>
            </TouchableOpacity>

            <View>

                <Text style={styles.labelCampos}>Código</Text>
                <TextInput
                    keyboardType='numeric'
                    style={styles.campos}
                    onChangeText={(codigo) => setCodigo(codigo)}
                />

                <Text style={styles.labelCampos}>Descrição</Text>
                <TextInput
                    keyboardType='default'
                    style={styles.campos}
                    onChangeText={(descricao) => setDescricao(descricao)}
                />

                <Text style={styles.labelCampos}>Preço Unitário</Text>
                <TextInput
                    keyboardType='decimal-pad'
                    style={styles.campos}
                    onChangeText={(precoUnitario) => setPrecoUnitario(precoUnitario)}
                />


            </View>
        </View>
    );
}