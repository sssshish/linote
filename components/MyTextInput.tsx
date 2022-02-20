import React from 'react';
import { View, TextInput } from 'react-native';
import { secondColor, styles } from '../styles/styles';

const MyTextInput = (props: any) => {
    return (
        <View
            style={styles.addWordInput}>
            <TextInput
                underlineColorAndroid='transparent'
                placeholder={props.placeholder}
                placeholderTextColor={secondColor}
                keyboardType={props.keyboardType}
                onChangeText={props.onChangeText}
                returnKeyType={props.returnKeyType}
                numberOfLines={props.numberOfLines}
                multiline={props.multiline}
                onSubmitEditing={props.onSubmitEditing}
                style={props.style}
                blurOnSubmit={false}
                value={props.value}
                autoCorrect={false}
            />
        </View>
    );
};

export default MyTextInput;
