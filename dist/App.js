"use strict";
/* eslint-disable react-native/no-inline-styles */
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onMenuClick = exports.customNavigate = exports.navigationRef = exports.deleteNB = exports.CreateNB = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const react_1 = __importStar(require("react"));
const eva = __importStar(require("@eva-design/eva"));
const components_1 = require("@ui-kitten/components");
const eva_icons_1 = require("@ui-kitten/eva-icons");
const bottom_tabs_1 = require("@react-navigation/bottom-tabs");
const native_1 = require("@react-navigation/native");
const Words_1 = require("./sectionList/Words");
const Category_1 = require("./sectionCategory/Category");
const Quiz_1 = require("./sectionQuiz/Quiz");
const Info_1 = require("./sectionInfo/Info");
const customTheme_1 = require("./myUtils/customTheme");
const styles_1 = require("./myStyles/styles");
const react_native_svg_1 = require("react-native-svg");
const customIcons_1 = require("./myUtils/customIcons");
const react_native_splash_screen_1 = __importDefault(require("react-native-splash-screen"));
const react_native_1 = require("react-native");
const MyButton_1 = __importDefault(require("./myComponents/MyButton"));
const react_native_paper_1 = require("react-native-paper");
const MyTextInput_1 = __importDefault(require("./myComponents/MyTextInput"));
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const native_2 = require("@react-navigation/native");
const stack_1 = require("@react-navigation/stack");
const AddComp_1 = __importDefault(require("./views/AddComp"));
//Database connection starts here
const okCallback = () => {
    console.log('Connected to DB');
};
const errorCallback = (error) => {
    console.log('DB connection error', error);
};
const SQLite = require('react-native-sqlite-storage');
const db = SQLite.openDatabase({ name: 'linote.db', createFromLocation: 2 }, okCallback, errorCallback);
//Function to create a Notebook (table)
exports.CreateNB = (nbName) => {
    const query = 'CREATE TABLE IF NOT EXISTS ' + nbName + '(word_id INTEGER PRIMARY KEY AUTOINCREMENT,word TEXT NOT NULL,translation TEXT NOT NULL,word_type TEXT NOT NULL, morph_type TEXT NOT NULL, description TEXT NOT NULL)';
    db.transaction((tx) => {
        tx.executeSql(query, [], (trans, results) => {
            console.log('nbName after input = ', nbName);
            console.log('Notebook created - ', nbName);
        }, (error) => {
            console.log('nbName after input = ', nbName);
            console.log('Error creating notebook:', error);
        });
    });
};
//Function to delete a Notebook (table)
exports.deleteNB = (nbName) => {
    const query = 'DROP TABLE ' + nbName;
    db.transaction((tx) => {
        tx.executeSql(query, [], (trans, results) => {
            console.log('Notebook deleted', nbName);
        }, (error) => {
            console.log('Error deleting notebook:', error);
        });
    });
};
//Function to display info on App
const AboutApp = ({ navigation }) => {
    return (<components_1.Layout style={styles_1.styles.infoContainer}>
      <react_native_paper_1.Text style={[styles_1.styles.biggerText, styles_1.styles.text, styles_1.styles.pinkText]}>
        Linote
      </react_native_paper_1.Text>
      <components_1.Layout style={styles_1.styles.commonDivider}/>
      <react_native_paper_1.Text style={[styles_1.styles.smallerText, styles_1.styles.leftAlignedText, styles_1.styles.text]}> Linote is a note-taking mobile app that helps you create your own dictionaries and practice your words whenever and wherever you want. It requires no internet connection or special storage permissions. You can even create notes on languages that YOU have made up.</react_native_paper_1.Text>
    </components_1.Layout>);
};
//Initializing bottom tabs & navigation ref
const Tab = bottom_tabs_1.createBottomTabNavigator();
exports.navigationRef = native_2.createNavigationContainerRef();
exports.customNavigate = (name) => {
    if (exports.navigationRef.isReady()) {
        exports.navigationRef.navigate(name);
    }
    else {
        console.log('Navigation not rendered.');
    }
};
exports.onMenuClick = (index) => {
    switch (index) {
        case 0:
        default:
            exports.customNavigate('Words');
            break;
        case 1:
            exports.customNavigate('Wallet');
            break;
        case 2:
            exports.customNavigate('AddWords');
            break;
        case 3:
            exports.customNavigate('Quiz');
            break;
        case 4:
            exports.customNavigate('Settings');
            break;
    }
};
//Initializing Stack navigator
const Stack = stack_1.createStackNavigator();
//Import bottom tab icons
const WordsIcon = (props) => {
    return (<react_native_svg_1.SvgXml width='32' height='32' xml={customIcons_1.getCustomSvg(customIcons_1.walletSvgBase, 'rgb(184,59,94)')}/>);
};
const CardsIcon = (props) => {
    return (<react_native_svg_1.SvgXml width='32' height='32' xml={customIcons_1.getCustomSvg(customIcons_1.cardsSvgBase, 'rgb(184,59,94)')}/>);
};
const PlusIcon = () => {
    return (<react_native_svg_1.SvgXml width='44' height='44' xml={customIcons_1.plusSvg} style={styles_1.styles.plusIcon}/>);
};
const PlayIcon = (props) => {
    return (<react_native_svg_1.SvgXml width='32' height='32' xml={customIcons_1.getCustomSvg(customIcons_1.challengeSvgBase, 'rgb(184,59,94)')}/>);
};
const InfoIcon = (props) => {
    return (<react_native_svg_1.SvgXml width='32' height='32' xml={customIcons_1.getCustomSvg(customIcons_1.infoSvgBase, 'rgb(184,59,94)')}/>);
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
const Notebook = ({ navigation }) => {
    return (<native_1.NavigationContainer ref={exports.navigationRef} independent={true}>
      <components_1.IconRegistry icons={eva_icons_1.EvaIconsPack}/>
      <components_1.ApplicationProvider {...eva} theme={customTheme_1.customTheme}>
        <components_1.Layout style={styles_1.styles.stackNavigatorWrapper}>
          <Tab.Navigator initialRouteName='Words' screenOptions={{
        tabBarActiveTintColor: styles_1.mainpink,
        tabBarInactiveTintColor: styles_1.secondColor,
        tabBarStyle: { position: 'absolute', height: 50 }
    }}>
            <Tab.Screen name='Words' component={Words_1.Words} options={{
        tabBarLabel: 'Words',
        tabBarIcon: WordsIcon,
        tabBarAccessibilityLabel: 'Words',
        tabBarActiveBackgroundColor: styles_1.lightblue,
        tabBarShowLabel: true,
        headerShown: false
    }}/>
            <Tab.Screen name='Wallet' component={Category_1.Category} options={{
        tabBarLabel: 'Category',
        tabBarIcon: CardsIcon,
        tabBarAccessibilityLabel: 'Category',
        tabBarActiveBackgroundColor: styles_1.lightblue,
        tabBarShowLabel: true,
        headerShown: false
    }}/>
            <Tab.Screen name='New Word' component={AddComp_1.default} options={{
        tabBarIcon: PlusIcon,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerStyle: styles_1.styles.coloredTopContainer,
        headerTintColor: styles_1.white,
        headerTitleStyle: styles_1.styles.whiteTextBold
    }}/>
            <Tab.Screen name='Info' component={Info_1.Settings} options={{
        tabBarLabel: 'Settings',
        tabBarIcon: InfoIcon,
        tabBarAccessibilityLabel: 'Settings',
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: styles_1.lightblue,
        headerShown: false
    }}/>
            <Tab.Screen name='Quiz' component={Quiz_1.Quiz} options={{
        tabBarLabel: 'Quiz',
        tabBarIcon: PlayIcon,
        tabBarAccessibilityLabel: 'Quiz',
        tabBarActiveBackgroundColor: styles_1.lightblue,
        tabBarShowLabel: true,
        headerShown: false
    }}/>
          </Tab.Navigator>
        </components_1.Layout>
      </components_1.ApplicationProvider>
    </native_1.NavigationContainer>);
};
//Homepage -> openNB, createNB, AboutApp
const Homepage = ({ navigation }) => {
    const [a, setA] = react_1.useState(false);
    const showA = () => setA(true);
    const hideA = () => setA(false);
    const [b, setB] = react_1.useState(false);
    const showB = () => setB(true);
    const hideB = () => setB(false);
    const [c, setC] = react_1.useState(false);
    const showC = () => setC(true);
    const hideC = () => setC(false);
    const [nbName, setNBname] = react_1.useState('');
    const [currentNB, setcurrentNB] = react_1.useState('');
    let [flatListItems, setFlatListItems] = react_1.useState([]);
    const testNB = () => {
        const testQ = 'CREATE TABLE IF NOT EXISTS test(word_id INTEGER PRIMARY KEY AUTOINCREMENT,word TEXT NOT NULL,translation TEXT NOT NULL, pronounciation TEXT, description TEXT,complex TEXT, morpheme TEXT, graminfo TEXT, infotitle TEXT info TEXT)';
        db.transaction((tx) => {
            tx.executeSql(testQ, [], (trans, results) => {
                console.log('Test Notebook created');
            }, (error) => {
                console.log('Error creating test notebook:', error);
            });
        });
    };
    // db.transaction((tx) => {
    //   tx.executeSql(
    //     'SELECT * FROM sqlite_master where type=\'table\'',
    //     [],
    //     (_tx, _results) => {
    //       console.log('NB names loaded');
    //       var temp: any;
    //       for (let i = 0; i < _results.rows.length; ++i) { temp.push(_results.rows.item(i)); }
    //       setFlatListItems(temp);
    //       console.log(flatListItems);
    //     },
    //     (error: any) => {
    //       console.log('Error loading notebooks', error);
    //     }
    //   );
    // });
    return (<react_native_1.ImageBackground style={styles_1.styles.imgBackground} resizeMode='contain' source={require('./assets/homepage.png')}>
      <react_native_paper_1.Provider>
        <react_native_1.View style={styles_1.styles.bottomZone}>
          <MyButton_1.default title='Create Notebook' customClick={showA}/>
          <react_native_paper_1.Portal>
            <react_native_paper_1.Modal visible={a} onDismiss={hideA} contentContainerStyle={styles_1.styles.inputDialog}>
              <MyTextInput_1.default label='Enter Notebook Name' 
    // eslint-disable-next-line @typescript-eslint/no-shadow
    onChangeText={(nbName) => setNBname(nbName)}/>
              <react_native_paper_1.Button mode='contained' style={styles_1.styles.smallbutton} onPress={() => {
        const query = `CREATE TABLE IF NOT EXISTS ' ${nbName} '(word_id INTEGER PRIMARY KEY AUTOINCREMENT,word TEXT NOT NULL,translation TEXT NOT NULL,complex TEXT NOT NULL, morpheme TEXT NOT NULL, graminfo TEXT NOT NULL, description TEXT NOT NULL)`;
        db.transaction((tx) => {
            tx.executeSql(query, [], (trans, results) => {
                console.log('Notebook created - ', nbName);
            }, (error) => {
                console.log('nbName after input = ', nbName);
                console.log('Error creating notebook:', error);
            });
        });
    }}>
                Create
              </react_native_paper_1.Button>
            </react_native_paper_1.Modal>
          </react_native_paper_1.Portal>
          <MyButton_1.default title='Open Notebook' customClick={showB}/>
          <react_native_paper_1.Portal>
            <react_native_paper_1.Modal visible={b} onDismiss={hideB} contentContainerStyle={styles_1.styles.bottomDialog}>
              <react_native_paper_1.Text style={styles_1.styles.titleText}>Test</react_native_paper_1.Text>
              <react_native_gesture_handler_1.FlatList style={styles_1.styles.createDeckList} contentContainerStyle={styles_1.styles.createDeckListContainer} data={flatListItems} renderItem={undefined}/>
              <react_native_paper_1.Button mode='contained' style={styles_1.styles.smallbutton} onPress={() => { currentNB ? react_native_1.Alert.alert('No notebook selected. Please create a Notebook first.') : navigation.navigate('Notebook'); }}>
                Select
              </react_native_paper_1.Button>
            </react_native_paper_1.Modal>
          </react_native_paper_1.Portal>
          <MyButton_1.default title='About App' customClick={showC}/>
          <react_native_paper_1.Portal>
            <react_native_paper_1.Modal visible={c} onDismiss={hideC} style={styles_1.styles.infoDialog}>
              <react_native_paper_1.Text style={[{ fontSize: 40 }, styles_1.styles.text, styles_1.styles.pinkText]}>Linote</react_native_paper_1.Text>
              <react_native_1.View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <react_native_1.View style={{ flex: 1, height: 1, backgroundColor: styles_1.mainpink }}/>
                <react_native_1.View>
                  <react_native_paper_1.Text style={{ width: 50, textAlign: 'center', color: styles_1.mainpink }}>***</react_native_paper_1.Text>
                </react_native_1.View>
                <react_native_1.View style={{ flex: 1, height: 1, backgroundColor: styles_1.mainpink }}/>
              </react_native_1.View>
              <react_native_paper_1.Text style={[styles_1.styles.smallerText, styles_1.styles.textWithTopMargin, styles_1.styles.text, { textAlign: 'justify', paddingRight: '5%', paddingLeft: '5%' }]}> Linote is a note-taking mobile app that helps you create your own dictionaries and practice your words whenever and wherever you want. It requires no internet connection or special storage permissions. You can even create notes on languages that you have made up.</react_native_paper_1.Text>
              <react_native_1.View style={{ height: '4%' }}/>
              <react_native_paper_1.Text style={[styles_1.styles.smallerText, styles_1.styles.textWithTopMargin, styles_1.styles.text, { textAlign: 'justify', paddingRight: '5%', paddingLeft: '5%' }]}>
                Project Source Code:
              </react_native_paper_1.Text>
              <react_native_paper_1.Text onPress={() => react_native_1.Linking.openURL('https://github.com/s19036/linote')} style={[styles_1.styles.smallerText, styles_1.styles.textWithTopMargin, styles_1.styles.text, styles_1.styles.boldText, styles_1.styles.linkText, styles_1.styles.lightText, { textAlign: 'justify', paddingRight: '5%', paddingLeft: '5%' }]}>
                Github
              </react_native_paper_1.Text>
            </react_native_paper_1.Modal>
          </react_native_paper_1.Portal>
          <MyButton_1.default title='Open Demo Notebook' customClick={testNB}/>
        </react_native_1.View>
      </react_native_paper_1.Provider>
    </react_native_1.ImageBackground>);
};
//Defaul App() containing the stack navigation for both screens
exports.default = () => {
    react_native_splash_screen_1.default.hide();
    return (<native_1.NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Homepage}/>
        <Stack.Screen name='Notebook' component={Notebook}/>
      </Stack.Navigator>
    </native_1.NavigationContainer>);
};