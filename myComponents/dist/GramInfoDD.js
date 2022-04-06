"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var components_1 = require("@ui-kitten/components");
var react_native_element_dropdown_1 = require("react-native-element-dropdown");
var styles_1 = require("../myStyles/styles");
var GramInfoDD = function (props) {
    var _a = react_1.useState(null), value = _a[0], setValue = _a[1];
    var wordtypes = [
        { label: 'Other', value: '0' },
        { label: 'Adjective', value: '1' },
        { label: 'Adposition (Postposition)', value: '2' },
        { label: 'Adposition (Preposition)', value: '3' },
        { label: 'Adverb', value: '4' },
        { label: 'Classifier', value: '5' },
        { label: 'Clitic', value: '6' },
        { label: 'Conjunction', value: '7' },
        { label: 'Connective', value: '8' },
        { label: 'Contraction', value: '9' },
        { label: 'Determiner (Article)', value: '10' },
        { label: 'Determiner (Demonstrative)', value: '11' },
        { label: 'Existential Marker', value: '12' },
        { label: 'Expletive', value: '13' },
        { label: 'Interjection', value: '14' },
        { label: 'Noun', value: '15' },
        { label: 'Numeral', value: '16' },
        { label: 'Prenoun', value: '17' },
        { label: 'Preposition', value: '18' },
        { label: 'Preverb', value: '19' },
        { label: 'Proform', value: '20' },
        { label: 'Pronoun', value: '21' },
        { label: 'Verb', value: '22' },
        { label: 'None', value: '23' }
    ];
    var renderItem = function (item) {
        return (react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.item },
            react_1["default"].createElement(react_native_1.Text, { style: styles_1.styles.textItem }, item.label),
            item.value === value && (react_1["default"].createElement(components_1.Icon, { style: styles_1.styles.icon, fill: '#8F9BB3', name: 'checkmark-circle' }))));
    };
    return (react_1["default"].createElement(react_native_element_dropdown_1.Dropdown, { style: styles_1.styles.dropdown, placeholderStyle: styles_1.styles.placeholderStyle, selectedTextStyle: styles_1.styles.selectedTextStyle, inputSearchStyle: styles_1.styles.inputSearchStyle, iconStyle: styles_1.styles.iconStyle, data: wordtypes, search: true, maxHeight: 300, labelField: 'label', valueField: 'value', placeholder: props.placeholder, searchPlaceholder: props.searchPlaceholder, value: value, onChange: function (item) {
            setValue(item.value);
        }, 
        // renderLeftIcon={() => (
        //   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        // )}
        renderItem: renderItem }));
};
exports["default"] = GramInfoDD;
