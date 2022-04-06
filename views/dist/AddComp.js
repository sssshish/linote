"use strict";
/* eslint-disable @typescript-eslint/no-shadow */
/*AddWords.tsx contains a form-like view to add new words in a Notebook*/
exports.__esModule = true;
/* eslint-disable react-native/no-inline-styles */
var react_1 = require("react");
var react_native_1 = require("react-native");
var MyTextInput_1 = require("../myComponents/MyTextInput");
var styles_1 = require("../myStyles/styles");
var App_1 = require("../App");
var react_native_paper_1 = require("react-native-paper");
var components_1 = require("@ui-kitten/components");
var react_native_element_dropdown_1 = require("react-native-element-dropdown");
var SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase({ name: 'linote.db' });
var AddWords = function () {
    var _a = react_1.useState(''), word = _a[0], setWord = _a[1];
    var _b = react_1.useState(''), translation = _b[0], setTranslation = _b[1];
    var _c = react_1.useState(''), description = _c[0], setDescription = _c[1];
    var _d = react_1.useState(''), pronounciation = _d[0], setpronoun = _d[1];
    var _e = react_1.useState(''), complex = _e[0], setComplex = _e[1];
    var _f = react_1.useState(''), morpheme = _f[0], setMorpheme = _f[1];
    var _g = react_1.useState(''), graminfo = _g[0], setGramInfo = _g[1];
    var _h = react_1.useState(null), valueC = _h[0], setValueC = _h[1];
    var complexTypes = [
        { label: 'Compound', value: '1' },
        { label: 'Contraction', value: '2' },
        { label: 'Derivative', value: '3' },
        { label: 'Idiom', value: '4' },
        { label: 'Phrasal Verb', value: '5' },
        { label: 'Saying', value: '6' },
        { label: 'None', value: '7' }
    ];
    var renderComplex = function (item) {
        return (react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.item },
            react_1["default"].createElement(react_native_1.Text, { style: styles_1.styles.textItem }, item.label),
            item.value === valueC && (react_1["default"].createElement(components_1.Icon, { style: styles_1.styles.icon, fill: '#8F9BB3', name: 'checkmark-circle' }))));
    };
    var _j = react_1.useState(null), valueG = _j[0], setValueG = _j[1];
    var gramTypes = [
        { label: 'Other', value: '0' },
        { label: 'Adjective', value: '1' },
        { label: 'Adposition (Postposition)', value: '2' },
        { label: 'Adposition (Preposition)', value: '3' },
        { label: 'Adverb', value: '4' },
        { label: 'Classifier', value: '5' },
        { label: 'Clitic', value: '6' },
        { label: 'Conjunction', value: '7' },
        { label: 'Connective', value: '8' },
        { label: 'Contraction', value: '9' },
        { label: 'Determiner (Article)', value: '10' },
        { label: 'Determiner (Demonstrative)', value: '11' },
        { label: 'Existential Marker', value: '12' },
        { label: 'Expletive', value: '13' },
        { label: 'Interjection', value: '14' },
        { label: 'Noun', value: '15' },
        { label: 'Numeral', value: '16' },
        { label: 'Prenoun', value: '17' },
        { label: 'Preposition', value: '18' },
        { label: 'Preverb', value: '19' },
        { label: 'Proform', value: '20' },
        { label: 'Pronoun', value: '21' },
        { label: 'Verb', value: '22' },
        { label: 'None', value: '23' }
    ];
    var renderGram = function (item) {
        return (react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.item },
            react_1["default"].createElement(react_native_1.Text, { style: styles_1.styles.textItem }, item.label),
            item.value === valueG && (react_1["default"].createElement(components_1.Icon, { style: styles_1.styles.icon, fill: '#8F9BB3', name: 'checkmark-circle' }))));
    };
    var _k = react_1.useState(null), valueM = _k[0], setValueM = _k[1];
    var morphemetypes = [
        { value: '1', label: '*bound root' },
        { value: '2', label: '*bound stem' },
        { value: '3', label: 'circumfix' },
        { value: '4', label: 'clitic' },
        { value: '5', label: 'discontiguous phrase' },
        { value: '6', label: '=enclitic' },
        { value: '7', label: '-infix-' },
        { value: '8', label: '-infixing infix' },
        { value: '9', label: 'particle' },
        { value: '10', label: 'phrase' },
        { value: '11', label: 'prefix-' },
        { value: '12', label: 'prefixing prefix-' },
        { value: '13', label: 'proclitic' },
        { value: '14', label: 'root' },
        { value: '15', label: '=simulfix=' },
        { value: '16', label: 'stem' },
        { value: '17', label: '-suffix' },
        { value: '18', label: '-suffixing interfix' },
        { value: '19', label: '~suprafix~' },
        { label: 'None', value: '20' }
    ];
    var renderMorph = function (item) {
        return (react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.item },
            react_1["default"].createElement(react_native_1.Text, { style: styles_1.styles.textItem }, item.label),
            item.value === valueM && (react_1["default"].createElement(components_1.Icon, { style: styles_1.styles.icon, fill: '#8F9BB3', name: 'checkmark-circle' }))));
    };
    var register_word = function () {
        if (!word || !translation || !pronounciation || !description || !complex || !morpheme || !graminfo) {
            react_native_1.Alert.alert('Please fill all details.');
            return;
        }
        db.transaction(function (tx) {
            tx.executeSql('INSERT INTO test(word,translation, pronounciation, description,complex, morpheme, graminfo) VALUES (?,?,?,?,?,?,?)', [word, translation, pronounciation, description, complex, morpheme, graminfo], function (trans, results) {
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                    react_native_1.Alert.alert('Success', 'You word has been added successfully.', [
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
                        react_1["default"].createElement(MyTextInput_1["default"], { label: 'Word', onChangeText: function (word) { return setWord(word); } }),
                        react_1["default"].createElement(MyTextInput_1["default"], { label: 'Translation', onChangeText: function (translation) { return setTranslation(translation); } }),
                        react_1["default"].createElement(MyTextInput_1["default"], { label: 'Pronounciation', onChangeText: function (pronounciation) { return setpronoun(pronounciation); } }),
                        react_1["default"].createElement(MyTextInput_1["default"], { label: 'Description', onChangeText: function (description) { return setDescription(description); }, maxLength: 225, numberOfLines: 3, multiline: true }),
                        react_1["default"].createElement(react_native_element_dropdown_1.Dropdown, { style: styles_1.styles.dropdown, placeholderStyle: styles_1.styles.placeholderStyle, selectedTextStyle: styles_1.styles.selectedTextStyle, inputSearchStyle: styles_1.styles.inputSearchStyle, iconStyle: styles_1.styles.iconStyle, data: complexTypes, search: true, maxHeight: 300, labelField: 'label', valueField: 'value', placeholder: 'Select Complex Form Type', searchPlaceholder: 'Search', value: valueC, onChange: function (item) {
                                setComplex(item.label);
                                setValueC(item.value);
                            }, renderItem: renderComplex }),
                        react_1["default"].createElement(react_native_element_dropdown_1.Dropdown, { style: styles_1.styles.dropdown, placeholderStyle: styles_1.styles.placeholderStyle, selectedTextStyle: styles_1.styles.selectedTextStyle, inputSearchStyle: styles_1.styles.inputSearchStyle, iconStyle: styles_1.styles.iconStyle, data: morphemetypes, search: true, maxHeight: 300, labelField: 'label', valueField: 'value', placeholder: 'Select Morpheme Type', searchPlaceholder: 'Search', value: valueM, onChange: function (item) {
                                setMorpheme(item.label);
                                setValueM(item.value);
                            }, renderItem: renderMorph }),
                        react_1["default"].createElement(react_native_element_dropdown_1.Dropdown, { style: styles_1.styles.dropdown, placeholderStyle: styles_1.styles.placeholderStyle, selectedTextStyle: styles_1.styles.selectedTextStyle, inputSearchStyle: styles_1.styles.inputSearchStyle, iconStyle: styles_1.styles.iconStyle, data: gramTypes, search: true, maxHeight: 300, labelField: 'label', valueField: 'value', placeholder: 'Select Grammatical Info', searchPlaceholder: 'Search', value: valueG, onChange: function (item) {
                                setGramInfo(item.label);
                                setValueG(item.value);
                            }, renderItem: renderGram }),
                        react_1["default"].createElement(react_native_paper_1.Button, { mode: 'contained', onPress: register_word, style: styles_1.styles['ctaButton--smallWidth'] }, "ADD")))))));
};
exports["default"] = AddWords;
