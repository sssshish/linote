/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
/*View and update info on your NB*/

import * as React from 'react';
import { Text, View } from 'react-native';
import { IconProps, Icon, Layout } from '@ui-kitten/components';
import { styles } from '../myStyles/styles';
import Mybutton from '../myComponents/MyButton';
import { Portal, Provider, Modal, Button } from 'react-native-paper';
import { useState } from 'react';
import MyTextInput from '../myComponents/MyTextInput';

export const FlexiIcon = (settingsIconProps: IconProps) => (
    <Icon {...settingsIconProps} width={22} height={22} fill='#333' />
);

const SQLite = require('react-native-sqlite-storage');

const db = SQLite.openDatabase({ name: 'linote.db' });

const DisplayNotes = () => {
    let [noteData, setNoteData] = useState({});
    const query = 'SELECT * FROM test(infotitle, info) where word_id=?';
    db.transaction((tx: any) => {
        tx.executeSql(query, [], (trans: any, result: any) => {
            console.log('All notes loaded');
        },
            (error: any) => {
                console.log('Error loading note', error);
            }
        );
    });
    // if (result.rows.length==0)
    // {
    return (
        <Layout style={styles.megaWrap}>
            <View style={styles.infoContainer}>
                <Text>No notes created yet.</Text>
            </View>
        </Layout>
    );
};
//     else
//     {
//         return (
// <Text>Display Notes here.</Text>
//         );
//     }
// };

export const Settings = () => {

    const [a, setA] = useState(false);
    const showA = () => setA(true);
    const hideA = () => setA(false);
    const [note, setNote] = useState('');
    const [title, setTitle] = useState('');

    return (
        <Layout style={styles.megaWrap}>
            <View style={styles.infoContainer}>
                <Provider>
                    <Mybutton title='Add New Note' customClick={showA} />
                    <Portal>
                        <Modal visible={a} onDismiss={hideA} contentContainerStyle={styles.inputDialog}>
                            <MyTextInput
                                label='Note Title'
                                onChangeText={
                                    (title: React.SetStateAction<string>) => setTitle(title)
                                }
                            />
                            <MyTextInput
                                label='Note'
                                multiline={true}
                                maxLength={500}
                                numberOfLines={5}
                                onChangeText={(note: React.SetStateAction<string>) => setNote(note)} />
                            <Button mode='contained' style={styles.smallbutton} onPress={
                                () => {
                                    const query = 'INSERT INTO test(infotitle, info) VALUES (?,?)';
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
                <DisplayNotes />
            </View>
        </Layout>
    );
};


