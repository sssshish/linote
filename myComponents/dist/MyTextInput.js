"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("../myStyles/styles");
var react_native_paper_1 = require("react-native-paper");
var MyTextInput = function (props) {
    return (react_1["default"].createElement(react_native_paper_1.TextInput, { mode: 'outlined', label: props.label, underlineColorAndroid: 'transparent', value: props.value, keyboardType: props.keyboardType, onChangeText: props.onChangeText, returnKeyType: props.returnKeyType, numberOfLines: props.numberOfLines, multiline: props.multiline, onSubmitEditing: props.onSubmitEditing, style: styles_1.styles.smallInput, blurOnSubmit: false, autoCorrect: false, activeOutlineColor: styles_1.mainpink, outlineColor: styles_1.secondColor, autoFocus: true }));
};
exports["default"] = MyTextInput;
