import { ImageBackground, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    textoBotao: {
        fontSize: 25,

    },
    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#000000',
        height: 100,
        width: 120,
    },
    campos: {
        borderWidth: 2,
        width: 300,
        height: 40,
        paddingLeft: 10,
        fontSize: 22,
    },
    labelCampos:{
        fontSize: 27,
    },

});

export default styles;