
import { Text, View, Image, Pressable, FlatList, Modal } from 'react-native';

import { useState } from 'react';

import styles from './territorioCarStyle.js';

export default function ValeCarnivoros({ navigation }) {

    const [animalSelecionado, setAnimalSelecionado] = useState(null);

    const animais = [
        {
            nome: "Leão",
            img: require('../../../assets/leao.webp'),
            habitat: "Savanas africanas",
            alimentacao: "Carnívoro",
            descricao: "O leão é um grande felino conhecido por sua juba e por viver em grupos chamados alcateias.",
            curiosidade: "O rugido de um leão pode ser ouvido a vários quilômetros de distância!"
        },
        {
            nome: "Tigre",
            img: require('../../../assets/tigre.webp'),
            habitat: "Florestas e áreas de vegetação da Ásia",
            alimentacao: "Carnívoro",
            descricao: "O tigre é um felino de grande porte conhecido por suas listras e sua habilidade de caça.",
            curiosidade: "Assim como nossas impressões digitais, as listras de cada tigre são únicas!"
        },
        {
            nome: "Onça",
            img: require('../../../assets/onca.webp'),
            habitat: "Florestas e áreas alagadas das Américas",
            alimentacao: "Carnívora",
            descricao: "A onça-pintada é o maior felino das Américas e possui uma mordida muito poderosa.",
            curiosidade: "Ela é uma excelente nadadora e costuma caçar dentro da água!"
        },
        {
            nome: "Leopardo",
            img: require('../../../assets/leo.webp'),
            habitat: "Savanas e florestas da África e da Ásia",
            alimentacao: "Carnívoro",
            descricao: "O leopardo é um felino ágil que consegue subir em árvores com facilidade.",
            curiosidade: "Ele costuma carregar suas presas para cima das árvores para protegê-las de outros animais!"
        },
        {
            nome: "Lobo",
            img: require('../../../assets/lobo.webp'),
            habitat: "Florestas, montanhas e campos",
            alimentacao: "Carnívoro",
            descricao: "O lobo é um mamífero que vive em grupos organizados e se comunica por meio de uivos.",
            curiosidade: "Os lobos conseguem percorrer grandes distâncias em busca de alimento!"
        },
        {
            nome: "Hiena",
            img: require('../../../assets/hiena.webp'),
            habitat: "Savanas e regiões abertas da África",
            alimentacao: "Carnívora",
            descricao: "A hiena é um mamífero que caça e também se alimenta de restos de animais.",
            curiosidade: "Sua mordida é extremamente forte e consegue quebrar ossos!"
        },
        {
            nome: "Urso Polar",
            img: require('../../../assets/urso.webp'),
            habitat: "Regiões geladas do Ártico",
            alimentacao: "Carnívoro",
            descricao: "O urso-polar é um grande mamífero adaptado ao frio extremo e um excelente nadador.",
            curiosidade: "Sua pele é preta, enquanto seus pelos parecem brancos por causa da forma como refletem a luz!"
        },
        {
            nome: "Raposa",
            img: require('../../../assets/raposa.webp'),
            habitat: "Florestas, campos e regiões montanhosas",
            alimentacao: "Carnívora",
            descricao: "A raposa é um mamífero ágil que utiliza sua audição e seu olfato para encontrar alimento.",
            curiosidade: "Ela consegue localizar pequenos animais mesmo quando estão escondidos sob a neve!"
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
                        Vale dos Carnívoros
                    </Text>
                </View>

            </View>

            <View style={styles.container2}>

                <View style={styles.cardPrincipal}>

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
                        source={require("../../../assets/fotoCarni.png")}
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
