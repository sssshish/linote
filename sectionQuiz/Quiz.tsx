/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../myStyles/styles';
import { Layout } from '@ui-kitten/components';
import FlipCard from 'react-native-flip-card';


export const Quiz = () => {
  return (
    <Layout style={styles.stackNavigatorWrapper}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Flashcard section here!</Text>
      </View>
      <FlipCard
        style={{ height: '70%', width: '50%', alignSelf: 'center' }}
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
      // onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
      >
        {/* Face Side */}
        <View style={styles.cardBack}>
          <Text>The Face</Text>
        </View>
        {/* Back Side */}
        <View style={styles.cardBack}>
          <Text>The Back</Text>
        </View>
      </FlipCard>
    </Layout>
  );
};
