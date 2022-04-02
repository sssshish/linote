"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customNavigate = customNavigate;
exports.onMenuClick = exports.navigationRef = void 0;

var _native = require("@react-navigation/native");

var navigationRef = (0, _native.createNavigationContainerRef)();
exports.navigationRef = navigationRef;

function customNavigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

var onMenuClick = function onMenuClick(index) {
  switch (index) {
    case 0:
    default:
      customNavigate('Words');
      break;

    case 1:
      customNavigate('Wallet');
      break;

    case 2:
      customNavigate('AddWords');
      break;

    case 3:
      customNavigate('Quiz');
      break;

    case 4:
      customNavigate('Settings');
      break;
  }
};

exports.onMenuClick = onMenuClick;