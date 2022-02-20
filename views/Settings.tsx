/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, Text } from 'react-native';
import { IconProps, Icon, Layout } from '@ui-kitten/components';
import { styles } from '../styles/styles';

export const FlexiIcon = (settingsIconProps: IconProps) => (
    <Icon {...settingsIconProps} width={22} height={22} fill='#333' />
);

export const Settings = () => {
    return (
        <Layout style={styles.megaWrap}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings and Info here!</Text>
            </View>

        </Layout>
    );
};
