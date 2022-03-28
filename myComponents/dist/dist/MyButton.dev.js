'use strict';

exports.__esModule = true;

var React = require('react');

var react_native_1 = require('react-native');

var styles_1 = require('../../myStyles/styles');

var Mybutton = function Mybutton(props) {
  return React.createElement(react_native_1.TouchableOpacity, {
    style: styles_1.styles.createDeckCtaButton,
    onPress: props.customClick
  }, React.createElement(react_native_1.Text, {
    style: styles_1.styles.whiteText
  }, props.title));
};

exports["default"] = Mybutton;