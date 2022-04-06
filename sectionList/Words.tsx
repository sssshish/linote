/* List:
    1. Search bar at top
    2. All words in db with delete button at side/swipe which calls deleteWord()
    3. Click event to call Viewword.tsx
*/
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, View, SafeAreaView, Alert } from 'react-native';
import MyTextInput from '../myComponents/MyTextInput';
import Mybutton from '../myComponents/MyButton';
import { styles } from '../myStyles/styles';
import { Card } from '@ui-kitten/components';
// import { openDatabase } from 'react-native-sqlite-storage';


const SQLite = require('react-native-sqlite-storage');

const db = SQLite.openDatabase({ name: 'linote.db' });

export const Words = () => {
    let [inputWordId, setInputWordId] = useState('');
    let [wordData, setWordData] = useState({});

    let searchWord = () => {
        console.log(inputWordId);
        setWordData({});
        db.transaction((tx: any) => {
            tx.executeSql(
                'SELECT * FROM test where word_id = ?',
                [inputWordId],
                (trans: any, results: any) => {
                    var len = results.rows.length;
                    console.log('len', len);
                    if (len > 0) {
                        setWordData(results.rows.item(0));
                    } else {
                        Alert.alert('No words found');
                    }
                }
            );
        });
    };

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <View style={{ flex: 1, alignItems: 'center', width: '100%' }}>
                    <MyTextInput
                        label='Enter Word id'
                        placeholder='Enter Word id'
                        onChangeText={
                            // eslint-disable-next-line @typescript-eslint/no-shadow
                            (inputWordId: React.SetStateAction<string>) => setInputWordId(inputWordId)
                        }
                        style={styles.topSearchInput}
                    />
                    <Mybutton title='Search Word' customClick={searchWord} styles={styles.createDeckCtaButton} />
                    <Text style={[styles.veryBigText, styles.pinkText, styles.centeredText]}>Your word list is empty!</Text>
                    {/* <Card style={styles.wordCard}>
                        <Text>Word ID: </Text>
                        <Text>Translation: </Text>
                        <Text>Word Type: </Text>
                        {/* {/* <Text>Word: {wordData.word}</Text> */}
                    {/* <Text>Translation: {wordData.translation}</Text>
                        <Text>Comments: {wordData.description}</Text> */}
                    {/* <Text>Word Type: {wordData.word_type}</Text>*/}
                </View>
            </View>
        </SafeAreaView >
    );
};
