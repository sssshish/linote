import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Icon } from '@ui-kitten/components';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from '../myStyles/styles';

const MorphemeDD = (props: any) => {
    const [value, setValue] = useState(null);
    const wordtypes = [
        { value: '1', label: '*bound root' },
        { value: '2', label: '*bound stem' },
        { value: '3', label: 'circumfix' },
        { value: '4', label: 'clitic' },
        { value: '5', label: 'discontiguous phrase' },
        { value: '6', label: '=enclitic' },
        { value: '7', label: '-infix-' },
        { value: '8', label: '-infixing infix' },
        { value: '9', label: 'particle' },
        { value: '10', label: 'phrase' },
        { value: '11', label: 'prefix-' },
        { value: '12', label: 'prefixing prefix-' },
        { value: '13', label: 'proclitic' },
        { value: '14', label: 'root' },
        { value: '15', label: '=simulfix=' },
        { value: '16', label: 'stem' },
        { value: '17', label: '-suffix' },
        { value: '18', label: '-suffixing interfix' },
        { value: '19', label: '~suprafix~' },
        { label: 'None', value: '20' }
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

export default MorphemeDD;
