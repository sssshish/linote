/* eslint-disable @typescript-eslint/no-shadow */
/*AddWords.tsx contains a form-like view to add new words in a Notebook*/

/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    Alert,
    SafeAreaView,
    Text
} from 'react-native';
import MyTextInput from '../myComponents/MyTextInput';
import { styles } from '../myStyles/styles';
import { onMenuClick } from '../App';
import { Button } from 'react-native-paper';
import { Icon } from '@ui-kitten/components';
import { Dropdown } from 'react-native-element-dropdown';

const SQLite = require('react-native-sqlite-storage');

const db = SQLite.openDatabase({ name: 'linote.db' });



const AddWords = () => {

    let [word, setWord] = useState('');
    let [translation, setTranslation] = useState('');
    let [description, setDescription] = useState('');
    let [pronounciation, setpronoun] = useState('');
    let [complex, setComplex] = useState('');
    let [morpheme, setMorpheme] = useState('');
    let [graminfo, setGramInfo] = useState('');
    const [valueC, setValueC] = useState(null);
    const complexTypes = [
        { label: 'Compound', value: '1' },
        { label: 'Contraction', value: '2' },
        { label: 'Derivative', value: '3' },
        { label: 'Idiom', value: '4' },
        { label: 'Phrasal Verb', value: '5' },
        { label: 'Saying', value: '6' },
        { label: 'None', value: '7' }
    ];
    const renderComplex = (item: any) => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
                {item.value === valueC && (
                    <Icon
                        style={styles.icon}
                        fill='#8F9BB3'
                        name='checkmark-circle'
                    />
                )}
            </View>
        );
    };
    const [valueG, setValueG] = useState(null);
    const gramTypes = [
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
    const renderGram = (item: any) => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
                {item.value === valueG && (
                    <Icon
                        style={styles.icon}
                        fill='#8F9BB3'
                        name='checkmark-circle'
                    />
                )}
            </View>
        );
    };
    const [valueM, setValueM] = useState(null);
    const morphemetypes = [
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
    const renderMorph = (item: any) => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
                {item.value === valueM && (
                    <Icon
                        style={styles.icon}
                        fill='#8F9BB3'
                        name='checkmark-circle'
                    />
                )}
            </View>
        );
    };

    let register_word = () => {

        if (!word || !translation || !pronounciation || !description || !complex || !morpheme || !graminfo) {
            Alert.alert('Please fill all details.');
            return;
        }
        db.transaction((tx: any) => {
            tx.executeSql('INSERT INTO test_table(word,translation, pronounciation, description,complex, morpheme, graminfo) VALUES (?,?,?,?,?,?,?)',
                [word, translation, pronounciation, description, complex, morpheme, graminfo],
                (trans: any, results: { rowsAffected: number; }) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            'Success',
                            'You word has been added successfully.',
                            [
                                {
                                    text: 'Ok',
                                    onPress: () => { onMenuClick(0); }
                                }
                            ],
                            { cancelable: false }
                        );
                    } else { Alert.alert('Error: Word could not added.'); }
                }
            );
        });
    };

    return (
        <SafeAreaView style={styles.megaWrap}>
            <View style={styles.megaWrap}>
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <ScrollView keyboardShouldPersistTaps='handled'>
                        <KeyboardAvoidingView
                            behavior='padding'
                            style={{ flex: 1, justifyContent: 'center' }}>

                            <MyTextInput
                                label='Word'
                                onChangeText={
                                    (word: React.SetStateAction<string>) => setWord(word)
                                }
                            />

                            <MyTextInput
                                label='Translation'
                                onChangeText={
                                    (translation: React.SetStateAction<string>) => setTranslation(translation)
                                }
                            />

                            <MyTextInput
                                label='Pronounciation'
                                onChangeText={
                                    (pronounciation: React.SetStateAction<string>) => setpronoun(pronounciation)
                                }
                            />

                            <MyTextInput
                                label='Description'
                                onChangeText={
                                    (description: React.SetStateAction<string>) => setDescription(description)
                                }
                                maxLength={225}
                                numberOfLines={3}
                                multiline={true}
                            />
                            <Dropdown
                                style={styles.dropdown}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={complexTypes}
                                search
                                maxHeight={300}
                                labelField='label'
                                valueField='value'
                                placeholder='Select Complex Form Type'
                                searchPlaceholder='Search'
                                value={valueC}
                                onChange={(item: {
                                    label: React.SetStateAction<string>;
                                    value: React.SetStateAction<null>;
                                }) => {
                                    setComplex(item.label);
                                    setValueC(item.value);
                                }}
                                renderItem={renderComplex}
                            />
                            <Dropdown
                                style={styles.dropdown}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={morphemetypes}
                                search
                                maxHeight={300}
                                labelField='label'
                                valueField='value'
                                placeholder='Select Morpheme Type'
                                searchPlaceholder='Search'
                                value={valueM}
                                onChange={(item: {
                                    label: React.SetStateAction<string>;
                                    value: React.SetStateAction<null>;
                                }) => {
                                    setMorpheme(item.label);
                                    setValueM(item.value);
                                }}
                                renderItem={renderMorph}
                            />
                            <Dropdown
                                style={styles.dropdown}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={gramTypes}
                                search
                                maxHeight={300}
                                labelField='label'
                                valueField='value'
                                placeholder='Select Grammatical Info'
                                searchPlaceholder='Search'
                                value={valueG}
                                onChange={(item: {
                                    label: React.SetStateAction<string>;
                                    value: React.SetStateAction<null>;
                                }) => {
                                    setGramInfo(item.label);
                                    setValueG(item.value);
                                }}
                                renderItem={renderGram}
                            />
                            <Button mode='contained' onPress={register_word} style={styles['ctaButton--smallWidth']}>
                                ADD
                            </Button>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
};


export default AddWords;
