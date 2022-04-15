"use strict";
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
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
var react_native_paper_1 = require("react-native-paper");
var react_1 = require("react");
var MyTextInput_1 = require("../myComponents/MyTextInput");
exports.FlexiIcon = function (settingsIconProps) { return (React.createElement(components_1.Icon, __assign({}, settingsIconProps, { width: 22, height: 22, fill: '#333' }))); };
var SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase({ name: 'linote.db' });
var DisplayNotes = function () {
    var _a = react_1.useState([]), flatListItems = _a[0], setFlatListItems = _a[1];
    var query = 'SELECT * FROM test';
    var len;
    var _b = react_1.useState(false), b = _b[0], setB = _b[1];
    var showB = function () { return setB(true); };
    var hideB = function () { return setB(false); };
    db.transaction(function (tx) {
        tx.executeSql(query, [], function (trans, results) {
            console.log('All notes loaded');
            len = results.rows.length;
            var temp;
            for (var i = 0; i < len; ++i) {
                temp.push(results.rows.item(i));
            }
            setFlatListItems(temp);
        }, function (error) {
            console.log('Error loading note', error);
        });
    });
    var listViewItemSeparator = function () {
        return (React.createElement(react_native_1.View, { style: {
                height: 0.5,
                width: '100%',
                backgroundColor: '#fcfcfc'
            } }));
    };
    var listItemView = function (item) {
        return (React.createElement(react_native_paper_1.Provider, null,
            React.createElement(react_native_paper_1.Button, { mode: 'contained', key: item.word_id, style: styles_1.styles.dropdown, onPress: showB }, item.infotitle),
            React.createElement(react_native_paper_1.Portal, null,
                React.createElement(react_native_paper_1.Modal, { visible: b, onDismiss: hideB, contentContainerStyle: styles_1.styles.infoDialog },
                    React.createElement(react_native_1.Text, { style: [styles_1.styles.smallerText, styles_1.styles.textWithTopMargin, styles_1.styles.text, { textAlign: 'justify', paddingRight: '5%', paddingLeft: '5%' }] },
                        " ",
                        item.info)))));
    };
    if (len === 0) {
        return (React.createElement(components_1.Layout, { style: styles_1.styles.megaWrap },
            React.createElement(react_native_1.View, { style: styles_1.styles.infoContainer },
                React.createElement(react_native_1.Text, { style: [styles_1.styles.veryBigText, styles_1.styles.pinkText, styles_1.styles.centeredText] }, "No notes created yet."))));
    }
    else {
        return (React.createElement(react_native_1.FlatList, { data: flatListItems, ItemSeparatorComponent: listViewItemSeparator, keyExtractor: function (item, index) { return index.toString(); }, renderItem: function (_a) {
                var item = _a.item;
                return listItemView(item);
            } }));
    }
};
exports.Settings = function () {
    var _a = react_1.useState(false), a = _a[0], setA = _a[1];
    var showA = function () { return setA(true); };
    var hideA = function () { return setA(false); };
    var _b = react_1.useState(''), note = _b[0], setNote = _b[1];
    var _c = react_1.useState(''), title = _c[0], setTitle = _c[1];
    return (React.createElement(components_1.Layout, { style: styles_1.styles.megaWrap },
        React.createElement(react_native_1.View, { style: styles_1.styles.infoContainer },
            React.createElement(react_native_paper_1.Provider, null,
                React.createElement(MyButton_1["default"], { title: 'Add New Note', customClick: showA }),
                React.createElement(react_native_paper_1.Portal, null,
                    React.createElement(react_native_paper_1.Modal, { visible: a, onDismiss: hideA, contentContainerStyle: styles_1.styles.inputDialog },
                        React.createElement(MyTextInput_1["default"], { label: 'Note Title', maxLength: 20, onChangeText: function (title) { return setTitle(title); } }),
                        React.createElement(MyTextInput_1["default"], { label: 'Note', multiline: true, maxLength: 500, numberOfLines: 5, onChangeText: function (note) { return setNote(note); } }),
                        React.createElement(react_native_paper_1.Button, { mode: 'contained', style: styles_1.styles.smallbutton, onPress: function () {
                                var query = 'INSERT INTO test(infotitle, info) VALUES (?,?)';
                                db.transaction(function (tx) {
                                    tx.executeSql(query, [title, note], function (trans, results) {
                                        console.log('Note added');
                                    }, function (error) {
                                        console.log('Error adding note', error);
                                    });
                                });
                            } }, "Create")))),
            React.createElement(DisplayNotes, null))));
};
