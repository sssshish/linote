"use strict";
/*Notebook.tsx contains the template for all Notebooks:
    1. Header (with Home icon which routes to App.tsx)
    2. Bottom Tabs
        2.1 List calls List.tsx (which will display all words)
        2.2 Category calls Category.tsx (which will display all categories)
        2.3 Quiz calls Quiz.tsx (which will display all quizes)
        2.4 Info calls Info.tsx (which will display info on NB)
        2.5 Plus icon calls Addwords.tsx (which will add new words to List and db)
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.AppContext = exports.navigationRef = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
var react_1 = require("react");
var eva = require("@eva-design/eva");
var components_1 = require("@ui-kitten/components");
var eva_icons_1 = require("@ui-kitten/eva-icons");
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var native_1 = require("@react-navigation/native");
// import AsyncStorage from '@react-native-async-storage/async-storage';
var Words_1 = require("../sectionList/Words");
var Category_1 = require("../sectionCategory/Category");
var Quiz_1 = require("../sectionQuiz/Quiz");
var Info_1 = require("../sectionInfo/Info");
var customTheme_1 = require("../myUtils/customTheme");
var styles_1 = require("../myStyles/styles");
var AddWords_1 = require("./AddWords");
var react_native_svg_1 = require("react-native-svg");
var customIcons_1 = require("../myUtils/customIcons");
//Database connection code starts here
var DB_VERSION = '6.0.1';
var SQLite = require('react-native-sqlite-storage');
var okCallback = function () {
    console.log('connected to DB');
};
var errorCallback = function (error) {
    console.log('DB connection error', error);
};
var okDeletionCallback = function () {
    console.log('I deleted the database');
    SQLite.openDatabase({ name: 'dictionary.db', createFromLocation: 1 }, okCallback, errorCallback);
};
var errorDeletionCallback = function (error) {
    console.log('Error while deleting DB', error);
};
var db = SQLite.openDatabase({ name: 'dictionary.db', createFromLocation: 2 }, okCallback, errorCallback);
//Bottom Tabs
var Tab = bottom_tabs_1.createBottomTabNavigator();
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
var WordsIcon = function (props) {
    return (react_1["default"].createElement(react_native_svg_1.SvgXml, { width: '32', height: '32', xml: customIcons_1.getCustomSvg(customIcons_1.walletSvgBase, 'rgb(184,59,94)') }));
};
var CardsIcon = function (props) {
    return (react_1["default"].createElement(react_native_svg_1.SvgXml, { width: '32', height: '32', xml: customIcons_1.getCustomSvg(customIcons_1.cardsSvgBase, 'rgb(184,59,94)') }));
};
var PlusIcon = function () {
    return (react_1["default"].createElement(react_native_svg_1.SvgXml, { width: '44', height: '44', xml: customIcons_1.plusSvg, style: styles_1.styles.plusIcon }));
};
var PlayIcon = function (props) {
    return (react_1["default"].createElement(react_native_svg_1.SvgXml, { width: '32', height: '32', xml: customIcons_1.getCustomSvg(customIcons_1.challengeSvgBase, 'rgb(184,59,94)') }));
};
var InfoIcon = function (props) {
    return (react_1["default"].createElement(react_native_svg_1.SvgXml, { width: '32', height: '32', xml: customIcons_1.getCustomSvg(customIcons_1.infoSvgBase, 'rgb(184,59,94)') }));
};
//NavigationRef
exports.navigationRef = react_1["default"].createRef();
var customNavigate = function (route) {
    var _a;
    (_a = exports.navigationRef.current) === null || _a === void 0 ? void 0 : _a.navigate(route);
};
exports.AppContext = react_1["default"].createContext({});
var Homepage = function () {
    var _a = react_1.useState(0), selectedIndex = _a[0], setSelectedIndex = _a[1];
    var onMenuClick = function (index) {
        switch (index) {
            case 0:
            default:
                customNavigate('words');
                break;
            case 1:
                customNavigate('category');
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
    var appData = {
        selectedIndex: 0,
        deviceNotchSize: 0,
        db: undefined,
        customNavigate: customNavigate,
        onMenuClick: onMenuClick
    };
    return (react_1["default"].createElement(native_1.NavigationContainer, { ref: exports.navigationRef },
        react_1["default"].createElement(components_1.IconRegistry, { icons: eva_icons_1.EvaIconsPack }),
        react_1["default"].createElement(components_1.ApplicationProvider, __assign({}, eva, { theme: customTheme_1.customTheme }),
            react_1["default"].createElement(components_1.Layout, { style: styles_1.styles.stackNavigatorWrapper },
                react_1["default"].createElement(Tab.Navigator, { initialRouteName: 'Words', screenOptions: {
                        tabBarActiveTintColor: styles_1.mainpink,
                        tabBarInactiveTintColor: styles_1.fifthColor,
                        tabBarShowLabel: false,
                        tabBarStyle: { position: 'absolute', height: 50 }
                    } },
                    react_1["default"].createElement(Tab.Screen, { name: 'Words', component: Words_1.Words, options: {
                            tabBarLabel: 'Words',
                            tabBarIcon: WordsIcon,
                            tabBarAccessibilityLabel: 'Words',
                            tabBarActiveBackgroundColor: styles_1.lightblue,
                            headerStyle: styles_1.styles.coloredTopContainer,
                            headerTintColor: styles_1.white,
                            headerTitleStyle: styles_1.styles.whiteTextBold
                        } }),
                    react_1["default"].createElement(Tab.Screen, { name: 'Wallet', component: Category_1.Category, options: {
                            tabBarLabel: 'Category',
                            tabBarIcon: CardsIcon,
                            tabBarAccessibilityLabel: 'Category',
                            tabBarActiveBackgroundColor: styles_1.lightblue,
                            headerStyle: styles_1.styles.coloredTopContainer,
                            headerTintColor: styles_1.white,
                            headerTitleStyle: styles_1.styles.whiteTextBold
                        } }),
                    react_1["default"].createElement(Tab.Screen, { name: 'New word', component: AddWords_1["default"], options: {
                            tabBarIcon: PlusIcon,
                            tabBarHideOnKeyboard: true,
                            headerStyle: styles_1.styles.coloredTopContainer,
                            headerTintColor: styles_1.white,
                            headerTitleStyle: styles_1.styles.whiteTextBold
                        } }),
                    react_1["default"].createElement(Tab.Screen, { name: 'Quiz', component: Quiz_1.Quiz, options: {
                            tabBarLabel: 'Quiz',
                            tabBarIcon: PlayIcon,
                            tabBarAccessibilityLabel: 'Quiz',
                            tabBarActiveBackgroundColor: styles_1.lightblue,
                            headerStyle: styles_1.styles.coloredTopContainer,
                            headerTintColor: styles_1.white,
                            headerTitleStyle: styles_1.styles.whiteTextBold
                        } }),
                    react_1["default"].createElement(Tab.Screen, { name: 'Settings', component: Info_1.Settings, options: {
                            tabBarLabel: 'Settings',
                            tabBarIcon: InfoIcon,
                            tabBarAccessibilityLabel: 'Settings',
                            tabBarActiveBackgroundColor: styles_1.lightblue,
                            headerStyle: styles_1.styles.coloredTopContainer,
                            headerTintColor: styles_1.white,
                            headerTitleStyle: styles_1.styles.whiteTextBold
                        } }))))));
};
exports["default"] = Homepage;
