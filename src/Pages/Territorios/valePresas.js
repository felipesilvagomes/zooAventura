
import { Text, View, Image, Pressable, FlatList, Modal } from 'react-native';

import { useState } from 'react';

import styles from './territorioPresaStyles.js';

export default function ValePresas({ navigation }) {

    const [animalSelecionado, setAnimalSelecionado] = useState(null);

    const animais = [
        {
            nome: "Impala",
            img: require('../../../assets/impata.jpeg'),
            habitat: "Savanas e campos da África",
            alimentacao: "Herbívora",
            descricao: "A impala é um antílope conhecido por sua agilidade e pelos grandes saltos que realiza para escapar de predadores.",
            curiosidade: "Ela consegue dar saltos de vários metros de comprimento!"
        },
        {
            nome: "Búfalo-africano",
            img: require('../../../assets/bu.jpeg'),
            habitat: "Savanas e pastagens da África",
            alimentacao: "Herbívoro",
            descricao: "O búfalo-africano é um mamífero forte que vive em grupos e se alimenta principalmente de gramíneas.",
            curiosidade: "Os búfalos costumam permanecer em grupos para aumentar a proteção contra predadores!"
        },
        {
            nome: "Tatu",
            img: require('../../../assets/tatu.jpeg'),
            habitat: "Florestas, campos e cerrados das Américas",
            alimentacao: "Onívoro",
            descricao: "O tatu é um mamífero que possui uma carapaça resistente e utiliza suas garras para cavar o solo.",
            curiosidade: "Algumas espécies conseguem se enrolar para proteger partes do corpo!"
        },
        {
            nome: "Cutia",
            img: require('../../../assets/cutia.jpeg'),
            habitat: "Florestas tropicais da América Central e do Sul",
            alimentacao: "Herbívora",
            descricao: "A cutia é um roedor que se alimenta principalmente de frutos, sementes e raízes.",
            curiosidade: "Ela ajuda a espalhar sementes pela floresta ao enterrar alimentos e esquecer alguns deles!"
        },
        {
            nome: "Porco-espinho",
            img: require('../../../assets/po.jpeg'),
            habitat: "Florestas e áreas com vegetação",
            alimentacao: "Herbívoro",
            descricao: "O porco-espinho é um roedor que possui espinhos pelo corpo para se defender de ameaças.",
            curiosidade: "Seus espinhos são pelos modificados e podem se soltar quando entram em contato com um predador!"
        },
        {
            nome: "Bisão",
            img: require('../../../assets/bi.jpeg'),
            habitat: "Pradarias e campos da América do Norte",
            alimentacao: "Herbívoro",
            descricao: "O bisão é um grande mamífero que possui uma corcova nos ombros e uma pelagem espessa.",
            curiosidade: "Apesar de seu tamanho, consegue correr rapidamente!"
        },
        {
            nome: "Alce",
            img: require('../../../assets/al.jpeg'),
            habitat: "Florestas e regiões frias do Hemisfério Norte",
            alimentacao: "Herbívoro",
            descricao: "O alce é um dos maiores cervídeos do mundo e os machos possuem grandes galhadas.",
            curiosidade: "Suas galhadas podem atingir uma grande extensão e são renovadas todos os anos!"
        },
        {
            nome: "Paca",
            img: require('../../../assets/pac.jpeg'),
            habitat: "Florestas tropicais e áreas próximas à água",
            alimentacao: "Herbívora",
            descricao: "A paca é um roedor de hábitos principalmente noturnos, conhecido pelas manchas claras nas laterais do corpo.",
            curiosidade: "Ela costuma nadar muito bem e pode utilizar a água para escapar de predadores!"
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
                        Vale das Presas
                    </Text>
                </View>

            </View>

            <View style={styles.container2}>

                <View style={styles.cardPrincipalPre}>

                    <View style={styles.ondeTextoFIcarCardPrincipal}>

                        <Text style={styles.textoCardPrincipal}>
                            Bem-vindo ao vale! 🐑
                        </Text>

                        <Text style={styles.subTextoCardPrincipal}>
                            Descubra os animais que vivem aqui.
                        </Text>

                    </View>

                    <Image
                        style={styles.fotoCardPrincipal}
                        source={require("../../../assets/FotoPresa.png")}
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
