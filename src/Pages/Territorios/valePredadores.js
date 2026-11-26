
import { Text,View, Image, Pressable, FlatList, Modal } from 'react-native';

import { useState } from 'react';

import styles from './territorioPredadorStyle.js';

export default function ValePredadores({ navigation }) {

    const [animalSelecionado, setAnimalSelecionado] = useState(null);

    const animais = [
        {
            nome: "Guepardo",
            img: require('../../../assets/gue.jpeg'),
            habitat: "Savanas e campos da África",
            alimentacao: "Carnívoro",
            descricao: "O guepardo é um felino conhecido por sua incrível velocidade e habilidade de caça.",
            curiosidade: "É considerado o animal terrestre mais rápido do mundo, podendo ultrapassar 100 km/h em curtas distâncias!"
        },
        {
            nome: "Lince",
            img: require('../../../assets/li.jpeg'),
            habitat: "Florestas e regiões montanhosas",
            alimentacao: "Carnívoro",
            descricao: "O lince é um felino que possui orelhas pontudas com tufos de pelos e uma visão muito desenvolvida.",
            curiosidade: "Os pelos nas pontas das orelhas ajudam a destacar sua aparência característica!"
        },
        {
            nome: "Caracal",
            img: require('../../../assets/ca.jpeg'),
            habitat: "Savanas, campos e regiões secas da África e Ásia",
            alimentacao: "Carnívoro",
            descricao: "O caracal é um felino ágil que possui orelhas compridas com tufos pretos nas pontas.",
            curiosidade: "Ele consegue realizar saltos impressionantes para capturar aves em pleno voo!"
        },
        {
            nome: "Falcão-peregrino",
            img: require('../../../assets/Fal.jpeg'),
            habitat: "Montanhas, falésias e áreas abertas",
            alimentacao: "Carnívoro",
            descricao: "O falcão-peregrino é uma ave de rapina que caça principalmente outras aves durante o voo.",
            curiosidade: "Em seus mergulhos de caça, pode ultrapassar 300 km/h!"
        },
        {
            nome: "Tubarão-branco",
            img: require('../../../assets/tu.jpeg'),
            habitat: "Oceanos temperados e subtropicais",
            alimentacao: "Carnívoro",
            descricao: "O tubarão-branco é um grande predador marinho que possui várias fileiras de dentes afiados.",
            curiosidade: "Ele consegue detectar pequenas alterações elétricas produzidas pelos músculos de outros animais!"
        },
        {
            nome: "Orca",
            img: require('../../../assets/Orca.jpeg'),
            habitat: "Oceanos de diferentes regiões do planeta",
            alimentacao: "Carnívora",
            descricao: "A orca é um mamífero marinho que vive em grupos familiares e utiliza diferentes estratégias de caça.",
            curiosidade: "Cada grupo possui formas próprias de comunicação, como se tivesse seu próprio dialeto!"
        },
        {
            nome: "Dragão-de-komodo",
            img: require('../../../assets/dra.jpeg'),
            habitat: "Ilhas da Indonésia",
            alimentacao: "Carnívoro",
            descricao: "O dragão-de-komodo é o maior lagarto existente e possui uma língua bifurcada que utiliza para perceber cheiros.",
            curiosidade: "Sua língua ajuda a identificar partículas de odor presentes no ar!"
        },
        {
            nome: "Harpia",
            img: require('../../../assets/har.jpeg'),
            habitat: "Florestas tropicais da América Central e do Sul",
            alimentacao: "Carnívora",
            descricao: "A harpia é uma das maiores e mais poderosas aves de rapina do mundo, possuindo garras muito fortes.",
            curiosidade: "Suas garras podem ser maiores que as de um urso-pardo!"
        }
    ];

    return (
        <View style={styles.container}>

            <View style={styles.navBar}>

                <Pressable onPress={() => navigation.navigate("Home")}>
                    <Image
                        style={styles.ImagemNav}
                        source={require("../../../assets/SetaDefinitiva.png")}
                        resizeMode="contain"
                    />
                </Pressable>

                <View
                    style={styles.ondeTextoFicar}
                    pointerEvents="none"
                >
                    <Text style={styles.TextoNav}>
                        Vale dos Predadores
                    </Text>
                </View>

            </View>

            <View style={styles.container2}>

                <View style={styles.cardPrincipalPre}>

                    <View style={styles.ondeTextoFIcarCardPrincipal}>

                        <Text style={styles.textoCardPrincipal}>
                            Bem-vindo ao vale! 🦁
                        </Text>

                        <Text style={styles.subTextoCardPrincipal}>
                            Descubra os animais que vivem aqui.
                        </Text>

                    </View>

                    <Image
                        style={styles.fotoCardPrincipal}
                        source={require("../../../assets/FotoPredadores.png")}
                        resizeMode="contain"
                    />

                </View>

            </View>

            <View style={styles.container3}>

                <FlatList
                    data={animais}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.nome}
                    renderItem={({ item }) => (

                        <Pressable
                            style={styles.cardAnimal}
                            onPress={() => setAnimalSelecionado(item)}
                        >

                            <Image
                                source={item.img}
                                style={styles.imagemAnimal}
                                resizeMode="contain"
                            />

                            <Text style={styles.nomeAnimal}>
                                {item.nome}
                            </Text>

                        </Pressable>

                    )}
                />

            </View>

            <Modal
                visible={animalSelecionado !== null}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setAnimalSelecionado(null)}
            >

                <View style={styles.fundoModal}>

                    <View style={styles.modalAnimal}>

                        <Pressable
                            style={styles.botaoFechar}
                            onPress={() => setAnimalSelecionado(null)}
                        >
                            <Text style={styles.textoFechar}>
                                ✕
                            </Text>
                        </Pressable>

                        {animalSelecionado && (
                            <>

                                <Text style={styles.tituloAnimal}>
                                    {animalSelecionado.nome}
                                </Text>

                                <Image
                                    source={animalSelecionado.img}
                                    style={styles.fotoAnimalModal}
                                    resizeMode="contain"
                                />

                                <Text style={styles.textoInformacao}>
                                    Habitat: {animalSelecionado.habitat}
                                </Text>

                                <Text style={styles.textoInformacao}>
                                    Alimentação: {animalSelecionado.alimentacao}
                                </Text>

                                <Text style={styles.textoInformacao}>
                                    {animalSelecionado.descricao}
                                </Text>

                                <Text style={styles.textoCuriosidade}>
                                    💡 Você sabia?{"\n"}
                                    {animalSelecionado.curiosidade}
                                </Text>

                            </>
                        )}

                    </View>

                </View>

            </Modal>

        </View>
    );
}
