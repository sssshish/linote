import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../myStyles/styles';

const Mybutton = (props: any) => {
    return (
        <TouchableOpacity
            style={styles.createDeckCtaButton}
            onPress={props.customClick}>
            <Text style={styles.whiteText}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
};

export default Mybutton;
