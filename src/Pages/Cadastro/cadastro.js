
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, ScrollView, Pressable } from 'react-native';
import styles from './cadastroStyle';

export default function Cadastro({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}
            contentContainerStyle={styles.conteudoScroll}
            showsHorizontalScrollIndicator={false}
            >
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
                            Vamos explorar?
                        </Text>
                        <Text style={styles.subTitulo}>
                            Crie sua conta para começar a aventura!
                        </Text>
                    </View>

                    <View style={styles.campos}>
                        <Text style={styles.label}>Nome</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu nome"
                        />
                        <Text style={styles.label}>Idade</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite sua idade"
                            keyboardType="numeric"
                        />

                        <Text style={styles.label}>E-mail</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu e-mail"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <Text style={styles.label}>Telefone</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu telefone"
                            keyboardType="phone-pad"
                            autoCapitalize="none"
                        />

                        <Text style={styles.label}>Animal</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite animal favorito"
                        />

                        <Text style={styles.label}>Senha</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Crie uma senha"
                            secureTextEntry={true}
                        />
                    </View>

                    
                        <View style={styles.butao}>
                            <Pressable onPress={() => navigation.navigate('Carregamentos', {from: 'Home'})} style={styles.botaoVisitante}>
                                <Text style={styles.TextoBotaoVisitante}>
                                    Entrar como visitante
                                </Text>
                            </Pressable>

                            <Pressable style={styles.botaoCadastrar}>
                                <Text style={styles.TextoBotaoCadastrar}>
                                    Cadastrar!
                                </Text>
                            </Pressable>
                        </View>

                        <View style={styles.login}>
                            <Pressable onPress={() => navigation.navigate('Carregamentos', {from: 'Login'})}>
                            <Text style={styles.Textologin}>
                                Já possui conta? Entre!
                            </Text>
                            </Pressable>
                        </View>
            </View>

            <StatusBar style="auto" />
        </ScrollView>
        </View>
    );
}
