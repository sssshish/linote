/* App.tsx contains two major screen components

A) Homepage() contains the following:
    1. Linote app icon/image in background
    2. Button for Open Notebook
        2.2 Button + Modal to create a NB
        2.1 Modal to dislplay all NBs
            2.1.1 Search Button
            2.1.2 List of Notebooks displayed by name (with delete button at side/swipe which calls deleteNB())
            2.1.3 Select Buttom which navigates to Notebook.tsx
    3. Button for About App
        3.1 App Icon
        3.2 App Info

B) Notebook() contains the template for all Notebooks:
    1. Header (with Home icon which routes to App.tsx)
    2. Bottom Tabs
        2.1 Words calls Words.tsx (which will display all words)
        2.2 Category calls Category.tsx (which will display all categories)
        2.3 Quiz calls Quiz.tsx (which will display all quizes)
        2.4 Info calls Info.tsx (which will display info on NB)
        2.5 Plus icon calls Addwords.tsx (which will add new words to List and db)
*/

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useState } from 'react';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider, IconRegistry, Layout, IconProps
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
import SplashScreen from 'react-native-splash-screen';
import { Alert, ImageBackground, SafeAreaView, View } from 'react-native';
import Mybutton from './myComponents/MyButton';
import { Button, Modal, Portal, Provider, Text, TextInput } from 'react-native-paper';
import MyTextInput from './myComponents/MyTextInput';
import { ScrollView } from 'react-native-gesture-handler';
import { createNavigationContainerRef } from '@react-navigation/native';
import { openDatabase } from 'react-native-sqlite-storage';
import { createStackNavigator } from '@react-navigation/stack';

//Database connection starts here
const okCallback = () => {
  console.log('Connected to DB');
};
const errorCallback = (error: any) => {
  console.log('DB connection error', error);
};
const db = openDatabase({ name: 'dictionary.db' }, okCallback, errorCallback);

//Function to open a Notebook from DB
const openNB = (nbName: String) => {
  if (!nbName) {
    Alert.alert('Notebook doesn\'t exist. Please create a Notebook first.');
    return;
  }
  else {
    return (
      <Notebook />
    );
  }
};

//Function to create a Notebook (table)
export let CreateNB = (nbName: String) => {
  const query = 'CREATE TABLE IF NOT EXISTS ' + nbName + '(word_id INTEGER PRIMARY KEY AUTOINCREMENT,word TEXT NOT NULL,translation TEXT NOT NULL,word_type TEXT NOT NULL, morph_type TEXT NOT NULL, description TEXT NOT NULL)';
  db.transaction((tx: any) => {
    tx.executeSql('CREATE TABLE IF NOT EXISTS ' + nbName + '(word_id INTEGER PRIMARY KEY,word TEXT NOT NULL,translation TEXT NOT NULL,word_type TEXT NOT NULL, morph_type TEXT NOT NULL, description TEXT NOT NULL)', [], (trans: any, results: any) => {
      console.log('nbName after input = ', nbName);
      console.log('Notebook created - ', nbName);
    },
      (error: any) => {
        console.log('nbName after input = ', nbName);
        console.log('Error creating notebook:', error);
      }
    );
  });
};

//Function to create a Notebook (table)
export let deleteNB = (nbName: String) => {
  const query = 'DROP TABLE ' + nbName;
  db.transaction((tx: any) => {
    tx.executeSql(query, [], (trans: any, results: any) => {
      console.log('Notebook deleted', nbName);
    },
      (error: any) => {
        console.log('Error deleting notebook:', error);
      }
    );
  });
};

//Function to display info on App
const AboutApp = () => {
  return (
    <Text>About App Info + User Manual</Text>
  );
};

//Testing DB function (not implemented in final app)
let testNB = () => {
  db.transaction((tx: any) => {
    tx.executeSql('INSERT INTO test (word) VALUES (testw)', [], (trans: any, results: any) => {
      console.log('Test notebook updated.');
    },
      (error: any) => {
        console.log('Error updating test notebook:', error);
      }
    );
  });
};


//Initializing bottom tabs & navigation ref
const Tab = createBottomTabNavigator();
export const navigationRef = createNavigationContainerRef();
export const customNavigate = (name: string) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never);
  }
  else {
    console.log('Navigation not rendered.');
  }
};
export const onMenuClick = (index: number) => {
  switch (index) {
    case 0:
    default:
      customNavigate('Words');
      break;

    case 1:
      customNavigate('Wallet');
      break;

    case 2:
      customNavigate('AddWords');
      break;

    case 3:
      customNavigate('Quiz');
      break;

    case 4:
      customNavigate('Settings');
      break;
  }
};

//Initializing Stack navigator
const Stack = createStackNavigator();

