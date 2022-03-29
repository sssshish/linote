"use strict";
/* eslint-disable @typescript-eslint/no-shadow */
/*AddWords.tsx contains a form-like view to add new words in a Notebook*/
exports.__esModule = true;
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
var react_1 = require("react");
var react_native_1 = require("react-native");
var MyTextInput_1 = require("../myComponents/MyTextInput");
var MyButton_1 = require("../myComponents/MyButton");
var styles_1 = require("../myStyles/styles");
var Dropdown_1 = require("../myComponents/Dropdown");
// import ViewWord from '../sectionList/ViewWord';
var SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase({ name: 'dictionary.db' });
//{ navigation: any }
var AddWords = function () {
    var _a = react_1.useState(''), word = _a[0], setWord = _a[1];
    var _b = react_1.useState(''), translation = _b[0], setTranslation = _b[1];
    var _c = react_1.useState(''), description = _c[0], setDescription = _c[1];
    var register_word = function () {
        console.log(word, translation, description);
        if (!word) {
            react_native_1.Alert.alert('Word cannot be empty.');
            return;
        }
        if (!translation) {
            react_native_1.Alert.alert('Translation cannot be empty.');
            return;
        }
        db.transaction(function (tx, nbname) {
            tx.executeSql('INSERT INTO' + nbname + '(word, translation, description) VALUES (?,?,?)', [word, translation, description], function (trans, results) {
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                    react_native_1.Alert.alert('Success', 'You word has been added successfully', [
                        {
                            text: 'Ok'
                            // onPress: () => navigation.navigate('List')
                        }
                    ], { cancelable: false });
                }
                else {
                    react_native_1.Alert.alert('Error: Word was not added.');
                }
            });
        });
    };
    return (react_1["default"].createElement(react_native_1.SafeAreaView, { style: styles_1.styles.megaWrap },
        react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.megaWrap },
            react_1["default"].createElement(react_native_1.View, { style: { flex: 1 } },
                react_1["default"].createElement(react_native_1.ScrollView, { keyboardShouldPersistTaps: 'handled' },
                    react_1["default"].createElement(react_native_1.KeyboardAvoidingView, { behavior: 'padding', style: { flex: 1, justifyContent: 'space-between' } },
                        react_1["default"].createElement(MyTextInput_1["default"], { label: 'Word', onChangeText: function (word) { return setWord(word); } }),
                        react_1["default"].createElement(MyTextInput_1["default"], { label: 'Translation', onChangeText: function (translation) { return setTranslation(translation); } }),
                        react_1["default"].createElement(Dropdown_1["default"], null),
                        react_1["default"].createElement(MyTextInput_1["default"], { label: 'Description', onChangeText: function (description) { return setDescription(description); }, maxLength: 225, numberOfLines: 5, multiline: true }),
                        react_1["default"].createElement(MyButton_1["default"], { title: 'Submit', customClick: register_word })))))));
};
exports["default"] = AddWords;
