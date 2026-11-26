
import { StatusBar } from "expo-status-bar";

import { View, Text, Pressable, Image, ScrollView } from "react-native";

import styles from "./contaStyle";

export default function Conta({ navigation }) {

    return (
        <View style={styles.container}>

            <StatusBar style="dark" />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.conteudo}
            >
                <View style={styles.navBar}>

                    <Pressable onPress={() => navigation.navigate("Home")}>
                        <Image
                            source={require("../../../assets/SetaDefinitiva.png")}
                            style={styles.seta}
                            resizeMode="contain"
                        />
                    </Pressable>

                    <Text style={styles.tituloNav}>
                        Minha conta
                    </Text>

                </View>

                <View style={styles.perfil}>

                    <View style={styles.fotoPerfil}>
                        <Text style={styles.emojiPerfil}>🦁</Text>
                    </View>

                    <Text style={styles.nomeUsuario}>
                        Explorador(a)
                    </Text>

                    <Text style={styles.subtituloPerfil}>
                        Bem-vindo(a) à sua aventura!
                    </Text>

                </View>

                <View style={styles.card}>

                    <Text style={styles.tituloCard}>
                        👤 Informações pessoais
                    </Text>

                    <View style={styles.linha}>
                        <Text style={styles.label}>Nome completo</Text>
                        <Text style={styles.valor}>Não informado</Text>
                    </View>

                    <View style={styles.linha}>
                        <Text style={styles.label}>Idade</Text>
                        <Text style={styles.valor}>Não informada</Text>
                    </View>

                    <View style={styles.linha}>
                        <Text style={styles.label}>E-mail</Text>
                        <Text style={styles.valor}>Não informado</Text>
                    </View>

                    <View style={styles.linha}>
                        <Text style={styles.label}>Telefone</Text>
                        <Text style={styles.valor}>Não informado</Text>
                    </View>

                    <View style={styles.linha}>
                        <Text style={styles.label}>Animal favorito</Text>
                        <Text style={styles.valor}>Não informado</Text>
                    </View>

                </View>

                <View style={styles.card}>

                    <Text style={styles.tituloCard}>
                        ⚙️ Configurações
                    </Text>

                    <Pressable style={styles.opcao}>
                        <Text style={styles.textoOpcao}>
                            ✏️ Editar informações
                        </Text>
                        <Text style={styles.setaOpcao}>›</Text>
                    </Pressable>

                    <Pressable style={styles.opcao}>
                        <Text style={styles.textoOpcao}>
                            🔒 Alterar senha
                        </Text>
                        <Text style={styles.setaOpcao}>›</Text>
                    </Pressable>

                </View>

                <Pressable
                    style={styles.botaoSair}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.textoBotaoSair}>
                        Sair da conta
                    </Text>
                </Pressable>

                <Text style={styles.rodape}>
                    ZooAventura{"\n"}
                    Explore. Descubra. Preserve. 🌿
                </Text>

            </ScrollView>

        </View>
    );
}
