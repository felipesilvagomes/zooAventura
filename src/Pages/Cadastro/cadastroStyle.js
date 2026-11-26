
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8FCF7',
  },

  scroll: {
    flex: 1,
    width: '100%',
  },

  conteudoScroll: {
    alignItems: 'center',
    paddingVertical: 25,
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
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#228B22',
    paddingBottom: 20,
  },

  titulo2: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 15,
    gap: 20,
    paddingHorizontal: 10,
  },

  TextoTitulo2: {
    color: '#228B22',
    fontSize: 20,
    fontWeight: 'bold',
  },

  subTitulo: {
    fontSize: 15,
    fontWeight: '900',
    fontStyle: 'italic',
    textAlign: 'center',
  },

  campos: {
    width: '85%',
    alignSelf: 'center',
    marginTop: 25,
  },

  label: {
    fontSize: 14,
    color: '#228B22',
    fontWeight: 'bold',
    marginBottom: 6,
  },

  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#A5CFA5',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: '#F8FCF7',
},

    butao: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        marginTop: 10,
        paddingHorizontal: 20,
},

    botaoVisitante: {
        width: '100%',
        height: 48,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#228B22',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
},

    TextoBotaoVisitante: {
        color: '#228B22',
        fontSize: 15,
        fontWeight: 'bold',
},

    botaoCadastrar: {
        width: '100%',
        height: 50,
        backgroundColor: '#228B22',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
},

    TextoBotaoCadastrar: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
},

    login:{
        marginTop: 20,
        alignSelf: 'center',
        justifyContent: 'center',
},

    Textologin:{
        fontSize: 20,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        color: '#228B22',
},
});
