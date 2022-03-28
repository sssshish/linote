"use strict";
/*View one word info along with update data icon which calls UpdateWord.tsx */
exports.__esModule = true;
/* eslint-disable react-native/no-inline-styles */
var react_1 = require("react");
var react_native_1 = require("react-native");
var MyTextInput_1 = require("../myComponents/MyTextInput");
var MyButton_1 = require("../myComponents/MyButton");
// import { openDatabase } from 'react-native-sqlite-storage';
// var db = openDatabase({ name: 'dictionary.db' });
var SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase({ name: 'dictionary.db' });
var ViewWord = function () {
    var _a = react_1.useState(''), inputWordId = _a[0], setInputWordId = _a[1];
    var _b = react_1.useState({}), wordData = _b[0], setWordData = _b[1];
    var searchWord = function () {
        console.log(inputWordId);
        setWordData({});
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM test where word_id = ?', [inputWordId], function (trans, results) {
                var len = results.rows.length;
                console.log('len', len);
                if (len > 0) {
                    setWordData(results.rows.item(0));
                }
                else {
                    react_native_1.Alert.alert('No words found');
                }
            });
        });
    };
    return (react_1["default"].createElement(react_native_1.SafeAreaView, { style: { flex: 1 } },
        react_1["default"].createElement(react_native_1.View, { style: { flex: 1, backgroundColor: 'white', justifyContent: 'center' } },
            react_1["default"].createElement(react_native_1.View, { style: { flex: 1 } },
                react_1["default"].createElement(MyTextInput_1["default"], { placeholder: 'Enter Word id', onChangeText: function (inptWordId) { return setInputWordId(inputWordId); }, style: { padding: 10 } }),
                react_1["default"].createElement(MyButton_1["default"], { title: 'Search Word', customClick: searchWord }),
                react_1["default"].createElement(react_native_1.View, { style: { marginLeft: 35, marginRight: 35, marginTop: 10 } },
                    react_1["default"].createElement(react_native_1.Text, null, "Word ID: "),
                    react_1["default"].createElement(react_native_1.Text, null, "Translation: "),
                    react_1["default"].createElement(react_native_1.Text, null, "Word Type: "),
                    react_1["default"].createElement(react_native_1.Text, null,
                        "Translation: ",
                        wordData.translation),
                    react_1["default"].createElement(react_native_1.Text, null,
                        "Comments: ",
                        wordData.description))))));
};
exports["default"] = ViewWord;