//Import bottom tab icons
const WordsIcon = (props: IconProps) => {
  return (
    <SvgXml
      width='32'
      height='32'
      xml={getCustomSvg(walletSvgBase, 'rgb(184,59,94)')}
    />
  );
};
const CardsIcon = (props: IconProps) => {
  return (
    <SvgXml
      width='32'
      height='32'
      xml={getCustomSvg(cardsSvgBase, 'rgb(184,59,94)')}
    />
  );
};
const PlusIcon = () => {
  return (
    <SvgXml
      width='44'
      height='44'
      xml={plusSvg}
      style={styles.plusIcon}
    />
  );
};
const PlayIcon = (props: IconProps) => {
  return (
    <SvgXml
      width='32'
      height='32'
      xml={getCustomSvg(challengeSvgBase, 'rgb(184,59,94)')}
    />
  );
};
const InfoIcon = (props: IconProps) => {
  return (
    <SvgXml
      width='32'
      height='32'
      xml={getCustomSvg(infoSvgBase, 'rgb(184,59,94)')}
    />
  );
};


//Notebook -> sectionWords, sectionCategory, sectionQuiz, sectionSettings + AddWords views
const Notebook = () => {

  return (
    <NavigationContainer ref={navigationRef}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={customTheme}>
        <Layout style={styles.stackNavigatorWrapper} >
          <Tab.Navigator
            initialRouteName='Words'
            screenOptions={{
              tabBarActiveTintColor: mainpink,
              tabBarInactiveTintColor: fifthColor,
              tabBarShowLabel: false,
              tabBarStyle: { position: 'absolute', height: 50 }
            }}
          >
            <Tab.Screen
              name='Words'
              component={Words}
              options={{
                tabBarLabel: 'Words',
                tabBarIcon: WordsIcon,
                tabBarAccessibilityLabel: 'Words',
                tabBarActiveBackgroundColor: lightblue,
                headerStyle: styles.coloredTopContainer,
                headerTintColor: white,
                headerTitleStyle: styles.whiteTextBold
              }}
            />
            <Tab.Screen
              name='Wallet'
              component={Category}
              options={{
                tabBarLabel: 'Category',
                tabBarIcon: CardsIcon,
                tabBarAccessibilityLabel: 'Category',
                tabBarActiveBackgroundColor: lightblue,
                headerStyle: styles.coloredTopContainer,
                headerTintColor: white,
                headerTitleStyle: styles.whiteTextBold
              }}
            />
            <Tab.Screen
              name='AddWords'
              component={AddWords}
              options={{
                tabBarIcon: PlusIcon,
                tabBarHideOnKeyboard: true,
                headerStyle: styles.coloredTopContainer,
                headerTintColor: white,
                headerTitleStyle: styles.whiteTextBold
              }}
            />
            <Tab.Screen
              name='Quiz'
              component={Quiz}
              options={{
                tabBarLabel: 'Quiz',
                tabBarIcon: PlayIcon,
                tabBarAccessibilityLabel: 'Quiz',
                tabBarActiveBackgroundColor: lightblue,
                headerStyle: styles.coloredTopContainer,
                headerTintColor: white,
                headerTitleStyle: styles.whiteTextBold
              }}
            />
            <Tab.Screen
              name='Settings'
              component={Settings}
              options={{
                tabBarLabel: 'Settings',
                tabBarIcon: InfoIcon,
                tabBarAccessibilityLabel: 'Settings',
                tabBarActiveBackgroundColor: lightblue,
                headerStyle: styles.coloredTopContainer,
                headerTintColor: white,
                headerTitleStyle: styles.whiteTextBold
              }}
            />
          </Tab.Navigator>
        </Layout>
      </ApplicationProvider>
    </NavigationContainer >
  );
};

//Homepage -> openNB, createNB, AboutApp
const Homepage = () => {

  const [a, setA] = useState(false);
  const showA = () => setA(true);
  const hideA = () => setA(false);

  const [b, setB] = useState(false);
  const showB = () => setB(true);
  const hideB = () => setB(false);

  const [nbName, setNBname] = useState('Demo');
  console.log('nbName before input = ', nbName);

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
                onChangeText={(newnbName: React.SetStateAction<string>) => setNBname(nbName)} />
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
              <Button mode='contained' style={styles.smallbutton} onPress={() => openNB}>
                Select
              </Button>
            </Modal>
          </Portal>
          <Mybutton title='About App' />
          <Button mode='contained' style={styles.smallbutton} onPress={() => onMenuClick(0)}>
            Shortcut
          </Button>
        </View>
      </Provider>
    </ImageBackground >
  );
};


//Defaul App() containing the stack navigation for both screens
export default () => {

  SplashScreen.hide();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={
          {
            headerShown: false,
            headerStatusBarHeight: 0,
            headerBackgroundContainerStyle: {
              backgroundColor: '#fcfcfc'
            }
          }
        }>
        <Stack.Screen name='Home' component={Homepage} />
        <Stack.Screen name='Notebook' component={Notebook} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
