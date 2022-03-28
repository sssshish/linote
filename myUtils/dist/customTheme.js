"use strict";
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
exports.customTheme = void 0;
var eva = require("@eva-design/eva");
var styles_1 = require("../myStyles/styles");
var colorOverrides = {
    'color-basic-100': '#FFFFFF',
    'color-basic-1000': '#151A30',
    'color-basic-1100': '#101426',
    'color-basic-200': '#F7F9FC',
    'color-basic-300': '#EDF1F7',
    'color-basic-400': '#E4E9F2',
    'color-basic-500': '#C5CEE0',
    'color-basic-600': '#8F9BB3',
    'color-basic-700': '#2E3A59',
    'color-basic-800': '#222B45',
    'color-basic-900': '#1A2138',
    'color-danger-100': '#FFF2F2',
    'color-danger-200': '#FFD6D9',
    'color-danger-300': '#FFA8B4',
    'color-danger-400': '#FF708D',
    'color-danger-500': '#FF3D71',
    'color-danger-600': '#DB2C66',
    'color-danger-700': '#B81D5B',
    'color-danger-800': '#94124E',
    'color-danger-900': '#700940',
    'color-info-100': '#F2F8FF',
    'color-info-200': '#C7E2FF',
    'color-info-300': '#94CBFF',
    'color-info-400': '#42AAFF',
    'color-info-500': '#0095FF',
    'color-info-600': '#006FD6',
    'color-info-700': '#0057C2',
    'color-info-800': '#0041A8',
    'color-info-900': '#002885',
    'color-primary-100': '#F2F6FF',
    'color-primary-200': '#D9E4FF',
    'color-primary-300': '#A6C1FF',
    'color-primary-400': '#598BFF',
    'color-primary-500': styles_1.mainpink,
    'color-primary-600': styles_1.mainpink,
    'color-primary-700': '#1A34B8',
    'color-primary-800': '#102694',
    'color-primary-900': '#091C7A',
    'color-success-100': '#EDFFF3',
    'color-success-200': '#B3FFD6',
    'color-success-300': '#8CFAC7',
    'color-success-400': '#51F0B0',
    'color-success-500': '#00E096',
    'color-success-600': '#00B383',
    'color-success-700': '#008F72',
    'color-success-800': '#007566',
    'color-success-900': '#00524C',
    'color-warning-100': '#FFFDF2',
    'color-warning-200': '#FFF1C2',
    'color-warning-300': '#FFE59E',
    'color-warning-400': '#FFC94D',
    'color-warning-500': '#FFAA00',
    'color-warning-600': '#DB8B00',
    'color-warning-700': '#B86E00',
    'color-warning-800': '#945400',
    'color-warning-900': '#703C00'
};
exports.customTheme = __assign(__assign({}, eva.light), colorOverrides);
