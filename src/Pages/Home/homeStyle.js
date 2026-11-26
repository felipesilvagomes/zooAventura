
import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },

    navBar: {
        width: "100%",
        height: 65,
        backgroundColor: "#008000",
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
        paddingHorizontal: 6,
        zIndex: 1,
    },

    scroll: {
        flex: 1,
        width: "100%",
    },

    conteudoScroll: {
        alignItems: "center",
        paddingTop: 25,
        paddingBottom: 30,
    },

    ondeTextoFicarNavbar: {
        justifyContent: "center",
    },

    textoNavbar: {
        fontSize: 19,
        color: "#FFFFFF",
        fontWeight: "bold",
    },

    subTextoNavBar: {
        fontSize: 15,
        color: "#FFFFFF",
        textDecorationLine: "underline",
    },

    foto: {},

    ImagemNav: {
        width: 50,
        height: 50,
    },

    configsNavbar: {
        marginLeft: "auto",
    },

    engrenagemNav: {
        width: 35,
        height: 35,
    },

    Titulo: {
        width: "95%",
        marginBottom: 20,
    },

    TextoTitulo: {
        fontSize: 22,
        color: "#008000",
        fontWeight: "bold",
    },

    SubTextoTitulo: {
        fontSize: 15,
        color: "#555555",
        marginTop: 3,
    },

    container2: {
        width: "95%",
        alignSelf: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        rowGap: 15,
        paddingVertical: 10,
    },

    cardTerritorio: {
        width: "46%",
        height: 150,
        borderWidth: 1.5,
        borderColor: "#008000",
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#E8F5E9",
    },

    fotoCard: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
    },

    faixaTexto: {
        backgroundColor: "rgba(0, 70, 0, 0.85)",
        paddingVertical: 10,
        paddingHorizontal: 5,
        minHeight: 48,
        justifyContent: "center",
    },

    faixaTextoOni: {
        backgroundColor: "rgba(163, 126, 70, 0.85)",
        paddingVertical: 10,
        paddingHorizontal: 5,
        minHeight: 48,
        justifyContent: "center",
    },

    faixaTextoCar: {
        backgroundColor: "rgba(233, 145, 13, 0.85)",
        paddingVertical: 10,
        paddingHorizontal: 5,
        minHeight: 48,
        justifyContent: "center",
    },

    faixaTextoPre: {
        backgroundColor: "rgba(69, 148, 23, 0.85)",
        paddingVertical: 10,
        paddingHorizontal: 5,
        minHeight: 48,
        justifyContent: "center",
    },

    faixaTextoPreda: {
        backgroundColor: "rgba(202, 97, 97, 0.85)",
        paddingVertical: 10,
        paddingHorizontal: 5,
        minHeight: 48,
        justifyContent: "center",
    },

    faixaTextoPo: {
        backgroundColor: "rgba(241, 82, 9, 0.85)",
        paddingVertical: 10,
        paddingHorizontal: 5,
        minHeight: 48,
        justifyContent: "center",
    },

    textoCard: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: 19,
    },


    fundoModal: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
        justifyContent: "center",
        alignItems: "center",
    },

    modalConfiguracoes: {
        width: "85%",
        backgroundColor: "#F8FCF7",
        borderRadius: 25,
        padding: 20,
        borderWidth: 2,
        borderColor: "#228B22",
    },

    tituloModal: {
        fontSize: 23,
        fontWeight: "bold",
        color: "#228B22",
        textAlign: "center",
        marginBottom: 25,
    },

    botaoFechar: {
        position: "absolute",
        right: 15,
        top: 12,
        padding: 5,
    },

    textoFechar: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#228B22",
    },

    opcaoModal: {
        backgroundColor: "#E5F5E5",
        padding: 15,
        borderRadius: 15,
        marginBottom: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    opcaoModalSair:{
        backgroundColor: "#FF0000",
        padding: 15,
        borderRadius: 15,
        marginBottom: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    textoOpcaoSair:{
        fontSize: 16,
        fontWeight: "bold",
        color: "#ffff",
    },

    textoOpcao: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#225522",
    },

    textoEstado: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#228B22",
    },


});
