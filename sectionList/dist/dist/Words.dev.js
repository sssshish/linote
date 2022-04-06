"use strict";

exports.__esModule = true;
exports.Words = void 0;
/* List:
    1. Search bar at top
    2. All words in db with delete button at side/swipe which calls deleteWord()
    3. Click event to call Viewword.tsx
*/

/* eslint-disable react-native/no-inline-styles */

var react_1 = require("react");

var react_native_1 = require("react-native");

var MyTextInput_1 = require("../myComponents/MyTextInput");

var MyButton_1 = require("../myComponents/MyButton");

var styles_1 = require("../myStyles/styles"); // import { openDatabase } from 'react-native-sqlite-storage';


var SQLite = require('react-native-sqlite-storage');

var db = SQLite.openDatabase({
  name: 'linote.db'
});

exports.Words = function () {
  var _a = react_1.useState(''),
      inputWordId = _a[0],
      setInputWordId = _a[1];

  var _b = react_1.useState({}),
      wordData = _b[0],
      setWordData = _b[1];

  var searchWord = function searchWord() {
    console.log(inputWordId);
    setWordData({});
    db.transaction(function (tx) {
      tx.executeSql('SELECT * FROM teste where word_id = ?', [inputWordId], function (trans, results) {
        var len = results.rows.length;
        console.log('len', len);

        if (len > 0) {
          setWordData(results.rows.item(0));
        } else {
          react_native_1.Alert.alert('No words found');
        }
      });
    });
  };

  return react_1["default"].createElement(react_native_1.SafeAreaView, {
    style: {
      flex: 1,
      alignItems: 'center'
    }
  }, react_1["default"].createElement(react_native_1.View, {
    style: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    }
  }, react_1["default"].createElement(react_native_1.View, {
    style: {
      flex: 1,
      alignItems: 'center',
      width: '100%'
    }
  }, react_1["default"].createElement(MyTextInput_1["default"], {
    label: 'Enter Word id',
    placeholder: 'Enter Word id',
    onChangeText: // eslint-disable-next-line @typescript-eslint/no-shadow
    function onChangeText(inputWordId) {
      return setInputWordId(inputWordId);
    },
    style: styles_1.styles.topSearchInput
  }), react_1["default"].createElement(MyButton_1["default"], {
    title: 'Search Word',
    customClick: searchWord,
    styles: styles_1.styles.createDeckCtaButton
  }), react_1["default"].createElement(react_native_1.Text, {
    style: [styles_1.styles.veryBigText, styles_1.styles.pinkText, styles_1.styles.centeredText]
  }, "Your word list is empty!"))));
};