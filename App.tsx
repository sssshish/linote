/* App.tsx contains the code for homepage which will contain of the following:
    1. Linote app icon/image in background
    2. Button for Open Notebook
        2.1 Dialog/View container to dislplay all notebooks
            2.1.1 Search Button
            2.1.2 List of Notebooks displayed by name and date (with delete button at side/swipe which calls deleteNB())
            2.1.3 Plus icon which calls createNB()
            2.1.4 Select Buttom which routes/navigates to Notebook.tsx
    3. Button for About App
        3.1 App Icon
        3.2 App Info
*/
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Icon,
  IconProps,
  Input,
  StyleService
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Words } from './sectionList/Words';
import { Category } from './sectionCategory/Category';
import { Quiz } from './sectionQuiz/Quiz';
import { Settings } from './sectionInfo/Info';
import { customTheme } from './myUtils/customTheme';
import { fifthColor, lightblue, mainpink, white, black, styles } from './myStyles/styles';
import AddWords from './views/AddWords';
import { SvgXml } from 'react-native-svg';
import { plusSvg, challengeSvgBase, walletSvgBase, infoSvgBase, getCustomSvg, cardsSvgBase } from './myUtils/customIcons';
import { ViewWord } from './sectionList/ViewWord';
import SplashScreen from 'react-native-splash-screen';
import { Alert, ImageBackground, SafeAreaView, View } from 'react-native';
import MyButton from './myComponents/dist/MyButton';
import Mybutton from './myComponents/MyButton';
import { Button, Modal, Portal, Provider, Text, TextInput } from 'react-native-paper';
import MyTextInput from './myComponents/MyTextInput';
import { FlatList, ScrollView } from 'react-native-gesture-handler';


const DB_VERSION = '6.0.1';

const SQLite = require('react-native-sqlite-storage');

const okCallback = () => {
  console.log('Connected to DB');
};

const errorCallback = (error: any) => {
  console.log('DB connection error', error);
};

// const okDeletionCallback = () => {
//   console.log('I deleted the database');
//   SQLite.openDatabase({ name: 'linote.db', createFromLocation: 1 }, okCallback, errorCallback);
// };

// const errorDeletionCallback = (error: any) => {
//   console.log('Error while deleting DB', error);
// };

const db = SQLite.openDatabase({ name: 'dictionary.db', createFromLocation: 2 }, okCallback, errorCallback);

const openNB = (nbName: String) => {
  if (!nbName) {
    Alert.alert('Notebook doesn\'t exist. Please create a Notebook first.');
    return;
  }
};

const AboutApp = () => { //P-3
};

export default () => {

  let CreateNB = (nbName: String) => {

    const query = 'CREATE TABLE IF NOT EXISTS ' + nbName + '(word_id INTEGER PRIMARY KEY AUTOINCREMENT,word TEXT NOT NULL,translation TEXT NOT NULL,word_type TEXT NOT NULL, morph_type TEXT, description TEXT);';
    db.transaction((tx: any) => {
      tx.executeSql(query, [], (trans: any, results: any) => {
        console.log('Notebook created - ', nbName);
      },
        (error: any) => {
          console.log('Error creating notebook', error);
        }
      );
    });
  };

  SplashScreen.hide();

  const [a, setA] = useState(false);
  const showA = () => setA(true);
  const hideA = () => setA(false);

  const [b, setB] = useState(false);
  const showB = () => setB(true);
  const hideB = () => setB(false);

  const [nbName, setNBname] = useState('');

  return (
    <ImageBackground style={styles.imgBackground}
      resizeMode='contain'
      source={require('./assets/homepage.png')}
    >
      <Provider>
        <View style={styles.bottomZone}>
          <Mybutton title='Create Notebook' customClick={showA} />
          <Portal>
            <Modal visible={a} onDismiss={hideA} contentContainerStyle={styles.inputDialog}>
              <MyTextInput
                label='Enter Notebook Name'
                onChangeText={(newnbName: React.SetStateAction<string>) => setNBname(newnbName)} />
              <Button mode='contained' style={styles.smallbutton} onPress={() => CreateNB(nbName)}>
                Create
              </Button>
            </Modal>
          </Portal>
          <Mybutton title='Open Notebook' customClick={showB} />
          <Portal>
            <Modal visible={b} onDismiss={hideB} contentContainerStyle={styles.bottomDialog}>
              <Text style={styles.addWordInput}>Select a Notebook</Text>
              <ScrollView>
                <Text style={styles.searchResultsContainer}>Notebook List displayed here</Text>
              </ScrollView>
              <MyButton mode='contained' styles={[styles.smallbutton, styles.createDeckCtaButton]}>
                Select
              </MyButton>
            </Modal>
          </Portal>
          <Mybutton title='About App' customClick={AboutApp} />
        </View>
      </Provider>
    </ImageBackground >
  );
};
