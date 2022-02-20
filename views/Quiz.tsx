/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';
import { Layout } from '@ui-kitten/components';


export const Quiz = () => {
    return (
        <Layout style={styles.megaWrap}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Flashcard section here!</Text>
            </View>

        </Layout>
    );
};
