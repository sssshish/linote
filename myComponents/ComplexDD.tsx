import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Icon } from '@ui-kitten/components';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from '../myStyles/styles';

const ComplexDD = (props: any) => {
    const [value, setValue] = useState(null);
    const wordtypes = [
        { label: 'Compound', value: '1' },
        { label: 'Contraction', value: '2' },
        { label: 'Derivative', value: '3' },
        { label: 'Idiom', value: '4' },
        { label: 'Phrasal Verb', value: '5' },
        { label: 'Saying', value: '6' },
        { label: 'None', value: '7' }
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

export default ComplexDD;
