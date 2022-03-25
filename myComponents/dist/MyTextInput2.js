"use strict";
exports.__esModule = true;
var React = require("react");
var react_native_paper_1 = require("react-native-paper");
var styles_1 = require("../styles/styles");
var MyTextInput2 = function () {
    var _a = React.useState(''), text = _a[0], setText = _a[1];
    return (React.createElement(react_native_paper_1.TextInput, { mode: 'outlined', label: 'Email', value: text, 
        // eslint-disable-next-line @typescript-eslint/no-shadow
        onChangeText: function (text) { return setText(text); }, style: styles_1.styles.smallInput, activeOutlineColor: styles_1.mainpink, outlineColor: styles_1.secondColor, multiline: false }));
};
exports["default"] = MyTextInput2;
