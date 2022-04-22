/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
/*View and update info on your NB*/

import * as React from 'react';
import { FlatList, Text, View } from 'react-native';
import { IconProps, Icon, Layout } from '@ui-kitten/components';
import { mainpink, styles } from '../myStyles/styles';
import Mybutton from '../myComponents/MyButton';
import { Portal, Provider, Modal, Button } from 'react-native-paper';
import { useState } from 'react';
import MyTextInput from '../myComponents/MyTextInput';
import { interpolateNode } from 'react-native-reanimated';


export const FlexiIcon = (settingsIconProps: IconProps) => (
    <Icon {...settingsIconProps} width={22} height={22} fill='#333' />
);

const SQLite = require('react-native-sqlite-storage');

const db = SQLite.openDatabase({ name: 'linote.db' });

export const Settings = () => {

    const [a, setA] = useState(false);
    const showA = () => setA(true);
    const hideA = () => setA(false);
    const [note, setNote] = useState('');
    const [title, setTitle] = useState('');
    let [flatListItems, setFlatListItems] = useState([]);
    const query = 'SELECT * FROM test_table';
    var len = 0;
    const [b, setB] = useState(false);
    const showB = () => setB(true);
    const hideB = () => setB(false);

    const loadNotes = () => {
        db.transaction((tx: any) => {
            tx.executeSql(query, [], (trans: any, results: any) => {
                console.log('All notes loaded');
                len = results.rows.length;
                var temp: any = [];
                for (let i = 0; i < len; ++i) {
                    temp.push(results.rows.item(i));
                }
                setFlatListItems(temp);
            },
                (error: any) => {
                    console.log('Error loading note', error);
                }
            );
        });
    };

    let listViewItemSeparator = () => {
        return (
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#fcfcfc'
                }}
            />
        );
    };

    let listItemView = (item: any) => {
        if (!item.info) {
            return (
                <View style={{ height: 0, width: 0 }} />
            );
        }
        else {
            return (
                <View
                    key={item.word_id}
                    style={{ backgroundColor: '#fcfcfc', padding: 20, width: '100%' }}>
                    <Text style={styles.titleText}>{item.infotitle}</Text>
                    <Text >Note: {item.info}</Text>
                </View>
            );
        }
    };

    return (
        <Layout style={styles.megaWrap}>
            <View style={styles.infoContainer}>
                <Provider>
                    <Mybutton title='Add New Note' customClick={showA} style={styles.smallbutton} />
                    <Mybutton title='Update Notes' customClick={loadNotes} style={styles.smallbutton} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: mainpink }} />
                        <View>
                            <Text style={{ width: 50, textAlign: 'center', color: mainpink }}>***</Text>
                        </View>
                        <View style={{ flex: 1, height: 1, backgroundColor: mainpink }} />
                    </View>
                    <FlatList
                        data={flatListItems}
                        ItemSeparatorComponent={listViewItemSeparator}
                        renderItem={({ item }) => listItemView(item)}
                    />
                    <Portal>
                        <Modal visible={a} onDismiss={hideA} contentContainerStyle={styles.infoNote}>
                            <MyTextInput
                                label='Note Title'
                                maxLength={20}
                                onChangeText={
                                    (title: React.SetStateAction<string>) => setTitle(title)
                                }
                            />
                            <MyTextInput
                                label='Note'
                                multiline={true}
                                maxLength={500}
                                numberOfLines={5}
                                onChangeText={(note: React.SetStateAction<string>) => setNote(note)}
                            />
                            <Button mode='contained' style={styles.smallbutton} onPress={
                                () => {
                                    const query = 'INSERT INTO test_table(infotitle, info) VALUES (?,?)';
                                    db.transaction((tx: any) => {
                                        tx.executeSql(query, [title, note], (trans: any, results: any) => {
                                            console.log('Note added');
                                        },
                                            (error: any) => {
                                                console.log('Error adding note', error);
                                            }
                                        );
                                    });
                                }
                            }>
                                Create
                            </Button>
                        </Modal>
                    </Portal>
                </Provider>
            </View>
        </Layout>
    );
};


