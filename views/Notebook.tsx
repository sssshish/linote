/*Notebook.tsx contains the template for all Notebooks:
    1. Header (with Home icon which routes to App.tsx)
    2. Bottom Tabs
        2.1 List calls List.tsx (which will display all words)
        2.2 Category calls Category.tsx (which will display all categories)
        2.3 Quiz calls Quiz.tsx (which will display all quizes)
        2.4 Info calls Info.tsx (which will display info on NB)
        2.5 Plus icon calls Addwords.tsx (which will add new words to List and db)
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
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { List } from '../sectionList/Words';
import { Wallet } from '../sectionCategory/Category';
import { Quiz } from '../sectionQuiz/Quiz';
import { Settings } from '../sectionInfo/Info';
import { customTheme } from '../myUtils/customTheme';
import { fifthColor, lightblue, mainpink, white, black, styles } from '../myStyles/styles';
import AddWords from './AddWords';
import { SvgXml } from 'react-native-svg';
import { plusSvg, challengeSvgBase, walletSvgBase, infoSvgBase, getCustomSvg, cardsSvgBase } from '../myUtils/customIcons';
import ViewWord from '../sectionList/ViewWord';

//Database connection code starts here

const DB_VERSION = '6.0.1';

const SQLite = require('react-native-sqlite-storage');

const okCallback = () => {
    console.log('connected to DB');
};

const errorCallback = (error: any) => {
    console.log('DB connection error', error);
};

const okDeletionCallback = () => {
    console.log('I deleted the database');
    SQLite.openDatabase({ name: 'dictionary.db', createFromLocation: 1 }, okCallback, errorCallback);
};

const errorDeletionCallback = (error: any) => {
    console.log('Error while deleting DB', error);
};

const db = SQLite.openDatabase({ name: 'dictionary.db', createFromLocation: 2 }, okCallback, errorCallback);


//Bottom Tabs
const Tab = createBottomTabNavigator();
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


//Icons
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

//NavigationRef
export const navigationRef = React.createRef() as any;
const customNavigate = (route: string) => {
    navigationRef.current?.navigate(route);
};

//appdata
type TAppData = {
    // wordsWallet: TWordsWallet;
    // decksData: TDecks;
    selectedIndex: number;
    // hasShownAnimation: boolean;
    deviceNotchSize: number;
    db: any; // TODO: not sure if we can type here
    customNavigate: (route: string) => void;
    // setHasShownAnimation: (value: boolean) => void;
    onMenuClick: (index: number) => void;
    // setWordsWallet: ( value: TWordsWallet ) => void;
    // setDecksData: ( value: TDecks ) => void;
    // storeData: ( value: TWordsWallet ) => Promise<void>;
    // storeDecksData: ( value: TDecks ) => Promise<void>;
    // addSingleWord: ( word: TSingleWord ) => void;
    // addSingleDeck: ( deck: TDeck ) => void;
    // updateSingleDeck: ( deck: TDeck, deckKey: number ) => void;
    // markWordAsMastered: ( word: TSingleWord, deckKey: number, isMastered: boolean ) => void;
    // removeSingleDeck: (deckKey: number) => void;
    // increaseTapsCount: () => void;
};

export const AppContext = React.createContext({} as TAppData);

const Homepage = () => {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const onMenuClick = (index: number) => {
        switch (index) {
            case 0:
            default:
                customNavigate('list');
                break;

            case 1:
                customNavigate('wallet');
                break;

            case 2:
                customNavigate('add');
                break;

            case 3:
                customNavigate('quiz');
                break;

            case 4:
                customNavigate('settings');
                break;
        }

        setSelectedIndex(index);
    };

    const appData: TAppData = {
        selectedIndex: 0,
        deviceNotchSize: 0,
        db: undefined,
        customNavigate,
        onMenuClick
    };


    return (
        <NavigationContainer ref={navigationRef}>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={customTheme}>
                <Layout style={styles.stackNavigatorWrapper} >
                    <Tab.Navigator
                        initialRouteName='List'
                        screenOptions={{
                            tabBarActiveTintColor: mainpink,
                            tabBarInactiveTintColor: fifthColor,
                            tabBarShowLabel: false,
                            tabBarStyle: { position: 'absolute', height: 50 }
                        }}
                    >
                        <Tab.Screen
                            name='List'
                            component={ViewWord}
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
                            component={Wallet}
                            options={{
                                tabBarLabel: 'Wallet',
                                tabBarIcon: CardsIcon,
                                tabBarAccessibilityLabel: 'Wallet',
                                tabBarActiveBackgroundColor: lightblue,
                                headerStyle: styles.coloredTopContainer,
                                headerTintColor: white,
                                headerTitleStyle: styles.whiteTextBold

                            }}
                        />
                        <Tab.Screen
                            name='New word'
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

export default Homepage;
