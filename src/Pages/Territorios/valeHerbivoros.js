
import { Text, View, Image, Pressable, FlatList, Modal } from 'react-native';

import { useState } from 'react';

import styles from './territoriosStyle.js';

export default function ValeHerbivoros({ navigation }) {

    const [animalSelecionado, setAnimalSelecionado] = useState(null);

    const animais = [
        {
            nome: "Elefante",
            img: require('../../../assets/elefante.webp'),
            habitat: "Savanas e florestas",
            alimentacao: "Herbívoro",
            descricao: "O elefante é o maior animal terrestre do mundo.",
            curiosidade: "Utiliza sua tromba para beber água, pegar alimentos e até tomar banho!"
        },
        {
            nome: "Girafa",
            img: require('../../../assets/girafa.webp'),
            habitat: "Savanas africanas",
            alimentacao: "Herbívora",
            descricao: "A girafa é o animal mais alto do mundo e possui um pescoço muito comprido.",
            curiosidade: "Sua língua pode medir aproximadamente 45 centímetros!"
        },
        {
            nome: "Zebra",
            img: require('../../../assets/zebra.webp'),
            habitat: "Savanas e campos africanos",
            alimentacao: "Herbívora",
            descricao: "A zebra é um mamífero conhecido por suas listras pretas e brancas.",
            curiosidade: "Cada zebra possui um padrão de listras único, como uma impressão digital!"
        },
        {
            nome: "Rinoceronte",
            img: require('../../../assets/rino.webp'),
            habitat: "Savanas e áreas de vegetação",
            alimentacao: "Herbívoro",
            descricao: "O rinoceronte é um animal grande e forte, conhecido por seu chifre.",
            curiosidade: "Seu chifre é feito de queratina, o mesmo material das nossas unhas!"
        },
        {
            nome: "Coala",
            img: require('../../../assets/coala.webp'),
            habitat: "Florestas da Austrália",
            alimentacao: "Herbívoro",
            descricao: "O coala é um marsupial que vive nas árvores e se alimenta principalmente de folhas de eucalipto.",
            curiosidade: "Os coalas podem dormir por muitas horas durante o dia!"
        },
        {
            nome: "Coelho",
            img: require('../../../assets/coelho.webp'),
            habitat: "Campos, florestas e áreas com vegetação",
            alimentacao: "Herbívoro",
            descricao: "O coelho é um mamífero conhecido por suas orelhas compridas e seus saltos.",
            curiosidade: "Seus dentes crescem continuamente durante toda a vida!"
        },
        {
            nome: "Capivara",
            img: require('../../../assets/capivara.webp'),
            habitat: "Margens de rios, lagos e áreas alagadas",
            alimentacao: "Herbívora",
            descricao: "A capivara é o maior roedor do mundo e costuma viver perto da água.",
            curiosidade: "Ela é uma excelente nadadora e consegue ficar vários minutos submersa!"
        },
        {
            nome: "Hipopótamo",
            img: require('../../../assets/hi.webp'),
            habitat: "Rios e lagos da África",
            alimentacao: "Herbívoro",
            descricao: "O hipopótamo é um mamífero de grande porte que passa boa parte do dia na água.",
            curiosidade: "Apesar de passar muito tempo na água, ele sai à noite para procurar grama!"
        }
    ];

    return (
        <View style={styles.container}>

            <View style={styles.navBar}>

                <Pressable onPress={() => navigation.navigate("Home")}>
                    <Image
                        source={require('../../../assets/SetaDefinitiva.png')}
                        style={styles.ImagemNav}
                        resizeMode="contain"
                    />
                </Pressable>

                <View
                    style={styles.ondeTextoFicar}
                    pointerEvents="none"
                >
                    <Text style={styles.TextoNav}>
                        Vale dos Herbívoros
                    </Text>
                </View>

            </View>

            <View style={styles.container2}>

                <View style={styles.cardPrincipal}>

                    <View style={styles.ondeTextoFIcarCardPrincipal}>
                        <Text style={styles.textoCardPrincipal}>
                            Bem-vindo ao Vale dos Herbívoros!
                        </Text>

                        <Text style={styles.subTextoCardPrincipal}>
                            Conheça os animais que se alimentam de plantas.
                        </Text>
                    </View>

                    <Image
                        source={require('../../../assets/fotoHerbivaros.png')}
                        style={styles.fotoCardPrincipal}
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
