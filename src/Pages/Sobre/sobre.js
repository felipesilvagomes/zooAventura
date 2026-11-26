
import { StatusBar } from "expo-status-bar";

import { View, Text, Image, Pressable, ScrollView } from "react-native";

import styles from "./sobreStyle";

export default function Sobre({ navigation }) {

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
                        Sobre o aplicativo
                    </Text>

                </View>

                <View style={styles.apresentacao}>

                    <Image
                        source={require("../../../assets/leao.png")}
                        style={styles.logo}
                        resizeMode="contain"
                    />

                    <Text style={styles.nomeApp}>
                        ZooAventura
                    </Text>

                    <Text style={styles.slogan}>
                        Explore. Descubra. Preserve.
                    </Text>

                </View>

                <View style={styles.card}>

                    <Text style={styles.tituloCard}>
                        🌿 Sobre o ZooAventura
                    </Text>

                    <Text style={styles.texto}>
                        O ZooAventura é um aplicativo educativo desenvolvido
                        para aproximar as pessoas do mundo animal de maneira
                        divertida, interativa e acessível.
                    </Text>

                    <Text style={styles.texto}>
                        Por meio de diferentes territórios, os usuários podem
                        conhecer espécies, descobrir curiosidades e aprender
                        sobre suas características, habitats e alimentação.
                    </Text>

                </View>

                <View style={styles.card}>

                    <Text style={styles.tituloCard}>
                        🎯 Nosso objetivo
                    </Text>

                    <Text style={styles.texto}>
                        Incentivar o conhecimento sobre os animais e a
                        importância da preservação da natureza, despertando
                        a curiosidade e a consciência ambiental.
                    </Text>

                </View>

                <View style={styles.card}>

                    <Text style={styles.tituloCard}>
                        🐾 O que você encontra aqui?
                    </Text>

                    <View style={styles.item}>
                        <Text style={styles.emoji}>🦁</Text>
                        <Text style={styles.textoItem}>
                            Diferentes territórios e espécies de animais.
                        </Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.emoji}>📚</Text>
                        <Text style={styles.textoItem}>
                            Informações educativas e curiosidades.
                        </Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.emoji}>🌎</Text>
                        <Text style={styles.textoItem}>
                            Aprendizado sobre habitats e biodiversidade.
                        </Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.emoji}>💚</Text>
                        <Text style={styles.textoItem}>
                            Incentivo ao respeito e à preservação dos animais.
                        </Text>
                    </View>

                </View>

                <View style={styles.cardMensagem}>

                    <Text style={styles.tituloMensagem}>
                        💚 Nossa missão
                    </Text>

                    <Text style={styles.textoMensagem}>
                        Conhecer a natureza é o primeiro passo para
                        aprender a protegê-la!
                    </Text>

                </View>

                <View style={styles.rodape}>

                    <Text style={styles.nomeRodape}>
                        ZooAventura 🐾
                    </Text>

                    <Text style={styles.textoRodape}>
                        Um mundo de descobertas espera por você!
                    </Text>

                    <Text style={styles.versao}>
                        Versão 1.0
                    </Text>

                </View>

            </ScrollView>

        </View>
    );
}
