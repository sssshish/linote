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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.UpdateCat = void 0;
var react_1 = require("react");
var components_1 = require("@ui-kitten/components");
var styles_1 = require("../myStyles/styles");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var Notebook_1 = require("../views/Notebook");
var utils_1 = require("../myUtils/utils");
var dateFormat = require('dateformat');
var SingleRow = function (props) {
    var data = props.data, rowSelector = props.rowSelector;
    var item = data.item;
    var _a = react_1.useState(item.checked), checked = _a[0], setChecked = _a[1];
    var onCheckboxChange = function () {
        setChecked(!checked);
        rowSelector(item.id, !checked);
    };
    // TODO: i'm using ts-ignore because according to the type definition I can't pass
    // a layout as a children of checkbox. However this works perfectly fine.
    return (react_1["default"].createElement(components_1.Layout, { style: styles_1.styles.deckAddRow, key: item.id },
        react_1["default"].createElement(components_1.Layout, { style: styles_1.styles.deckAddRowLeft },
            react_1["default"].createElement(components_1.CheckBox, { checked: checked, onChange: onCheckboxChange },
                react_1["default"].createElement(components_1.Layout, null,
                    react_1["default"].createElement(components_1.Text, { style: styles_1.styles.boldText }, utils_1.getFullWordString(item)),
                    react_1["default"].createElement(components_1.Text, { style: [styles_1.styles.text, styles_1.styles.smallerText, styles_1.styles.leftAlignedText] }, item.en)))),
        react_1["default"].createElement(components_1.Layout, { style: styles_1.styles.deckAddRowRight },
            react_1["default"].createElement(components_1.Text, { style: [styles_1.styles.verySmallText, styles_1.styles.rightAlignedText] }, utils_1.timeAgo(item.dateAdded)))));
};
exports.UpdateCat = function (props) {
    var _a;
    var navigation = props.navigation;
    var params = ((_a = props.route) === null || _a === void 0 ? void 0 : _a.params) || {};
    var editMode = (params === null || params === void 0 ? void 0 : params.editMode) || false;
    var deckKey = (params === null || params === void 0 ? void 0 : params.deckKey) !== null ? params.deckKey : null;
    var appData = react_1.useContext(Notebook_1.HomeContext);
    var wordsWallet = appData.wordsWallet, decksData = appData.decksData, addSingleDeck = appData.addSingleDeck, updateSingleDeck = appData.updateSingleDeck;
    var thisDeck = editMode ? decksData[deckKey] : null;
    var _b = react_1.useState(false), isButtonEnabled = _b[0], setButtonEnabled = _b[1];
    var _c = react_1.useState(editMode && thisDeck ? thisDeck.cards : []), newDeckCards = _c[0], setnewDeckCards = _c[1];
    var rowSelector = function (rowId, isSelected) {
        var newDeckCardsClone = __spreadArrays(newDeckCards);
        if (isSelected) {
            var cardToAdd = {
                en: wordsWallet[parseInt(rowId, 10)].en,
                de: wordsWallet[parseInt(rowId, 10)].de,
                wordType: wordsWallet[parseInt(rowId, 10)].wordType,
                mastered: false
            };
            newDeckCardsClone.push(cardToAdd);
        }
        else {
            var cardToDelete = newDeckCards.findIndex(function (singleCard) {
                return singleCard.en === wordsWallet[parseInt(rowId, 10)].en &&
                    singleCard.de === wordsWallet[parseInt(rowId, 10)].de;
            });
            newDeckCardsClone.splice(cardToDelete, 1);
        }
        setnewDeckCards(newDeckCardsClone);
    };
    react_1.useEffect(function () {
        setButtonEnabled(newDeckCards.length > 0);
    }, [newDeckCards]);
    var initialSelectionState = wordsWallet.map(function (word, index) {
        var checkedValue = false;
        if (editMode && thisDeck) {
            var thisWordInOriginalDeck = thisDeck.cards.find(function (deckWord) { return deckWord.de === word.de && deckWord.en === word.en; });
            if (thisWordInOriginalDeck) {
                checkedValue = true;
            }
        }
        return __assign(__assign({}, word), { checked: checkedValue, id: index.toString() });
    });
    var constructNewDeckData = function (name) {
        var now = new Date();
        var readableDate = dateFormat(now, 'mmmm dS, yyyy, H:MM:ss');
        return {
            id: (new Date()).getTime(),
            name: name ? name : readableDate,
            createdTimestamp: (new Date()).getTime(),
            updatedTimestamp: (new Date()).getTime(),
            cards: newDeckCards
        };
    };
    var onCreateDeck = function () {
        if (newDeckCards.length < 1) {
            return;
        }
        addSingleDeck(constructNewDeckData(inputContent));
        navigation.goBack();
    };
    var onUpdateDeck = function () {
        if (newDeckCards.length < 1) {
            return;
        }
        var updatedData = constructNewDeckData(inputContent);
        updateSingleDeck(updatedData, deckKey);
        navigation.goBack();
    };
    var _d = react_1.useState(thisDeck === null || thisDeck === void 0 ? void 0 : thisDeck.name), inputContent = _d[0], setInputContent = _d[1];
    var _e = react_1.useState(false), isInputFocused = _e[0], setInputFocused = _e[1];
    var renderCloseIconForDeckTitle = function (iconProps) {
        if (!isInputFocused || !inputContent || inputContent.length < 1) {
            return react_1["default"].createElement(react_1["default"].Fragment, null);
        }
        return (react_1["default"].createElement(react_native_gesture_handler_1.TouchableWithoutFeedback, { onPress: function () { return setInputContent(''); } },
            react_1["default"].createElement(components_1.Icon, __assign({}, iconProps, { width: 22, height: 22, fill: '#ccc', name: 'close-circle' }))));
    };
    return (react_1["default"].createElement(components_1.Layout, { style: [styles_1.styles.centeredElement, styles_1.styles['centeredElement--noTopSpace'], styles_1.styles['centeredElement--lessHorizontalPadding']] },
        react_1["default"].createElement(components_1.Layout, { style: styles_1.styles.createNewDeckHeader },
            react_1["default"].createElement(components_1.Layout, { style: styles_1.styles.createNewDeckSideElement }),
            react_1["default"].createElement(components_1.Layout, { style: styles_1.styles.createNewDeckTitle },
                react_1["default"].createElement(components_1.Text, { style: [styles_1.styles.text, styles_1.styles.titleTextSmall], category: 'h4' }, editMode ? 'Edit Deck' : 'Create new Deck')),
            react_1["default"].createElement(components_1.Layout, { style: styles_1.styles.createNewDeckSideElement },
                react_1["default"].createElement(react_native_gesture_handler_1.TouchableWithoutFeedback, { onPress: function () { return navigation.goBack(); } },
                    react_1["default"].createElement(components_1.Icon, { style: {}, width: 30, height: 30, fill: '#ccc', name: 'close' })))),
        react_1["default"].createElement(components_1.Input, { style: styles_1.styles.smallInput, size: 'small', value: inputContent, placeholder: 'Name of your deck', onFocus: function () { return setInputFocused(true); }, onBlur: function () { return setInputFocused(false); }, returnKeyType: 'done', onChangeText: function (nextValue) { return setInputContent(nextValue); }, accessoryRight: renderCloseIconForDeckTitle }),
        react_1["default"].createElement(react_native_gesture_handler_1.FlatList, { style: styles_1.styles.createDeckList, contentContainerStyle: styles_1.styles.createDeckListContainer, data: initialSelectionState, renderItem: function (data) {
                return (react_1["default"].createElement(SingleRow, { data: data, rowSelector: rowSelector }));
            }, keyExtractor: function (item) { return item.id; } }),
        react_1["default"].createElement(components_1.Layout, { style: styles_1.styles.createDeckCta },
            react_1["default"].createElement(components_1.Button, { onPress: editMode ? onUpdateDeck : onCreateDeck, style: [styles_1.styles.ctaButton, styles_1.styles.createDeckCtaButton, !isButtonEnabled && styles_1.styles['createDeckCtaButton--Disabled']] }, editMode ? 'Save Changes' : 'Create Deck'))));
};
