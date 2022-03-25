import * as React from 'react';
import { View, Image } from 'react-native';
import { IconProps, Icon, Layout } from '@ui-kitten/components';
import { styles } from '../myStyles/styles';
import Mybutton from '../myComponents/MyButton';

export const FlexiIcon = (settingsIconProps: IconProps) => (
    <Icon {...settingsIconProps} width={22} height={22} fill='#333' />
);


const SQLite = require('react-native-sqlite-storage');

const okCallback = () => {
    console.log('connected to DB in Settings');
};

const errorCallback = (error: any) => {
    console.log('DB connection error', error);
};

const db = SQLite.openDatabase({ name: 'dictionary.db' }, okCallback, errorCallback);

// TO DO: add prop notebookName from Settings
let makeNotebook = () => {
    db.transaction((tx: any) => {

        const test = 'tbletest';
        tx.executeSql('CREATE TABLE ' + test + '(word_id INTEGER PRIMARY KEY, word TEXT NOT NULL, translation TEXT NOT NULL, description TEXT NOT NULL);', [], (trans: any, results: any) => {
            console.log('DB initialized and table created!');
        },
            (error: any) => {
                console.log('Errors with DB initialization', error);
            }
        );
    });
};



export const Settings = () => {

    //code to create table


    // db.transaction((tx: any) => {

    //   tx.executeSql('CREATE TABLE \'test\'(id INTEGER PRIMARY KEY, username TEXT NOT NULL);', [], (trans: any, results: any) => {
    //     console.log('DB initialized and table created!');
    //   },
    //     (error: any) => {
    //       console.log('Errors with DB initialization', error);
    //     }
    //   );
    // });

    return (
        <Layout style={styles.megaWrap}>
            <View style={styles.infoContainer}>
                {/* <Image source={require('../images/linote.png')} style={styles.iconImage} /> */}
                <Mybutton title='Create New Notebook' customClick={makeNotebook} />
                <Mybutton title='Open a Notebook' customClick='' />
            </View>
        </Layout>
    );
};


