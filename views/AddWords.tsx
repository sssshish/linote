/* eslint-disable @typescript-eslint/no-shadow */
/*AddWords.tsx contains a form-like view to add new words in a Notebook*/

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
import Mybutton from '../myComponents/MyButton';
import { styles } from '../myStyles/styles';
import { onMenuClick } from '../App';
import GramInfoDD from '../myComponents/GramInfoDD';
import MorphemeDD from '../myComponents/MorphemeDD';
import ComplexDD from '../myComponents/ComplexDD';
import { Button } from 'react-native-paper';
const SQLite = require('react-native-sqlite-storage');

const db = SQLite.openDatabase({ name: 'linote.db' });


//{ navigation: any }

const AddWords = () => {

    let [word, setWord] = useState('');
    let [translation, setTranslation] = useState('');
    let [description, setDescription] = useState('');
    let [pronounciation, setpronoun] = useState('');
    let [complex, setComplex] = useState('');
    let [morpheme, setMorpheme] = useState('');
    let [graminfo, setGramInfo] = useState('');

    let register_word = () => {

        if (!word) {
            Alert.alert('Word cannot be empty.');
            return;
        }
        if (!translation) {
            Alert.alert('Translation cannot be empty.');
            return;
        }
        if (!pronounciation) {
            Alert.alert('Pronounciation cannot be empty.');
            return;
        }
        if (!description) {
            Alert.alert('Description cannot be empty.');
            return;
        }
        if (!graminfo) {
            Alert.alert('Please select a Grammatical Info.');
            return;
        }
        if (!morpheme) {
            Alert.alert('Please select a Morpheme Type.');
            return;
        }
        if (!complex) {
            Alert.alert('Please select a Complex Form Type.');
            return;
        }
        db.transaction((tx: any) => {
            tx.executeSql('INSERT INTO test(word,translation, pronounciation, description,complex, morpheme, graminfo) VALUES (?,?,?,?,?,?,?)',
                [word, translation, pronounciation, description, complex, morpheme, graminfo],
                (trans: any, results: { rowsAffected: number; }) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            'Success!',
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
                            <ComplexDD placeholder='Select Complex form type' />
                            <MorphemeDD placeholder='Select Morpheme type' />
                            <GramInfoDD placeholder='Select Grammatical info' />
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
