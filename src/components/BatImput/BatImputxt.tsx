import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatImputStyles';

interface BatImputTxtProps{
  pass:string
}


export function BatImputxt(props:BatImputTxtProps) {
  return (
    
        <TextInput 
            style={styles.inputer}
            placeholder='pass'
            value={props.pass}
            >
            
        </TextInput>

  );
}