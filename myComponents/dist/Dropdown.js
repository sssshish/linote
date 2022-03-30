"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var components_1 = require("@ui-kitten/components");
var react_native_element_dropdown_1 = require("react-native-element-dropdown");
var styles_1 = require("../myStyles/styles");
var MyDropDown = function (props) {
    var _a = react_1.useState(null), value = _a[0], setValue = _a[1];
    var renderItem = function (item) {
        return (react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.item },
            react_1["default"].createElement(react_native_1.Text, { style: styles_1.styles.textItem }, item.label),
            item.value === value && (react_1["default"].createElement(components_1.Icon, { style: styles_1.styles.icon, fill: '#8F9BB3', name: 'arrow-circle-down-outline' }))));
    };
    return (react_1["default"].createElement(react_native_element_dropdown_1.Dropdown, { style: styles_1.styles.dropdown, placeholderStyle: styles_1.styles.placeholderStyle, selectedTextStyle: styles_1.styles.selectedTextStyle, inputSearchStyle: styles_1.styles.inputSearchStyle, iconStyle: styles_1.styles.iconStyle, data: props.wordData, search: true, maxHeight: 300, labelField: 'label', valueField: 'value', placeholder: props.placeholder, searchPlaceholder: props.searchPlaceholder, value: props.value, onChange: function (item) {
            setValue(item.value);
        }, 
        // renderLeftIcon={() => (
        //   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        // )}
        renderItem: renderItem }));
};
exports["default"] = MyDropDown;
