
import { Text, View, Image, Pressable, FlatList, Modal } from 'react-native';

import { useState } from 'react';

import styles from './territorioOniStyle.js';

export default function ValeOnivoros({ navigation }) {

    const [animalSelecionado, setAnimalSelecionado] = useState(null);

    const animais = [
        {
            nome: "Urso-pardo",
            img: require('../../../assets/urso-pardo.jpeg'),
            habitat: "Florestas, montanhas e regiões frias",
            alimentacao: "Onívoro",
            descricao: "O urso-pardo é um mamífero de grande porte que consegue se adaptar a diferentes ambientes.",
            curiosidade: "Apesar do tamanho, ele consegue correr em velocidades surpreendentes!"
        },
        {
            nome: "Javali",
            img: require('../../../assets/javali.jpeg'),
            habitat: "Florestas, campos e áreas com vegetação",
            alimentacao: "Onívoro",
            descricao: "O javali é um mamífero que utiliza seu focinho para procurar alimentos no solo.",
            curiosidade: "Seu olfato é muito desenvolvido e ajuda a encontrar alimentos escondidos!"
        },
        {
            nome: "Guaxinim",
            img: require('../../../assets/gua.jpeg'),
            habitat: "Florestas e regiões próximas à água",
            alimentacao: "Onívoro",
            descricao: "O guaxinim é conhecido por sua máscara escura ao redor dos olhos e sua cauda com anéis.",
            curiosidade: "Suas patas dianteiras são muito habilidosas para manipular objetos!"
        },
        {
            nome: "Chimpanzé",
            img: require('../../../assets/chipam.jpeg'),
            habitat: "Florestas tropicais da África",
            alimentacao: "Onívoro",
            descricao: "O chimpanzé é um primata inteligente que vive em grupos e utiliza ferramentas para conseguir alimentos.",
            curiosidade: "Ele pode usar gravetos para retirar cupins de seus ninhos!"
        },
        {
            nome: "Avestruz",
            img: require('../../../assets/aves.jpeg'),
            habitat: "Savanas e regiões abertas da África",
            alimentacao: "Onívoro",
            descricao: "O avestruz é a maior ave existente no mundo e não consegue voar.",
            curiosidade: "Suas pernas fortes permitem que corra em alta velocidade!"
        },
        {
            nome: "Raposa",
            img: require('../../../assets/raposa.jpeg'),
            habitat: "Florestas, campos e regiões montanhosas",
            alimentacao: "Onívora",
            descricao: "A raposa é um mamífero ágil que consegue viver em diversos ambientes.",
            curiosidade: "Ela utiliza sua audição apurada para localizar pequenos animais até mesmo sob a neve!"
        },
        {
            nome: "Galinha",
            img: require('../../../assets/galinha.jpeg'),
            habitat: "Campos, fazendas e áreas rurais",
            alimentacao: "Onívora",
            descricao: "A galinha é uma ave doméstica que se alimenta de sementes, insetos e pequenos animais.",
            curiosidade: "As galinhas conseguem reconhecer e lembrar de outros indivíduos!"
        },
        {
            nome: "Sagui",
            img: require('../../../assets/sagui.jpeg'),
            habitat: "Florestas tropicais da América do Sul",
            alimentacao: "Onívoro",
            descricao: "O sagui é um pequeno primata que vive nas árvores e costuma formar grupos.",
            curiosidade: "Ele possui garras que ajudam a subir e se movimentar pelos troncos!"
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
                        Vale dos Onívoros
                    </Text>
                </View>

            </View>

            <View style={styles.container2}>

                <View style={styles.cardPrincipalOni}>

                    <View style={styles.ondeTextoFIcarCardPrincipal}>

                        <Text style={styles.textoCardPrincipal}>
                            Bem-vindo ao vale! 🐗
                        </Text>

                        <Text style={styles.subTextoCardPrincipal}>
                            Descubra os animais que vivem aqui.
                        </Text>

                    </View>

                    <Image
                        style={styles.fotoCardPrincipal}
                        source={require("../../../assets/onivaros.png")}
                        resizeMode="contain"
                    />

                </View>

            </View>

            {/* LISTA DE ANIMAIS */}
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
