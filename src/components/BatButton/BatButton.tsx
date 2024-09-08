import React, { useState } from 'react';
import { View, Button, Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyle';
import { BatImputxt } from '../BatImput/BatImputxt';
import generatePass from '../../services/passService';
import * as Clipboard from 'expo-clipboard';

export function BatButton() {
    const [pass, setPass] = useState('')
    
    function HandleGenerate() {
        let generateToken = generatePass()
        setPass(generateToken)
    }

    function HandleCopy() {
        Clipboard.setStringAsync(pass)
    }

    return (
        <>
            <BatImputxt pass={pass} />
            <Pressable
                onPress={HandleGenerate}
                style={styles.button}
            >
                <Text style={styles.textButoon}>⚡ GERAR</Text>
            </Pressable>

            <Pressable
                onPress={HandleCopy}
                style={styles.button}
            >
                <Text style={styles.textButoon}>👨‍👧‍👦 COPY</Text>
            </Pressable>

        </>
    );
}