/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../myStyles/styles';
import { Layout } from '@ui-kitten/components';
import Mybutton from '../myComponents/MyButton';


export const Category = () => {
    return (
        <Layout style={styles.megaWrap}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Mybutton title='Create New Category' styles={styles.createDeckCtaButton} />
                <Text style={[styles.veryBigText, styles.pinkText, styles.centeredText]}>No categories made yet!</Text>
            </View>
        </Layout>
    );
};
