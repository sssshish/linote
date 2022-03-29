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
import { NavigationRouteContext } from '@react-navigation/native';
import DropdownComponent from '../myComponents/Dropdown';
// import ViewWord from '../sectionList/ViewWord';

const SQLite = require('react-native-sqlite-storage');

const db = SQLite.openDatabase({ name: 'dictionary.db' });


//{ navigation: any }

const AddWords = () => {
    let [word, setWord] = useState('');
    let [translation, setTranslation] = useState('');
    let [description, setDescription] = useState('');

    let register_word = () => {
        console.log(word, translation, description);

        if (!word) {
            Alert.alert('Word cannot be empty.');
            return;
        }
        if (!translation) {
            Alert.alert('Translation cannot be empty.');
            return;
        }
        db.transaction((tx: any, nbname: String) => {
            tx.executeSql('INSERT INTO' + nbname + '(word, translation, description) VALUES (?,?,?)',
                [word, translation, description],
                (trans: any, results: { rowsAffected: number; }) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            'Success',
                            'You word has been added successfully',
                            [
                                {
                                    text: 'Ok'
                                    // onPress: () => navigation.navigate('List')
                                }
                            ],
                            { cancelable: false }
                        );
                    } else { Alert.alert('Error: Word was not added.'); }
                }
            );
        });
    };

    return (
        <SafeAreaView style={styles.megaWrap}>
            <View style={styles.megaWrap}>
                <View style={{ flex: 1 }}>
                    <ScrollView keyboardShouldPersistTaps='handled'>
                        <KeyboardAvoidingView
                            behavior='padding'
                            style={{ flex: 1, justifyContent: 'space-between' }}>
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

                            <DropdownComponent />

                            <MyTextInput
                                label='Description'
                                onChangeText={
                                    (description: React.SetStateAction<string>) => setDescription(description)
                                }
                                maxLength={225}
                                numberOfLines={5}
                                multiline={true}
                            />

                            <Mybutton title='Submit' customClick={register_word} />
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default AddWords;
