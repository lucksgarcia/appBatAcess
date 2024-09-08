import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './BatLogoStyles';
import bat_logo from '../../../assets/imagens/morcego_transp.png'


export function BatLogo() {
  return (
    <>
        <Text style={styles.title}>
            BAT PASS GENARATOR
        </Text>
    
          <Image
              source={bat_logo}
              style={{
                  resizeMode: "contain",
                  height:100,
              }}
          />
    </>
  );
}