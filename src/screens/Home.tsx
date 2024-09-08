

//--------------OBJETOS PADRÃO---------------//

import React from "react";
import { Text, View,} from "react-native";
import { StatusBar } from "expo-status-bar";

//--------------OBJETOS DE ESTILIZAÇÃO--------//

import estilo from "../components/estilo";
import { BatLogo } from "../components/BatLogo/BatLogo";
import { BatImputxt } from "../components/BatImput/BatImputxt";
import styles from "../components/BatLogo/BatLogoStyles";
import { BatButton } from "../components/BatButton/BatButton";




//--------------OUTROS IMPORTS ---------------//


//==============================================

export default function Home() {
    return (
        <View style={estilo.container}>
            <View style={styles.logoContainer}>
                <BatLogo/>
            </View>
           
            <View style={estilo.inputContainer}>
                
                <BatButton></BatButton>
            </View>
            

            <Text>Clique no botão acima para copiar</Text>
            
            <StatusBar style="auto" />
        </View>







    );

}