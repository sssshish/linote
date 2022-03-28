"use strict";
/*View and update info on your NB*/
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
exports.Settings = exports.FlexiIcon = void 0;
var React = require("react");
var react_native_1 = require("react-native");
var components_1 = require("@ui-kitten/components");
var styles_1 = require("../myStyles/styles");
var MyButton_1 = require("../myComponents/MyButton");
exports.FlexiIcon = function (settingsIconProps) { return (React.createElement(components_1.Icon, __assign({}, settingsIconProps, { width: 22, height: 22, fill: '#333' }))); };
var SQLite = require('react-native-sqlite-storage');
var okCallback = function () {
    console.log('connected to DB in Settings');
};
var errorCallback = function (error) {
    console.log('DB connection error', error);
};
var db = SQLite.openDatabase({ name: 'dictionary.db' }, okCallback, errorCallback);
// TO DO: add prop notebookName from Settings
var makeNotebook = function () {
    db.transaction(function (tx) {
        var test = 'tbletest';
        tx.executeSql('CREATE TABLE ' + test + '(word_id INTEGER PRIMARY KEY, word TEXT NOT NULL, translation TEXT NOT NULL, description TEXT NOT NULL);', [], function (trans, results) {
            console.log('DB initialized and table created!');
        }, function (error) {
            console.log('Errors with DB initialization', error);
        });
    });
};
exports.Settings = function () {
    //code to create table
    // db.transaction((tx: any) => {
    //   tx.executeSql('CREATE TABLE \'test\'(id INTEGER PRIMARY KEY, username TEXT NOT NULL);', [], (trans: any, results: any) => {
    //     console.log('DB initialized and table created!');
    //   },
    //     (error: any) => {
    //       console.log('Errors with DB initialization', error);
    //     }
    //   );
    // });
    return (React.createElement(components_1.Layout, { style: styles_1.styles.megaWrap },
        React.createElement(react_native_1.View, { style: styles_1.styles.infoContainer },
            React.createElement(MyButton_1["default"], { title: 'Create New Notebook', customClick: makeNotebook }),
            React.createElement(MyButton_1["default"], { title: 'Open a Notebook', customClick: '' }))));
};
