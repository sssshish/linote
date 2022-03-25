"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("../myStyles/styles");
var Mybutton = function (props) {
    return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles_1.styles.createDeckCtaButton, onPress: props.customClick },
        react_1["default"].createElement(react_native_1.Text, { style: styles_1.styles.whiteText }, props.title)));
};
exports["default"] = Mybutton;
