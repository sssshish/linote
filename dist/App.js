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
exports.AppContext = exports.navigationRef = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
//import statments start here
const react_1 = __importStar(require("react"));
const eva = __importStar(require("@eva-design/eva"));
const components_1 = require("@ui-kitten/components");
const eva_icons_1 = require("@ui-kitten/eva-icons");
const bottom_tabs_1 = require("@react-navigation/bottom-tabs");
const native_1 = require("@react-navigation/native");
const Category_1 = require("./sectionCategory/Category");
const Quiz_1 = require("./sectionQuiz/Quiz");
const Info_1 = require("./sectionInfo/Info");
const customTheme_1 = require("./myUtils/customTheme");
const styles_1 = require("./myStyles/styles");
const AddWords_1 = __importDefault(require("./views/AddWords"));
const react_native_svg_1 = require("react-native-svg");
const customIcons_1 = require("./myUtils/customIcons");
const ViewWord_1 = __importDefault(require("./sectionList/ViewWord"));
//Database connection code starts here
const DB_VERSION = '6.0.1';
const SQLite = require('react-native-sqlite-storage');
const okCallback = () => {
    console.log('connected to DB');
};
const errorCallback = (error) => {
    console.log('DB connection error', error);
};
const okDeletionCallback = () => {
    console.log('I deleted the database');
    SQLite.openDatabase({ name: 'dictionary.db', createFromLocation: 1 }, okCallback, errorCallback);
};
const errorDeletionCallback = (error) => {
    console.log('Error while deleting DB', error);
};
const db = SQLite.openDatabase({ name: 'dictionary.db', createFromLocation: 2 }, okCallback, errorCallback);
//Bottom Tabs
const Tab = bottom_tabs_1.createBottomTabNavigator();
//Icons
const ListIcon = (props) => {
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
//NavigationRef
exports.navigationRef = react_1.default.createRef();
const customNavigate = (route) => {
    exports.navigationRef.current?.navigate(route);
};
exports.AppContext = react_1.default.createContext({});
function App() {
    const [selectedIndex, setSelectedIndex] = react_1.useState(0);
    const onMenuClick = (index) => {
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
    const appData = {
        selectedIndex: 0,
        deviceNotchSize: 0,
        db: undefined,
        customNavigate,
        onMenuClick
    };
    return (<native_1.NavigationContainer ref={exports.navigationRef}>
      <components_1.IconRegistry icons={eva_icons_1.EvaIconsPack}/>
      <components_1.ApplicationProvider {...eva} theme={customTheme_1.customTheme}>
        <components_1.Layout style={styles_1.styles.stackNavigatorWrapper}>
          <Tab.Navigator initialRouteName='List' screenOptions={{
        tabBarActiveTintColor: styles_1.mainpink,
        tabBarInactiveTintColor: styles_1.fifthColor,
        tabBarShowLabel: false,
        tabBarStyle: { position: 'absolute', height: 50 }
    }}>
            <Tab.Screen name='List' component={ViewWord_1.default} options={{
        tabBarLabel: 'List',
        tabBarIcon: ListIcon,
        tabBarAccessibilityLabel: 'List',
        tabBarActiveBackgroundColor: styles_1.lightblue,
        headerStyle: styles_1.styles.coloredTopContainer,
        headerTintColor: styles_1.white,
        headerTitleStyle: styles_1.styles.whiteTextBold
    }}/>
            <Tab.Screen name='Wallet' component={Category_1.Wallet} options={{
        tabBarLabel: 'Wallet',
        tabBarIcon: CardsIcon,
        tabBarAccessibilityLabel: 'Wallet',
        tabBarActiveBackgroundColor: styles_1.lightblue,
        headerStyle: styles_1.styles.coloredTopContainer,
        headerTintColor: styles_1.white,
        headerTitleStyle: styles_1.styles.whiteTextBold
    }}/>
            <Tab.Screen name='New word' component={AddWords_1.default} options={{
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
}
exports.default = App;