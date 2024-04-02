import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewInferior: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 100, // Altura da View no final da tela
        backgroundColor: 'blue', // Cor de fundo da View
        justifyContent: 'center', // Ajuste o conteúdo verticalmente no centro
        alignItems: 'center', // Ajuste o conteúdo horizontalmente no centro
    },
    viewCentral: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewSuperior:{

    },
    menuInferior: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        borderWidth: 2,
        borderColor: '#000000',
    },
    botaoMenuInferior:{
        height: 100,
        width: 110,
        borderWidth: 1,
    },
    textoBotaoMenuInferior:{

    },
    botaoVoltar: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000000',
        height: 80,
        width: 100,
    },
    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000000',
        height: 110,
        width: '50%',
    },
    viewBotoes: {
        flexDirection: 'row',
    },
    titulo: {
        fontSize: 40,

    },
    textoBotao: {
        fontSize: 25,

    },
    viewTextos:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewTexto:{
        height: 90,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;