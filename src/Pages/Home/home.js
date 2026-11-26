
import { StatusBar } from "expo-status-bar";

import { Text, View, Image, ScrollView, Pressable, ImageBackground, Modal } from "react-native";

import { useState } from "react";

import styles from "./homeStyle";

export default function Home({ navigation }) {

    const [visu, setVisu] = useState(false);
    const [somAtivado, setSomAtivado] = useState(true);

    const abrirModal = () => {
        setVisu(true);
    };

    const fecharModal = () => {
        setVisu(false);
    };

    return (
        <View style={styles.container}>

            <View style={styles.navBar}>

                <View style={styles.foto}>
                    <Image
                        style={styles.ImagemNav}
                        source={require("../../../assets/IconLeao.png")}
                    />
                </View>

                <View style={styles.ondeTextoFicarNavbar}>
                    <Text style={styles.textoNavbar}>
                        ZooAventura
                    </Text>

                    <Text style={styles.subTextoNavBar}>
                        Menu principal
                    </Text>
                </View>

                <View style={styles.configsNavbar}>
                    <Pressable onPress={abrirModal}>
                        <Image
                            style={styles.engrenagemNav}
                            source={require("../../../assets/IconEngrenagem.png")}
                        />
                    </Pressable>
                </View>

            </View>


            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.conteudoScroll}
                showsVerticalScrollIndicator={false}
            >

                <View style={styles.Titulo}>
                    <Text style={styles.TextoTitulo}>
                        Olá, explorador 🦁
                    </Text>

                    <Text style={styles.SubTextoTitulo}>
                        O que vamos descobrir hoje?
                    </Text>
                </View>


                <View style={styles.container2}>

                    <Pressable
                        style={styles.cardTerritorio}
                        onPress={() => navigation.navigate("ValeHerbivoros")}
                    >
                        <ImageBackground
                            style={styles.fotoCard}
                            source={require("../../../assets/herbivaroDefinitivo.png")}
                            resizeMode="cover"
                            imageStyle={{ borderRadius: 8 }}
                        >
                            <View style={styles.faixaTexto}>
                                <Text style={styles.textoCard}>
                                    Vale dos Herbívoros
                                </Text>
                            </View>
                        </ImageBackground>
                    </Pressable>


                    <Pressable
                        style={styles.cardTerritorio}
                        onPress={() => navigation.navigate("ValeOnivoros")}
                    >
                        <ImageBackground
                            style={styles.fotoCard}
                            source={require("../../../assets/onivaro.png")}
                            resizeMode="cover"
                            imageStyle={{ borderRadius: 8 }}
                        >
                            <View style={styles.faixaTextoOni}>
                                <Text style={styles.textoCard}>
                                    Vale dos Onívoros
                                </Text>
                            </View>
                        </ImageBackground>
                    </Pressable>


                    <Pressable
                        style={styles.cardTerritorio}
                        onPress={() => navigation.navigate("ValeCarnivoros")}
                    >
                        <ImageBackground
                            style={styles.fotoCard}
                            source={require("../../../assets/carnivaro.png")}
                            resizeMode="cover"
                            imageStyle={{ borderRadius: 8 }}
                        >
                            <View style={styles.faixaTextoCar}>
                                <Text style={styles.textoCard}>
                                    Vale dos Carnívoros
                                </Text>
                            </View>
                        </ImageBackground>
                    </Pressable>


                    <Pressable
                        style={styles.cardTerritorio}
                        onPress={() => navigation.navigate("ValePresas")}
                    >
                        <ImageBackground
                            style={styles.fotoCard}
                            source={require("../../../assets/presa.png")}
                            resizeMode="cover"
                            imageStyle={{ borderRadius: 8 }}
                        >
                            <View style={styles.faixaTextoPre}>
                                <Text style={styles.textoCard}>
                                    Vale das Presas
                                </Text>
                            </View>
                        </ImageBackground>
                    </Pressable>


                    <Pressable
                        style={styles.cardTerritorio}
                        onPress={() => navigation.navigate("ValePredadores")}
                    >
                        <ImageBackground
                            style={styles.fotoCard}
                            source={require("../../../assets/predador.png")}
                            resizeMode="cover"
                            imageStyle={{ borderRadius: 8 }}
                        >
                            <View style={styles.faixaTextoPreda}>
                                <Text style={styles.textoCard}>
                                    Vale dos Predadores
                                </Text>
                            </View>
                        </ImageBackground>
                    </Pressable>


                    <Pressable
                        style={styles.cardTerritorio}
                        onPress={() => navigation.navigate("ValePolinizadores")}
                    >
                        <ImageBackground
                            style={styles.fotoCard}
                            source={require("../../../assets/polonizadores.png")}
                            resizeMode="cover"
                            imageStyle={{ borderRadius: 8 }}
                        >
                            <View style={styles.faixaTextoPo}>
                                <Text style={styles.textoCard}>
                                    Vale dos Polinizadores
                                </Text>
                            </View>
                        </ImageBackground>
                    </Pressable>

                </View>

            </ScrollView>


            <StatusBar style="light" />


            <Modal
                visible={visu}
                transparent={true}
                animationType="fade"
                onRequestClose={fecharModal}
            >

                <View style={styles.fundoModal}>

                    <View style={styles.modalConfiguracoes}>

                        <Text style={styles.tituloModal}>
                            ⚙️ Configurações
                        </Text>

                        <Pressable
                            style={styles.botaoFechar}
                            onPress={fecharModal}
                        >
                            <Text style={styles.textoFechar}>
                                ✕
                            </Text>
                        </Pressable>
                        <Pressable onPress={() => { setVisu(false); navigation.navigate("Conta")}}>
                            <View style={styles.opcaoModal}>  
                                <Text style={styles.textoOpcao}>
                                    Conta 
                                </Text>
                            </View>
                        </Pressable> 
                        <Pressable onPress={() => { setVisu(false); navigation.navigate("Sobre")}}>
                        <View style={styles.opcaoModal}>
                            <Text style={styles.textoOpcao}>
                                🦁 Sobre o ZooAventura
                            </Text>
                        </View>
                        </Pressable>
                        <View style={styles.opcaoModal}>
                            <Text style={styles.textoOpcao}>
                                Ingressos
                            </Text>
                        </View>
                        <View style={styles.opcaoModal}>
                            <Text style={styles.textoOpcao}>
                                Como chegar
                            </Text>
                        </View>
                        <View style={styles.opcaoModalSair}>
                            <Text style={styles.textoOpcaoSair}>
                                Sair
                            </Text>
                        </View>

                    </View>

                </View>

            </Modal>

        </View>
    );
}
