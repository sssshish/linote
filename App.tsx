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

const textDB = () => {
  const query = ``
  db.transaction((tx: any) => {
  tx.executeSql(query, [], (trans: any, results: any) => {
      console.log('Query successfully executed.');
  },
  (error: any) => {
      console.log('Error', error);
  });
}

*/

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider, IconRegistry, Layout, IconProps, Icon
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
import { plusSvg, challengeSvgBase, walletSvgBase, infoSvgBase, getCustomSvg, cardsSvgBase, closeX } from './myUtils/customIcons';
import SplashScreen from 'react-native-splash-screen';
import { Alert, ImageBackground, SafeAreaView, View } from 'react-native';
import Mybutton from './myComponents/MyButton';
import { Button, IconButton, Modal, Portal, Provider, Text, TextInput } from 'react-native-paper';
import MyTextInput from './myComponents/MyTextInput';
import { FlatList } from 'react-native-gesture-handler';
import { createNavigationContainerRef } from '@react-navigation/native';
import { enablePromise, openDatabase } from 'react-native-sqlite-storage';
import { createStackNavigator } from '@react-navigation/stack';
import SQLite from 'react-native-sqlite-storage';

//Database connection starts here

const okCallback = () => {
  console.log('Connected to DB');
};
const errorCallback = (error: any) => {
  console.log('DB connection error', error);
};

const db = openDatabase({ name: 'linote', location: 'default' }, okCallback, errorCallback);


//Function to create a Notebook (table)
export const CreateNB = (nbName: String) => {
  const query = 'CREATE TABLE IF NOT EXISTS ' + nbName + '(word_id INTEGER PRIMARY KEY AUTOINCREMENT,word TEXT NOT NULL,translation TEXT NOT NULL,word_type TEXT NOT NULL, morph_type TEXT NOT NULL, description TEXT NOT NULL)';
  db.transaction((tx: any) => {
    tx.executeSql(query, [], (trans: any, results: any) => {
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

//Function to delete a Notebook (table)
export const deleteNB = (nbName: String) => {
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

export const openNB = () => {

};

//Function to display info on App
const AboutApp = ({ navigation }: { navigation: any }) => {
  return (
    <Layout style={styles.infoContainer}>
      <Text style={[styles.biggerText, styles.text, styles.pinkText]}>
        Linote
      </Text>
      <Layout style={styles.commonDivider} />
      <Text style={[styles.smallerText, styles.leftAlignedText, styles.text]}> Linote is a note-taking mobile app that helps you create your own dictionaries and practice your words whenever and wherever you want. It requires no internet connection or special storage permissions. You can even create notes on languages that YOU have made up.</Text>
    </Layout>
  );
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
// const closeIcon = (props: IconProps) => {
//   return (
//     <SvgXml
//       width='32'
//       height='32'
//       xml={getCustomSvg(closeX, 'rgb(184,59,94)')}
//     />
//   );
// };


//Notebook -> sectionWords, sectionCategory, sectionQuiz, sectionSettings + AddWords views

const Notebook = ({ navigation }: { navigation: any }) => {

  return (
    <NavigationContainer ref={navigationRef} independent={true} >
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
const Homepage = ({ navigation }: { navigation: any }) => {

  const [a, setA] = useState(false);
  const showA = () => setA(true);
  const hideA = () => setA(false);

  const [b, setB] = useState(false);
  const showB = () => setB(true);
  const hideB = () => setB(false);

  const [c, setC] = useState(false);
  const showC = () => setC(true);
  const hideC = () => setC(false);

  const [nbName, setNBname] = useState('');
  const [currentNB, setcurrentNB] = useState('');

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
                // eslint-disable-next-line @typescript-eslint/no-shadow
                onChangeText={(nbName: React.SetStateAction<string>) => setNBname(nbName)} />
              <Button mode='contained' style={styles.smallbutton} onPress={
                () => {
                  const query = `CREATE TABLE IF NOT EXISTS ' ${nbName} '(word_id INTEGER PRIMARY KEY AUTOINCREMENT,word TEXT NOT NULL,translation TEXT NOT NULL,word_type TEXT NOT NULL, morph_type TEXT NOT NULL, description TEXT NOT NULL)`;
                  db.transaction((tx: any) => {
                    tx.executeSql(query, [], (trans: any, results: any) => {
                      console.log('Notebook created - ', nbName);
                    },
                      (error: any) => {
                        console.log('nbName after input = ', nbName);
                        console.log('Error creating notebook:', error);
                      }
                    );
                  });
                }
              }>
                Create
              </Button>
            </Modal>
          </Portal>
          <Mybutton title='Open Notebook' customClick={showB} />
          <Portal>
            <Modal visible={b} onDismiss={hideB} contentContainerStyle={styles.bottomDialog}>
              <FlatList
                style={styles.createDeckList}
                contentContainerStyle={styles.createDeckListContainer}
                data={undefined}
                renderItem={undefined}
              />
              <Button mode='contained' style={styles.smallbutton} onPress={() => { currentNB ? Alert.alert('No notebook selected. Please create a Notebook first.') : navigation.navigate('Notebook'); }
              }>
                Select
              </Button>
            </Modal>
          </Portal>
          <Mybutton title='About App' customClick={showC} />
          <Portal>
            <Modal visible={c} onDismiss={hideC} style={styles.infoDialog}>
              <Text style={[styles.biggerText, styles.text, styles.pinkText]}>
                Linote
              </Text>
              <Text style={[styles.smallerText, styles.leftAlignedText, styles.text]}> Linote is a note-taking mobile app that helps you create your own dictionaries and practice your words whenever and wherever you want. It requires no internet connection or special storage permissions. You can even create notes on languages that YOU have made up.</Text>
            </Modal>
          </Portal>
        </View>
      </Provider>
    </ImageBackground >
  );
};


//Defaul App() containing the stack navigation for both screens
export default () => {

  SplashScreen.hide();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Homepage} options={{ headerShown: false }} />
        <Stack.Screen name='Notebook' component={Notebook} />
        <Stack.Screen name='AboutApp' component={AboutApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
