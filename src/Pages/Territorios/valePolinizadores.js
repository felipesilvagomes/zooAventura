import { Text, View, Image, Pressable, FlatList, Modal } from 'react-native';

import { useState } from 'react';
import styles from './territorioPolonizadorStyle';

export default function ValePolinizadores({ navigation }) {

    const [animalSelecionado, setAnimalSelecionado] = useState(null);

    const animais = [
        {
            nome: "Abelha-europeia",
            img: require('../../../assets/abelha.jpeg'),
            habitat: "Jardins, campos, florestas e áreas com flores.",
            alimentacao: "Néctar e pólen das flores.",
            descricao: "É uma das principais polinizadoras do mundo. Ao visitar várias flores em busca de alimento, transporta o pólen de uma para outra.",
            curiosidade: "Uma colônia de abelhas pode reunir milhares de indivíduos trabalhando juntos."
        },
        {
            nome: "Beija-flor",
            img: require('../../../assets/beij.jpeg'),
            habitat: "Florestas, jardins e regiões com muitas flores.",
            alimentacao: "Principalmente néctar, além de pequenos insetos.",
            descricao: "Seu bico comprido e sua língua ajudam a alcançar o néctar dentro das flores. Durante a alimentação, pode transportar pólen.",
            curiosidade: "Algumas espécies conseguem bater as asas dezenas de vezes por segundo."
        },
        {
            nome: "Borboleta-monarca",
            img: require('../../../assets/bor.jpeg'),
            habitat: "Campos, jardins e regiões com plantas floridas.",
            alimentacao: "Néctar das flores.",
            descricao: "Ao pousar nas flores para se alimentar, seu corpo pode entrar em contato com o pólen e transportá-lo para outras plantas.",
            curiosidade: "A borboleta-monarca é conhecida por realizar longas migrações."
        },
        {
            nome: "Mariposa-esfinge",
            img: require('../../../assets/ma.jpeg'),
            habitat: "Florestas, jardins e áreas com flores, especialmente durante a noite.",
            alimentacao: "Néctar das flores.",
            descricao: "Possui uma língua longa que permite alcançar o néctar de flores profundas. Algumas espécies são importantes polinizadoras noturnas.",
            curiosidade: "Muitas mariposas-esfinge conseguem voar paradas no ar enquanto se alimentam."
        },
        {
            nome: "Abelha-mamangava",
            img: require('../../../assets/ab.jpeg'),
            habitat: "Jardins, campos e áreas com vegetação florida.",
            alimentacao: "Néctar e pólen.",
            descricao: "É uma abelha grande e peluda. Seu corpo consegue transportar bastante pólen entre as flores, ajudando na reprodução das plantas.",
            curiosidade: "Algumas mamangavas conseguem realizar a chamada polinização por vibração, sacudindo flores para liberar o pólen."
        },
        {
            nome: "Besouro-das-flores",
            img: require('../../../assets/besour.jpeg'),
            habitat: "Jardins, campos e florestas com flores.",
            alimentacao: "Néctar, pólen e, em algumas espécies, partes das flores.",
            descricao: "Ao caminhar sobre as flores para se alimentar, pode carregar pólen preso ao corpo e transportá-lo para outras plantas.",
            curiosidade: "Alguns besouros estão entre os polinizadores mais antigos da história evolutiva das plantas."
        },
        {
            nome: "Mosca-das-flores",
            img: require('../../../assets/mos.jpeg'),
            habitat: "Jardins, campos e ambientes com flores.",
            alimentacao: "Néctar e pólen.",
            descricao: "Apesar de parecer uma abelha em algumas espécies, é uma mosca. Visita flores para se alimentar e também ajuda no transporte do pólen.",
            curiosidade: "Muitas moscas-das-flores imitam a aparência de abelhas e vespas para afastar predadores."
        },
        {
            nome: "Esquilo",
            img: require('../../../assets/e.jpeg'),
            habitat: "Florestas, bosques e parques.",
            alimentacao: "Sementes, nozes, frutos e, em algumas espécies, flores.",
            descricao: "Não é considerado um polinizador típico. Porém, ao visitar flores para se alimentar, alguns esquilos podem transportar pólen acidentalmente.",
            curiosidade: "Esquilos ajudam na dispersão de sementes quando enterram alimentos e não conseguem encontrá-los novamente."
        },
    ];

    return (
        <View style={styles.container}>

            <View style={styles.navBar}>

                <Pressable onPress={() => navigation.navigate("Home")}>
                    <Image
                        style={styles.ImagemNav}
                        source={require("../../../assets/SetaDefinitiva.png")}
                    />
                </Pressable>

                <View
                    style={styles.ondeTextoFicar}
                    pointerEvents="none"
                >
                    <Text style={styles.TextoNav}>
                        Vale dos Polinizadores
                    </Text>
                </View>

            </View>

            <View style={styles.container2}>

                <View style={styles.cardPrincipalPre}>

                    <View style={styles.ondeTextoFIcarCardPrincipal}>
                        <Text style={styles.textoCardPrincipal}>
                            Bem-vindo ao vale! 🦋
                        </Text>

                        <Text style={styles.subTextoCardPrincipal}>
                            Descubra os animais que ajudam as plantas.
                        </Text>
                    </View>

                    <Image
                        style={styles.fotoCardPrincipal}
                        source={require("../../../assets/FotoPolonizadores.png")}
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
                            <Text style={styles.textoFechar}>✕</Text>
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