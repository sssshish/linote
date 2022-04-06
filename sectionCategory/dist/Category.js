"use strict";
exports.__esModule = true;
exports.Category = void 0;
/* eslint-disable react-native/no-inline-styles */
var React = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("../myStyles/styles");
var components_1 = require("@ui-kitten/components");
var MyButton_1 = require("../myComponents/MyButton");
exports.Category = function () {
    return (React.createElement(components_1.Layout, { style: styles_1.styles.megaWrap },
        React.createElement(react_native_1.View, { style: { flex: 1, alignItems: 'center' } },
            React.createElement(MyButton_1["default"], { title: 'Create New Category', styles: styles_1.styles.createDeckCtaButton }),
            React.createElement(react_native_1.Text, { style: [styles_1.styles.veryBigText, styles_1.styles.pinkText, styles_1.styles.centeredText] }, "No categories made yet!"))));
};
