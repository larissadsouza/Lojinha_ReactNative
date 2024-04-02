import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    viewSuperior:{
        backgroundColor: '#db74ad',
        width: '100%',
        height: 100,

    },
    viewInferior:{
        backgroundColor: '#db74ad',
        width: '100%',
        height: 20,
        position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100, // Altura da View no final da tela
    backgroundColor: 'blue', // Cor de fundo da View
    justifyContent: 'center', // Ajuste o conteúdo verticalmente no centro
    alignItems: 'center', // Ajuste o conteúdo horizontalmente no centro
    },
    viewCentral:{
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        alignContent: 'center',
        marginTop: 80,
    },
    menuInferior: {
        alignItems: 'baseline',
        justifyContent: 'flex-end',
        borderWidth: 2,
        borderColor: '#000000',
    },
    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width:120,
        backgroundColor: '#4287f5',
        borderRadius: 60
    },
    viewBotoes:{
            flexDirection: 'row',
    },
    titulo:{
        fontSize: 40,

    },
    textoBotao:{
        fontSize: 25,

    },
    botaoMenuInferior:{
        width: 50,
        height: 20, 
    },
    textoBotaoMenuInferior:{

    },
    texto:{
        fontSize: 25,
        marginVertical: 30,
        textAlign: 'justify'
    }
});

export default styles;