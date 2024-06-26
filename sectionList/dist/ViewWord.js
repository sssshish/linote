"use strict";
exports.__esModule = true;
exports.ViewWord = void 0;
/*View one word info along with update data icon which calls UpdateWord.tsx */
/* eslint-disable react-native/no-inline-styles */
var React = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("../myStyles/styles");
var components_1 = require("@ui-kitten/components");
exports.ViewWord = function () {
    return (React.createElement(components_1.Layout, { style: styles_1.styles.megaWrap },
        React.createElement(react_native_1.View, { style: { flex: 1, justifyContent: 'center', alignItems: 'center' } },
            React.createElement(react_native_1.Text, null, "Your word list is empty!"))));
};
