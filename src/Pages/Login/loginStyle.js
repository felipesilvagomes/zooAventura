import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        backgroundColor: '#ffffff'
    },

    titulo: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: 30,
  },

  ImagemTitulo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 10,
  },

  TextoTitulo: {
    color: '#228B22',
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  SloganTitulo: {
    color: '#228B22',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 10,
  },

  container2: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#228B22',
        padding: 20,
    },

    titulo2: {
        alignItems: 'center',
        gap: 15,
        marginTop: 5,
    },

    TextoTitulo2: {
        color: '#228B22',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    subTitulo: {
        fontSize: 14,
        fontStyle: 'italic',
        textAlign: 'center',
    },

    campos: {
        marginTop: 30,
    },

    label: {
        fontSize: 14,
        color: '#228B22',
        fontWeight: 'bold',
        marginBottom: 6,
    },

    input: {
        height: 48,
        borderWidth: 1,
        borderColor: '#A5CFA5',
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 18,
        backgroundColor: '#F8FCF7',
    },

     botoes: {
        alignItems: 'center',
        gap: 22,
        marginTop: 10,
    },

    botaoEntrar: {
        width: '100%',
        height: 50,
        backgroundColor: '#228B22',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    },

    TextoBotaoEntrar: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },

    TextoCadastro: {
        color: '#228B22',
        fontSize: 14,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        textAlign: 'center',
    },
})