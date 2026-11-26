import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, ScrollView, Pressable } from 'react-native';
import styles from './loginStyle';

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.titulo}>
                <Image
                    style={styles.ImagemTitulo}
                    source={require('../../../assets/leao.png')}
                />
                <View>
                    <Text style={styles.TextoTitulo}>
                    ZooAventura
                    </Text>

                    <Text style={styles.SloganTitulo}>
                    Explore. Descubra. Preserve.
                    </Text>
                </View>
            </View>

            <View style={styles.container2}>
                <View style={styles.titulo2}>
                    <Text style={styles.TextoTitulo2}>
                        Que bom ter você de voltar!
                    </Text>
                    <Text style={styles.subTitulo}>
                        Entre para continuar a aventura!
                    </Text>
                </View>

                <View style={styles.campos}>
                    <Text style={styles.label}>E-mail</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu e-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <Text style={styles.label}>Senha</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha"
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.botoes}>
                    <Pressable style={styles.botaoEntrar}>
                        <Text style={styles.TextoBotaoEntrar}>
                            Entrar
                        </Text>
                    </Pressable>

                    <Pressable
                        onPress={() => navigation.navigate('Carregamentos', {from: 'Cadastro'})}
                    >
                        <Text style={styles.TextoCadastro}>
                            Ainda não tem conta? Cadastre-se!
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}