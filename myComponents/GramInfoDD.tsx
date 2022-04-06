import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Icon } from '@ui-kitten/components';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from '../myStyles/styles';

const GramInfoDD = (props: any) => {
    const [value, setValue] = useState(null);
    const wordtypes = [
        { label: 'Other', value: '0' },
        { label: 'Adjective', value: '1' },
        { label: 'Adposition (Postposition)', value: '2' },
        { label: 'Adposition (Preposition)', value: '3' },
        { label: 'Adverb', value: '4' },
        { label: 'Classifier', value: '5' },
        { label: 'Clitic', value: '6' },
        { label: 'Conjunction', value: '7' },
        { label: 'Connective', value: '8' },
        { label: 'Contraction', value: '9' },
        { label: 'Determiner (Article)', value: '10' },
        { label: 'Determiner (Demonstrative)', value: '11' },
        { label: 'Existential Marker', value: '12' },
        { label: 'Expletive', value: '13' },
        { label: 'Interjection', value: '14' },
        { label: 'Noun', value: '15' },
        { label: 'Numeral', value: '16' },
        { label: 'Prenoun', value: '17' },
        { label: 'Preposition', value: '18' },
        { label: 'Preverb', value: '19' },
        { label: 'Proform', value: '20' },
        { label: 'Pronoun', value: '21' },
        { label: 'Verb', value: '22' },
        { label: 'None', value: '23' }
    ];
    const renderItem = (item: any) => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
                {item.value === value && (
                    <Icon
                        style={styles.icon}
                        fill='#8F9BB3'
                        name='arrow-circle-down-outline'
                    />
                )}
            </View>
        );
    };

    return (
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={wordtypes}
            search
            maxHeight={300}
            labelField='label'
            valueField='value'
            placeholder={props.placeholder}
            searchPlaceholder={props.searchPlaceholder}
            value={value}
            onChange={(item: { value: React.SetStateAction<null>; }) => {
                setValue(item.value);
            }}
            // renderLeftIcon={() => (
            //   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
            // )}
            renderItem={renderItem}
        />
    );
};

export default GramInfoDD;
