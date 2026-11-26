
import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },

    navBar: {
        width: "95%",
        height: 65,
        backgroundColor: "#32CD32",
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
        paddingHorizontal: 6,
        zIndex: 1,
        alignSelf: "center",
        marginTop: 10,
        borderRadius: 25,
    },

    ImagemNav: {
        width: 50,
        height: 50,
        left: 5,
    },

    ondeTextoFicar: {
        position: "absolute",
        left: 0,
        right: 0,
        alignItems: "center",
        justifyContent: "center",
    },

    TextoNav: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
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

    cardPrincipalPre: {
        width: "95%",
        height: 240,
        backgroundColor: "#3CB371",
        borderRadius: 25,
        borderWidth: 2,
        alignItems: "center",
        paddingVertical: 15,
    },

    ondeTextoFIcarCardPrincipal: {
        alignItems: "center",
        justifyContent: "center",
    },

    textoCardPrincipal: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },

    subTextoCardPrincipal: {
        textAlign: "center",
    },

    fotoCardPrincipal: {
        width: "90%",
        height: 200,
        resizeMode: "contain",
        marginTop: -15,
    },

    container3: {
        flex: 1,
        width: "95%",
        alignSelf: "center",
    },

    cardAnimal: {
        width: "45%",
        margin: "2%",
        backgroundColor: "#32CD32",
        borderRadius: 15,
        padding: 10,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#228B22",
    },

    imagemAnimal: {
        width: "100%",
        height: 120,
    },

    nomeAnimal: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFFFE0",
        marginTop: 10,
        textAlign: "center",
    },


    fundoModal: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
        justifyContent: "center",
        alignItems: "center",
    },

    modalAnimal: {
        width: "88%",
        backgroundColor: "#F5FFF0",
        borderRadius: 25,
        padding: 20,
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#228B22",
    },

    botaoFechar: {
        alignSelf: "flex-end",
    },

    textoFechar: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#228B22",
    },

    tituloAnimal: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#228B22",
        marginBottom: 10,
    },

    fotoAnimalModal: {
        width: "90%",
        height: 180,
    },

    textoInformacao: {
        fontSize: 15,
        color: "#333333",
        textAlign: "center",
        marginTop: 10,
    },

    textoCuriosidade: {
        width: "100%",
        backgroundColor: "#E0F5D8",
        padding: 12,
        borderRadius: 15,
        marginTop: 15,
        fontSize: 15,
        color: "#225522",
        textAlign: "center",
    },


});
