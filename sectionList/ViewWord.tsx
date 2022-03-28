/*View one word info along with update data icon which calls UpdateWord.tsx */

/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, View, SafeAreaView, Alert } from 'react-native';
import MyTextInput from '../myComponents/MyTextInput';
import Mybutton from '../myComponents/MyButton';
// import { openDatabase } from 'react-native-sqlite-storage';

// var db = openDatabase({ name: 'dictionary.db' });


const SQLite = require('react-native-sqlite-storage');

const db = SQLite.openDatabase({ name: 'dictionary.db' });

const ViewWord = () => {
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
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
                <View style={{ flex: 1 }}>
                    <MyTextInput
                        label='Enter Word id'
                        placeholder='Enter Word id'
                        onChangeText={
                            (inptWordId: React.SetStateAction<string>) => setInputWordId(inputWordId)
                        }
                        style={{ padding: 10 }}
                    />
                    <Mybutton title='Search Word' customClick={searchWord} />
                    <View
                        style={{ marginLeft: 35, marginRight: 35, marginTop: 10 }}>

                        <Text>Word ID: </Text>
                        <Text>Translation: </Text>
                        <Text>Word Type: </Text>
                        {/* {/* <Text>Word: {wordData.word}</Text> */}
                        {/* <Text>Translation: {wordData.translation}</Text>
                        <Text>Comments: {wordData.description}</Text> */}
                        {/* <Text>Word Type: {wordData.word_type}</Text>*/}
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ViewWord;
