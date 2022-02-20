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
import MyTextInput from '../components/MyTextInput';
import Mybutton from '../components/MyButton';
import { openDatabase } from 'react-native-sqlite-storage';
import { styles } from '../styles/styles';

const AddWords = ({ navigation: any }) => {
    let [userName, setUserName] = useState('');
    let [userContact, setUserContact] = useState('');
    let [userAddress, setUserAddress] = useState('');

    let register_word = () => {
        console.log(userName, userContact, userAddress);

        if (!userName) {
            Alert.alert('Word cannot be empty.');
            return;
        }
        if (!userContact) {
            Alert.alert('Translation cannot be empty.');
            return;
        }

        var db = openDatabase({ name: 'dictionary.db' });
        db.transaction((tx: any) => {
            tx.executeSql('INSERT INTO table_user (user_name, user_contact, user_address) VALUES (?,?,?)',
                [userName, userContact, userAddress],
                (trans: any, results: { rowsAffected: number; }) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            'Success',
                            'You word has been added successfully',
                            [
                                {
                                    text: 'Ok',
                                    onPress: () => navigation.navigate('HomeScreen')
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
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1 }}>
                    <ScrollView keyboardShouldPersistTaps='handled'>
                        <KeyboardAvoidingView
                            behavior='padding'
                            style={{ flex: 1, justifyContent: 'space-between' }}>
                            <MyTextInput
                                placeholder='Enter Word'
                                onChangeText={
                                    (word: React.SetStateAction<string>) => setUserName(word)
                                }
                                style={{ padding: 10 }}
                            />
                            <MyTextInput
                                placeholder='Enter translation for word'
                                onChangeText={
                                    (translation: React.SetStateAction<string>) => setUserContact(translation)
                                }
                                style={{ padding: 10 }}
                            />
                            <MyTextInput
                                placeholder='Enter Description/Comments'
                                onChangeText={
                                    (comments: React.SetStateAction<string>) => setUserAddress(comments)
                                }
                                maxLength={225}
                                numberOfLines={5}
                                multiline={true}
                                style={{ textAlignVertical: 'top', padding: 10 }}
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
