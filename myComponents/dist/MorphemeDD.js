"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var components_1 = require("@ui-kitten/components");
var react_native_element_dropdown_1 = require("react-native-element-dropdown");
var styles_1 = require("../myStyles/styles");
var MorphemeDD = function (props) {
    var _a = react_1.useState(null), value = _a[0], setValue = _a[1];
    var wordtypes = [
        { value: '1', label: '*bound root' },
        { value: '2', label: '*bound stem' },
        { value: '3', label: 'circumfix' },
        { value: '4', label: 'clitic' },
        { value: '5', label: 'discontiguous phrase' },
        { value: '6', label: '=enclitic' },
        { value: '7', label: '-infix-' },
        { value: '8', label: '-infixing infix' },
        { value: '9', label: 'particle' },
        { value: '10', label: 'phrase' },
        { value: '11', label: 'prefix-' },
        { value: '12', label: 'prefixing prefix-' },
        { value: '13', label: 'proclitic' },
        { value: '14', label: 'root' },
        { value: '15', label: '=simulfix=' },
        { value: '16', label: 'stem' },
        { value: '17', label: '-suffix' },
        { value: '18', label: '-suffixing interfix' },
        { value: '19', label: '~suprafix~' },
        { label: 'None', value: '20' }
    ];
    var renderItem = function (item) {
        return (react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.item },
            react_1["default"].createElement(react_native_1.Text, { style: styles_1.styles.textItem }, item.label),
            item.value === value && (react_1["default"].createElement(components_1.Icon, { style: styles_1.styles.icon, fill: '#8F9BB3', name: 'arrow-circle-down-outline' }))));
    };
    return (react_1["default"].createElement(react_native_element_dropdown_1.Dropdown, { style: styles_1.styles.dropdown, placeholderStyle: styles_1.styles.placeholderStyle, selectedTextStyle: styles_1.styles.selectedTextStyle, inputSearchStyle: styles_1.styles.inputSearchStyle, iconStyle: styles_1.styles.iconStyle, data: wordtypes, search: true, maxHeight: 300, labelField: 'label', valueField: 'value', placeholder: props.placeholder, searchPlaceholder: props.searchPlaceholder, value: value, onChange: function (item) {
            setValue(item.value);
        }, 
        // renderLeftIcon={() => (
        //   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        // )}
        renderItem: renderItem }));
};
exports["default"] = MorphemeDD;
