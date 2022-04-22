/* List:
    1. Search bar at top
    2. All words in db with delete button at side/swipe which calls deleteWord()
    3. Click event to call Viewword.tsx
*/
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import Mybutton from '../myComponents/MyButton';
import { styles } from '../myStyles/styles';
import { Layout } from '@ui-kitten/components';


const SQLite = require('react-native-sqlite-storage');

const db = SQLite.openDatabase({ name: 'linote.db' });

export const Words = () => {

    let [flatListItems, setFlatListItems] = useState([]);
    // let [wordData, setWordData] = useState({});
    const query = 'SELECT * FROM test_table';
    var len = 0;
    const demoData = [
        {}
    ];

    let loadWord = () => {
        db.transaction((tx: any) => {
            tx.executeSql(query, [], (trans: any, results: any) => {
                console.log('All words loaded');
                len = results.rows.length;
                var temp: any = [];
                for (let i = 0; i < len; ++i) {
                    temp.push(results.rows.item(i));
                }
                setFlatListItems(temp);
            },
                (error: any) => {
                    console.log('Error loading words', error);
                }
            );
        });
    };

    let listViewItemSeparator = () => {
        return (
            <View
                style={{
                    height: 0.3,
                    width: '100%',
                    backgroundColor: '#fcfcfc'
                }}
            />
        );
    };

    let listItemView = (item: any) => {
        if (!item.word) {
            return (
                <View style={{ height: 0, width: 0 }} />
            );
        }
        else {
            return (
                <View
                    key={item.word_id}
                    style={{ backgroundColor: '#fcfcfc', padding: 20, width: '100%' }}>
                    <Text style={styles.titleText}>{item.word}</Text>
                    <Text >Word Id: {item.word_id}</Text>
                    <Text>Translation: {item.translation}</Text>
                    <Text>Pronounciation: {item.pronounciation}</Text>
                    <Text>Description: {item.description}</Text>
                    <Text>Complex Form Type: {item.complex}</Text>
                    <Text>Morpheme Type: {item.morpheme}</Text>
                    <Text>Grammatical Info: {item.graminfo}</Text>
                </View>
            );
        }
    };


    return (
        <Layout style={styles.megaWrap} >
            <View style={styles.infoContainer} >
                <Mybutton title='Update Words' customClick={loadWord} styles={styles.createDeckCtaButton} />
                <FlatList
                    data={flatListItems}
                    ItemSeparatorComponent={listViewItemSeparator}
                    renderItem={({ item }) => listItemView(item)}
                />
                <FlatList
                    data={demoData}
                    ItemSeparatorComponent={listViewItemSeparator}
                    renderItem={({ item }) => listItemView(item)}
                />
            </View>
        </Layout>
    );
};
