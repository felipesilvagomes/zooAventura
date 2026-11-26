
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cadastro from "./src/Pages/Cadastro/cadastro";
import Login from "./src/Pages/Login/login";
import Home from "./src/Pages/Home/home";
import Carregamentos from "./src/Pages/Carregamentos/carregamentos";
import Conta from "./src/Pages/Conta/conta";
import Sobre from "./src/Pages/Sobre/sobre";

import ValeHerbivoros from "./src/Pages/Territorios/valeHerbivoros";
import ValeCarnivoros from "./src/Pages/Territorios/valeCarnivoros";
import ValeOnivoros from "./src/Pages/Territorios/valeOnivoros";
import ValePolinizadores from "./src/Pages/Territorios/valePolinizadores";
import ValePredadores from "./src/Pages/Territorios/valePredadores";
import ValePresas from "./src/Pages/Territorios/valePresas";

const Stack = createNativeStackNavigator();

export default function App() {
    const [iniciando, setIniciando] = useState(true);

    useEffect(() => {
        const tempo = setTimeout(() => {
            setIniciando(false);
        }, 2500);

        return () => clearTimeout(tempo);
    }, []);

    if (iniciando) {
        return <Carregamentos inicial={true} />;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Cadastro">

                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Conta"
                    component={Conta}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Carregamentos"
                    component={Carregamentos}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="ValeHerbivoros"
                    component={ValeHerbivoros}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="ValeCarnivoros"
                    component={ValeCarnivoros}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="ValeOnivoros"
                    component={ValeOnivoros}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="ValePolinizadores"
                    component={ValePolinizadores}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="ValePredadores"
                    component={ValePredadores}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="ValePresas"
                    component={ValePresas}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Sobre"
                    component={Sobre}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
