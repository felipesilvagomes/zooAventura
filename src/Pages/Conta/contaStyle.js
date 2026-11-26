
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
        fontSize: 21,
        fontWeight: "bold",
    },

    perfil: {
        alignItems: "center",
        marginTop: 25,
        marginBottom: 25,
    },

    fotoPerfil: {
        width: 110,
        height: 110,
        backgroundColor: "#DDF2D8",
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3,
        borderColor: "#228B22",
    },

    emojiPerfil: {
        fontSize: 55,
    },

    nomeUsuario: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#225522",
        marginTop: 12,
    },

    subtituloPerfil: {
        fontSize: 14,
        color: "#777777",
        marginTop: 5,
    },

    card: {
        width: "90%",
        alignSelf: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 18,
        marginBottom: 18,
        borderWidth: 1,
        borderColor: "#D8EAD5",
        elevation: 3,
    },

    tituloCard: {
        fontSize: 19,
        fontWeight: "bold",
        color: "#228B22",
        marginBottom: 15,
    },

    linha: {
        borderBottomWidth: 1,
        borderBottomColor: "#EEEEEE",
        paddingVertical: 12,
    },

    label: {
        fontSize: 13,
        color: "#888888",
        marginBottom: 4,
    },

    valor: {
        fontSize: 16,
        color: "#333333",
        fontWeight: "500",
    },

    opcao: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#EEEEEE",
    },

    textoOpcao: {
        fontSize: 16,
        color: "#333333",
    },

    setaOpcao: {
        fontSize: 28,
        color: "#228B22",
    },

    botaoSair: {
        width: "90%",
        alignSelf: "center",
        backgroundColor: "#FFF0F0",
        borderWidth: 1,
        borderColor: "#D9534F",
        borderRadius: 15,
        padding: 15,
        alignItems: "center",
        marginTop: 5,
    },

    textoBotaoSair: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#D9534F",
    },

    rodape: {
        textAlign: "center",
        color: "#888888",
        fontSize: 13,
        marginTop: 25,
        lineHeight: 21,
    },

});
