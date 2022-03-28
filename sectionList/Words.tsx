/* List:
    1. Search bar at top
    2. All words in db with delete button at side/swipe which calls deleteWord()
    3. Click event to call Viewword.tsx
*/

/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../myStyles/styles';
import { Layout } from '@ui-kitten/components';
//import { ViewWord } from '(path)' ;

export const List = () => {
    return (
        <Layout style={styles.megaWrap}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Your word list is empty!</Text>
            </View>
        </Layout>
    );
};
