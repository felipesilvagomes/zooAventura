
import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F8FCF7",
    },

    conteudo: {
        paddingBottom: 30,
    },

    navBar: {
        width: "95%",
        height: 65,
        backgroundColor: "#228B22",
        alignSelf: "center",
        marginTop: 10,
        borderRadius: 25,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
    },

    seta: {
        width: 45,
        height: 45,
    },

    tituloNav: {
        position: "absolute",
        left: 55,
        right: 55,
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "bold",
    },

    apresentacao: {
        alignItems: "center",
        marginTop: 25,
        marginBottom: 25,
    },

    logo: {
        width: 150,
        height: 130,
    },

    nomeApp: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#228B22",
        marginTop: 5,
    },

    slogan: {
        fontSize: 15,
        color: "#668866",
        marginTop: 5,
    },

    card: {
        width: "90%",
        alignSelf: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 20,
        marginBottom: 18,
        borderWidth: 1,
        borderColor: "#D8EAD5",
        elevation: 3,
    },

    tituloCard: {
        fontSize: 19,
        fontWeight: "bold",
        color: "#228B22",
        marginBottom: 12,
    },

    texto: {
        fontSize: 15,
        color: "#444444",
        lineHeight: 24,
        textAlign: "justify",
        marginBottom: 8,
    },

    item: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 13,
    },

    emoji: {
        fontSize: 23,
        marginRight: 12,
    },

    textoItem: {
        flex: 1,
        fontSize: 15,
        color: "#444444",
        lineHeight: 22,
    },

    cardMensagem: {
        width: "90%",
        alignSelf: "center",
        backgroundColor: "#DDF2D8",
        borderRadius: 20,
        padding: 22,
        alignItems: "center",
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#A8D5A2",
    },

    tituloMensagem: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#228B22",
        marginBottom: 12,
    },

    textoMensagem: {
        fontSize: 16,
        color: "#315C31",
        textAlign: "center",
        lineHeight: 25,
        fontWeight: "500",
    },

    rodape: {
        alignItems: "center",
        marginTop: 5,
    },

    nomeRodape: {
        fontSize: 19,
        fontWeight: "bold",
        color: "#228B22",
    },

    textoRodape: {
        fontSize: 13,
        color: "#777777",
        marginTop: 5,
    },

    versao: {
        fontSize: 12,
        color: "#AAAAAA",
        marginTop: 12,
    },

});
