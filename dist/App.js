"use strict";
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
exports.onMenuClick = exports.customNavigate = exports.navigationRef = void 0;
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

Homepage() contains the template for all Notebooks:
    1. Header (with Home icon which routes to App.tsx)
    2. Bottom Tabs
        2.1 List calls List.tsx (which will display all words)
        2.2 Category calls Category.tsx (which will display all categories)
        2.3 Quiz calls Quiz.tsx (which will display all quizes)
        2.4 Info calls Info.tsx (which will display info on NB)
        2.5 Plus icon calls Addwords.tsx (which will add new words to List and db)
*/
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
const AddWords_1 = __importDefault(require("./views/AddWords"));
const react_native_svg_1 = require("react-native-svg");
const customIcons_1 = require("./myUtils/customIcons");
const react_native_splash_screen_1 = __importDefault(require("react-native-splash-screen"));
const react_native_1 = require("react-native");
const MyButton_1 = __importDefault(require("./myComponents/dist/MyButton"));
const MyButton_2 = __importDefault(require("./myComponents/MyButton"));
const react_native_paper_1 = require("react-native-paper");
const MyTextInput_1 = __importDefault(require("./myComponents/MyTextInput"));
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const native_2 = require("@react-navigation/native");
const react_native_sqlite_storage_1 = require("react-native-sqlite-storage");
const stack_1 = require("@react-navigation/stack");
const okCallback = () => {
    console.log('Connected to DB');
};
const errorCallback = (error) => {
    console.log('DB connection error', error);
};
const okDeletionCallback = () => {
    console.log('I deleted the database');
};
const errorDeletionCallback = (error) => {
    console.log('Error while deleting DB', error);
};
const db = react_native_sqlite_storage_1.openDatabase({ name: 'dictionary.db' }, okCallback, errorCallback);
const openNB = (nbName) => {
    if (!nbName) {
        react_native_1.Alert.alert('Notebook doesn\'t exist. Please create a Notebook first.');
        return;
    }
};
const AboutApp = () => {
    return (<react_native_paper_1.Text>About App Info + User Manual</react_native_paper_1.Text>);
};
let CreateNB = (nbName) => {
    const query = 'CREATE TABLE IF NOT EXISTS ' + nbName + '(word_id INTEGER PRIMARY KEY AUTOINCREMENT,word TEXT NOT NULL,translation TEXT NOT NULL,word_type TEXT NOT NULL, morph_type TEXT NOT NULL, description TEXT NOT NULL)';
    db.transaction((tx) => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS ' + nbName + '(word_id INTEGER PRIMARY KEY,word TEXT NOT NULL,translation TEXT NOT NULL,word_type TEXT NOT NULL, morph_type TEXT NOT NULL, description TEXT NOT NULL)', [], (trans, results) => {
            console.log('nbName after input = ', nbName);
            console.log('Notebook created - ', nbName);
        }, (error) => {
            console.log('nbName after input = ', nbName);
            console.log('Error creating notebook:', error);
        });
    });
};
let testNB = () => {
    db.transaction((tx) => {
        tx.executeSql('INSERT INTO test (word) VALUES (testw)', [], (trans, results) => {
            console.log('Test notebook updated.');
        }, (error) => {
            console.log('Error updating test notebook:', error);
        });
    });
};
//Bottom Tabs
const Tab = bottom_tabs_1.createBottomTabNavigator();
//Stack Screens
const Stack = stack_1.createStackNavigator();
//Bottom tab icons
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
const Notebook = () => {
    return (<native_1.NavigationContainer ref={exports.navigationRef}>
      <components_1.IconRegistry icons={eva_icons_1.EvaIconsPack}/>
      <components_1.ApplicationProvider {...eva} theme={customTheme_1.customTheme}>
        <components_1.Layout style={styles_1.styles.stackNavigatorWrapper}>
          <Tab.Navigator initialRouteName='Words' screenOptions={{
        tabBarActiveTintColor: styles_1.mainpink,
        tabBarInactiveTintColor: styles_1.fifthColor,
        tabBarShowLabel: false,
        tabBarStyle: { position: 'absolute', height: 50 }
    }}>
            <Tab.Screen name='Words' component={Words_1.Words} options={{
        tabBarLabel: 'Words',
        tabBarIcon: WordsIcon,
        tabBarAccessibilityLabel: 'Words',
        tabBarActiveBackgroundColor: styles_1.lightblue,
        headerStyle: styles_1.styles.coloredTopContainer,
        headerTintColor: styles_1.white,
        headerTitleStyle: styles_1.styles.whiteTextBold
    }}/>
            <Tab.Screen name='Wallet' component={Category_1.Category} options={{
        tabBarLabel: 'Category',
        tabBarIcon: CardsIcon,
        tabBarAccessibilityLabel: 'Category',
        tabBarActiveBackgroundColor: styles_1.lightblue,
        headerStyle: styles_1.styles.coloredTopContainer,
        headerTintColor: styles_1.white,
        headerTitleStyle: styles_1.styles.whiteTextBold
    }}/>
            <Tab.Screen name='AddWords' component={AddWords_1.default} options={{
        tabBarIcon: PlusIcon,
        tabBarHideOnKeyboard: true,
        headerStyle: styles_1.styles.coloredTopContainer,
        headerTintColor: styles_1.white,
        headerTitleStyle: styles_1.styles.whiteTextBold
    }}/>
            <Tab.Screen name='Quiz' component={Quiz_1.Quiz} options={{
        tabBarLabel: 'Quiz',
        tabBarIcon: PlayIcon,
        tabBarAccessibilityLabel: 'Quiz',
        tabBarActiveBackgroundColor: styles_1.lightblue,
        headerStyle: styles_1.styles.coloredTopContainer,
        headerTintColor: styles_1.white,
        headerTitleStyle: styles_1.styles.whiteTextBold
    }}/>
            <Tab.Screen name='Settings' component={Info_1.Settings} options={{
        tabBarLabel: 'Settings',
        tabBarIcon: InfoIcon,
        tabBarAccessibilityLabel: 'Settings',
        tabBarActiveBackgroundColor: styles_1.lightblue,
        headerStyle: styles_1.styles.coloredTopContainer,
        headerTintColor: styles_1.white,
        headerTitleStyle: styles_1.styles.whiteTextBold
    }}/>
          </Tab.Navigator>
        </components_1.Layout>
      </components_1.ApplicationProvider>
    </native_1.NavigationContainer>);
};
const Homepage = () => {
    const [a, setA] = react_1.useState(false);
    const showA = () => setA(true);
    const hideA = () => setA(false);
    const [b, setB] = react_1.useState(false);
    const showB = () => setB(true);
    const hideB = () => setB(false);
    const [nbName, setNBname] = react_1.useState('Demo');
    console.log('nbName before input = ', nbName);
    return (<react_native_1.ImageBackground style={styles_1.styles.imgBackground} resizeMode='contain' source={require('./assets/homepage.png')}>
      <react_native_paper_1.Provider>
        <react_native_1.View style={styles_1.styles.bottomZone}>
          <MyButton_2.default title='Create Notebook' customClick={showA}/>
          <react_native_paper_1.Portal>
            <react_native_paper_1.Modal visible={a} onDismiss={hideA} contentContainerStyle={styles_1.styles.inputDialog}>
              <MyTextInput_1.default label='Enter Notebook Name' onChangeText={(newnbName) => setNBname(nbName)}/>
              <react_native_paper_1.Button mode='contained' style={styles_1.styles.smallbutton} onPress={() => CreateNB(nbName)}>
                Create
              </react_native_paper_1.Button>
            </react_native_paper_1.Modal>
          </react_native_paper_1.Portal>
          <MyButton_2.default title='Open Notebook' customClick={showB}/>
          <react_native_paper_1.Portal>
            <react_native_paper_1.Modal visible={b} onDismiss={hideB} contentContainerStyle={styles_1.styles.bottomDialog}>
              <react_native_paper_1.Text style={styles_1.styles.addWordInput}>Select a Notebook</react_native_paper_1.Text>
              <react_native_gesture_handler_1.ScrollView>
                <react_native_paper_1.Text style={styles_1.styles.searchResultsContainer}>Notebook List displayed here</react_native_paper_1.Text>
              </react_native_gesture_handler_1.ScrollView>
              <MyButton_1.default mode='contained' styles={[styles_1.styles.smallbutton, styles_1.styles.createDeckCtaButton]}>
                Select
              </MyButton_1.default>
            </react_native_paper_1.Modal>
          </react_native_paper_1.Portal>
          <MyButton_2.default title='About App'/>
          <react_native_paper_1.Button mode='contained' style={styles_1.styles.smallbutton} onPress={() => exports.onMenuClick(0)}>
            Shortcut
          </react_native_paper_1.Button>
        </react_native_1.View>
      </react_native_paper_1.Provider>
    </react_native_1.ImageBackground>);
};
exports.default = () => {
    react_native_splash_screen_1.default.hide();
    return (<Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Homepage}/>
      <Stack.Screen name='Notebook' component={Notebook}/>
    </Stack.Navigator>);
};