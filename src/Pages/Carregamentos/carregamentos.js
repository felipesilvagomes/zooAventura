
import { View, Text, Image, ActivityIndicator } from "react-native";
import { useEffect } from "react";

export default function Carregamentos({ navigation, route, inicial }) {

    useEffect(() => {

        // Não navega durante o carregamento inicial.
        if (inicial || !navigation) {
            return;
        }

        const destino = route?.params?.from || "Home";

        const tempo = setTimeout(() => {
            navigation.replace(destino);
        }, 2500);

        return () => clearTimeout(tempo);

    }, [inicial, navigation, route]);

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#F8FCF7",
                justifyContent: "center",
                alignItems: "center",
            }}
        >

            <Image
                source={require("../../../assets/leao.png")}
                style={{
                    width: 200,
                    height: 200,
                    marginBottom: 20,
                }}
                resizeMode="contain"
            />

            <Text
                style={{
                    fontSize: 30,
                    color: "#008000",
                    fontWeight: "bold",
                }}
            >
                ZooAventura
            </Text>

            <ActivityIndicator
                size="large"
                color="#008000"
                style={{ marginTop: 20 }}
            />

            <Text>
                Preparando sua aventura...
            </Text>

        </View>
    );
}
