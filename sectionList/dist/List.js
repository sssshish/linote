"use strict";
exports.__esModule = true;
exports.List = void 0;
/* eslint-disable react-native/no-inline-styles */
var React = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("../styles/styles");
var components_1 = require("@ui-kitten/components");
//import { ViewWord } from '(path)' ;
exports.List = function () {
    return (React.createElement(components_1.Layout, { style: styles_1.styles.megaWrap },
        React.createElement(react_native_1.View, { style: { flex: 1, justifyContent: 'center', alignItems: 'center' } },
            React.createElement(react_native_1.Text, null, "Your word list is empty!"))));
};
