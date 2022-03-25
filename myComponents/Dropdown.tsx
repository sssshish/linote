import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Icon } from '@ui-kitten/components';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from '../myStyles/styles';

const wordtypes = [
    { label: 'Adjective', value: '1' },
    { label: 'Adposition', value: '2' },
    { label: 'Adverb', value: '3' },
    { label: 'Conjunction', value: '4' },
    { label: 'Contraction', value: '5' },
    { label: 'Classifier', value: '6' },
    { label: 'Clitic', value: '7' },
    { label: 'Determiner/Article', value: '8' },
    { label: 'Interjection', value: '9' },
    { label: 'Noun', value: '10' },
    { label: 'Numeral', value: '11' },
    { label: 'Preposition', value: '12' },
    { label: 'Pronoun', value: '13' },
    { label: 'Verb', value: '14' }
];

const DropdownComponent = () => {
    const [value, setValue] = useState(null);

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
            placeholder='Select word type'
            searchPlaceholder='Search...'
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

export default DropdownComponent;
