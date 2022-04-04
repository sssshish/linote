/*View and update info on your NB*/

import * as React from 'react';
import { View } from 'react-native';
import { IconProps, Icon, Layout } from '@ui-kitten/components';
import { styles } from '../myStyles/styles';
import Mybutton from '../myComponents/MyButton';
import { onMenuClick } from '../App';

export const FlexiIcon = (settingsIconProps: IconProps) => (
    <Icon {...settingsIconProps} width={22} height={22} fill='#333' />
);

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
                <Mybutton title='Create New Notebook' customClick={() => onMenuClick(0)} />
                <Mybutton title='Open a Notebook' customClick='' />
            </View>
        </Layout>
    );
};


