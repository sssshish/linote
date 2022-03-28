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
  IconProps
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { List } from './sectionList/List';
import { Wallet } from './sectionCategory/Category';
import { Quiz } from './sectionQuiz/Quiz';
import { Settings } from './sectionInfo/Info';
import { customTheme } from './myUtils/customTheme';
import { fifthColor, lightblue, mainpink, white, black, styles } from './myStyles/styles';
import AddWords from './views/AddWords';
import { SvgXml } from 'react-native-svg';
import { plusSvg, challengeSvgBase, walletSvgBase, infoSvgBase, getCustomSvg, cardsSvgBase } from './myUtils/customIcons';
import ViewWord from './sectionList/ViewWord';
import SplashScreen from 'react-native-splash-screen';
import { Alert, ImageBackground, SafeAreaView, View } from 'react-native';
import MyButton from './myComponents/dist/MyButton';
import Mybutton from './myComponents/MyButton';
import { Button, Modal, Portal, Provider, Text, TextInput } from 'react-native-paper';
import MyTextInput from './myComponents/MyTextInput';

// const onMenuClick = (index: number) => {
//   switch (index) {
//     case 0:
//     default:
//       customNavigate('list');
//       break;

//     case 1:
//       customNavigate('training-mode');
//       break;

//     case 2:
//       customNavigate('add');
//       break;

//     case 3:
//       customNavigate('challenge-mode');
//       break;

//     case 4:
//       customNavigate('info');
//       break;
//   }

//   setSelectedIndex(index);

//   setTapsCount(0);
// };

const CreateNB = () => { //P-1
};
const OpenNB = () => { //P-1
};

const AboutApp = () => { //P-3
};

export default () => {

  SplashScreen.hide();

  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <ImageBackground style={styles.imgBackground}
      resizeMode='contain'
      source={require('./assets/homepage.png')}
    >
      <Provider>
        <View style={styles.bottomZone}>
          <Mybutton title='Create Notebook' customClick={showModal} />
          <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.inputDialog}>
              <MyTextInput label='Enter Notebook Name' />
              <Button mode='contained' onPress={CreateNB} style={styles.ctaButton}>
                Create
              </Button>
            </Modal>
          </Portal>
          <Mybutton title='Open Notebook' customClick={OpenNB} />
          <Mybutton title='About App' customClick={AboutApp} />
        </View>
      </Provider>
    </ImageBackground >
  );
};
