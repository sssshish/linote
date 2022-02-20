import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { fifthColor } from '../styles/styles';

const Mytext = (props: any) => {
    return <Text style={styles.text}>{props.text}</Text>;
};

const styles = StyleSheet.create({
    text: {
        color: fifthColor,
        fontSize: 18,
        marginTop: 16,
        marginLeft: 35,
        marginRight: 35
    }
});

export default Mytext;
