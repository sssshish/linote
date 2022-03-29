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
const react_1 = __importStar(require("react"));
const styles_1 = require("./myStyles/styles");
const react_native_splash_screen_1 = __importDefault(require("react-native-splash-screen"));
const react_native_1 = require("react-native");
const MyButton_1 = __importDefault(require("./myComponents/dist/MyButton"));
const MyButton_2 = __importDefault(require("./myComponents/MyButton"));
const react_native_paper_1 = require("react-native-paper");
const MyTextInput_1 = __importDefault(require("./myComponents/MyTextInput"));
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const DB_VERSION = '6.0.1';
const SQLite = require('react-native-sqlite-storage');
const okCallback = () => {
    console.log('Connected to DB');
};
const errorCallback = (error) => {
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
const openNB = (nbName) => {
    if (!nbName) {
        react_native_1.Alert.alert('Notebook doesn\'t exist. Please create a Notebook first.');
        return;
    }
};
const AboutApp = () => {
};
exports.default = () => {
    let CreateNB = (nbName) => {
        const query = 'CREATE TABLE IF NOT EXISTS ' + nbName + '(word_id INTEGER PRIMARY KEY AUTOINCREMENT,word TEXT NOT NULL,translation TEXT NOT NULL,word_type TEXT NOT NULL, morph_type TEXT, description TEXT);';
        db.transaction((tx) => {
            tx.executeSql(query, [], (trans, results) => {
                console.log('Notebook created - ', nbName);
            }, (error) => {
                console.log('Error creating notebook', error);
            });
        });
    };
    react_native_splash_screen_1.default.hide();
    const [a, setA] = react_1.useState(false);
    const showA = () => setA(true);
    const hideA = () => setA(false);
    const [b, setB] = react_1.useState(false);
    const showB = () => setB(true);
    const hideB = () => setB(false);
    const [nbName, setNBname] = react_1.useState('');
    return (<react_native_1.ImageBackground style={styles_1.styles.imgBackground} resizeMode='contain' source={require('./assets/homepage.png')}>
      <react_native_paper_1.Provider>
        <react_native_1.View style={styles_1.styles.bottomZone}>
          <MyButton_2.default title='Create Notebook' customClick={showA}/>
          <react_native_paper_1.Portal>
            <react_native_paper_1.Modal visible={a} onDismiss={hideA} contentContainerStyle={styles_1.styles.inputDialog}>
              <MyTextInput_1.default label='Enter Notebook Name' onChangeText={(newnbName) => setNBname(newnbName)}/>
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
          <MyButton_2.default title='About App' customClick={AboutApp}/>
        </react_native_1.View>
      </react_native_paper_1.Provider>
    </react_native_1.ImageBackground>);
};