"use strict";
/* eslint-disable @typescript-eslint/no-shadow */
/*AddWords.tsx contains a form-like view to add new words in a Notebook*/
exports.__esModule = true;
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
var react_1 = require("react");
var react_native_1 = require("react-native");
var MyTextInput_1 = require("../myComponents/MyTextInput");
var styles_1 = require("../myStyles/styles");
var App_1 = require("../App");
var GramInfoDD_1 = require("../myComponents/GramInfoDD");
var MorphemeDD_1 = require("../myComponents/MorphemeDD");
var ComplexDD_1 = require("../myComponents/ComplexDD");
var react_native_paper_1 = require("react-native-paper");
var SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase({ name: 'linote.db' });
//{ navigation: any }
var AddWords = function () {
    var _a = react_1.useState(''), word = _a[0], setWord = _a[1];
    var _b = react_1.useState(''), translation = _b[0], setTranslation = _b[1];
    var _c = react_1.useState(''), description = _c[0], setDescription = _c[1];
    var _d = react_1.useState(''), pronounciation = _d[0], setpronoun = _d[1];
    var _e = react_1.useState(''), complex = _e[0], setComplex = _e[1];
    var _f = react_1.useState(''), morpheme = _f[0], setMorpheme = _f[1];
    var _g = react_1.useState(''), graminfo = _g[0], setGramInfo = _g[1];
    var register_word = function () {
        if (!word) {
            react_native_1.Alert.alert('Word cannot be empty.');
            return;
        }
        if (!translation) {
            react_native_1.Alert.alert('Translation cannot be empty.');
            return;
        }
        if (!pronounciation) {
            react_native_1.Alert.alert('Pronounciation cannot be empty.');
            return;
        }
        if (!description) {
            react_native_1.Alert.alert('Description cannot be empty.');
            return;
        }
        if (!graminfo) {
            react_native_1.Alert.alert('Please select a Grammatical Info.');
            return;
        }
        if (!morpheme) {
            react_native_1.Alert.alert('Please select a Morpheme Type.');
            return;
        }
        if (!complex) {
            react_native_1.Alert.alert('Please select a Complex Form Type.');
            return;
        }
        db.transaction(function (tx) {
            tx.executeSql('INSERT INTO test(word,translation, pronounciation, description,complex, morpheme, graminfo) VALUES (?,?,?,?,?,?,?)', [word, translation, pronounciation, description, complex, morpheme, graminfo], function (trans, results) {
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                    react_native_1.Alert.alert('Success!', 'You word has been added successfully.', [
                        {
                            text: 'Ok',
                            onPress: function () { App_1.onMenuClick(0); }
                        }
                    ], { cancelable: false });
                }
                else {
                    react_native_1.Alert.alert('Error: Word could not added.');
                }
            });
        });
    };
    return (react_1["default"].createElement(react_native_1.SafeAreaView, { style: styles_1.styles.megaWrap },
        react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.megaWrap },
            react_1["default"].createElement(react_native_1.View, { style: { flex: 1, backgroundColor: 'white' } },
                react_1["default"].createElement(react_native_1.ScrollView, { keyboardShouldPersistTaps: 'handled' },
                    react_1["default"].createElement(react_native_1.KeyboardAvoidingView, { behavior: 'padding', style: { flex: 1, justifyContent: 'center' } },
                        react_1["default"].createElement(ComplexDD_1["default"], { placeholder: 'Select Complex form type' }),
                        react_1["default"].createElement(MorphemeDD_1["default"], { placeholder: 'Select Morpheme type' }),
                        react_1["default"].createElement(GramInfoDD_1["default"], { placeholder: 'Select Grammatical info' }),
                        react_1["default"].createElement(MyTextInput_1["default"], { label: 'Word', onChangeText: function (word) { return setWord(word); } }),
                        react_1["default"].createElement(MyTextInput_1["default"], { label: 'Translation', onChangeText: function (translation) { return setTranslation(translation); } }),
                        react_1["default"].createElement(MyTextInput_1["default"], { label: 'Pronounciation', onChangeText: function (pronounciation) { return setpronoun(pronounciation); } }),
                        react_1["default"].createElement(MyTextInput_1["default"], { label: 'Description', onChangeText: function (description) { return setDescription(description); }, maxLength: 225, numberOfLines: 3, multiline: true }),
                        react_1["default"].createElement(react_native_paper_1.Button, { mode: 'contained', onPress: register_word, style: styles_1.styles['ctaButton--smallWidth'] }, "ADD")))))));
};
exports["default"] = AddWords;
