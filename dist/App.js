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
const MyButton_1 = __importDefault(require("./myComponents/MyButton"));
const react_native_paper_1 = require("react-native-paper");
const MyTextInput_1 = __importDefault(require("./myComponents/MyTextInput"));
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
const CreateNB = () => {
};
const OpenNB = () => {
};
const AboutApp = () => {
};
exports.default = () => {
    react_native_splash_screen_1.default.hide();
    const [visible, setVisible] = react_1.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    return (<react_native_1.ImageBackground style={styles_1.styles.imgBackground} resizeMode='contain' source={require('./assets/homepage.png')}>
      <react_native_paper_1.Provider>
        <react_native_1.View style={styles_1.styles.bottomZone}>
          <MyButton_1.default title='Create Notebook' customClick={showModal}/>
          <react_native_paper_1.Portal>
            <react_native_paper_1.Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles_1.styles.inputDialog}>
              <MyTextInput_1.default label='Enter Notebook Name'/>
              <react_native_paper_1.Button mode='contained' onPress={CreateNB} style={styles_1.styles.ctaButton}>
                Create
              </react_native_paper_1.Button>
            </react_native_paper_1.Modal>
          </react_native_paper_1.Portal>
          <MyButton_1.default title='Open Notebook' customClick={OpenNB}/>
          <MyButton_1.default title='About App' customClick={AboutApp}/>
        </react_native_1.View>
      </react_native_paper_1.Provider>
    </react_native_1.ImageBackground>);
};