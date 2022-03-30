'use strict';
exports.__esModule = true;
var react_1 = require('react');
var react_native_1 = require('react-native');
var styles_1 = require('../myStyles/styles');
var Mytext = function (props) {
    return react_1.default.createElement(react_native_1.Text, { style: styles.text }, props.text);
};
var styles = react_native_1.StyleSheet.create({
    text: {
        color: styles_1.fifthColor,
        fontSize: 18,
        marginTop: 16,
        marginLeft: 35,
        marginRight: 35
    }
});
exports.default = Mytext;
