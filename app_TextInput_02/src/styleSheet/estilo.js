import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    fundo: {
        backgroundColor: 'white', flex: 1,
        padding: '20px'
    },
    cabecalho: {
        backgroundColor: 'lightgray',
        flexDirection: "column",
        alignItems: 'center',
        flex: 0.35,
    },
    cabTitulo: {
        fontSize: '25px', color:'darkred'
    },
    cabSubTitulo: {
        fontSize: '45px', fontWeight:'bold'
    },
    cabTexto: {
        fontsize: '25px', color:'blue'
    },
    conteudo: {
        flex: 0.45, backgroundColor:'white',
        marginTop: '10px'
    },
    paragrafo: {
        marginTop: '20px', padding: '10px',
        fontSize: '18px',
    },
    entradaTexto: {
        height: '45px', width: '60%', borderWidth: 1,
        borderColor: '#222', marginHorizontal: '10px',
        fontSize: '20px', padding: 'l6px'
    },
    saudacao: {
        textAlign: "center", paddingTop: '30%'
    }
});

export { estilos };