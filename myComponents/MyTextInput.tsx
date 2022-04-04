import React from 'react';
import { secondColor, mainpink, styles } from '../myStyles/styles';
import { TextInput } from 'react-native-paper';

const MyTextInput = (props: any) => {
    return (
        <TextInput
            mode='outlined'
            label={props.label}
            underlineColorAndroid='transparent'
            value={props.value}
            keyboardType={props.keyboardType}
            onChangeText={props.onChangeText}
            returnKeyType={props.returnKeyType}
            numberOfLines={props.numberOfLines}
            multiline={props.multiline}
            onSubmitEditing={props.onSubmitEditing}
            style={styles.smallInput}
            blurOnSubmit={false}
            autoCorrect={false}
            activeOutlineColor={mainpink}
            outlineColor={secondColor}
            autoFocus={false}
        />
    );
};

export default MyTextInput;
