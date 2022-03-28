"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = exports.white = exports.black = exports.lightblue = exports.seventhColor = exports.sixthColor = exports.fifthColor = exports.fourthColor = exports.thirdColor = exports.secondColor = exports.mainpink = void 0;

var _reactNative = require("react-native");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var inputGlobalStyles = {
  width: '91%',
  marginLeft: '4.5%',
  marginRight: '4.5%',
  borderRadius: 14,
  fontFamily: customFontRegular
};
var mainpink = 'rgb(184,59,94)'; //pink-red

exports.mainpink = mainpink;
var secondColor = 'rgb(143,155,179)'; //grey-blue

exports.secondColor = secondColor;
var thirdColor = '#6A2C70'; //dark-purple

exports.thirdColor = thirdColor;
var fourthColor = '#EEECDA'; //light-green-yellowish-pale

exports.fourthColor = fourthColor;
var fifthColor = 'rgb(50,81,184)'; //dark-blue

exports.fifthColor = fifthColor;
var sixthColor = '#3251B8'; //dark-blue

exports.sixthColor = sixthColor;
var seventhColor = '#F08A5D'; //medium-orange

exports.seventhColor = seventhColor;
var lightblue = 'rgb(209,220,255)'; //light blue

exports.lightblue = lightblue;
var black = 'rgb(0,0,0)';
exports.black = black;
var white = 'rgb(255,255,255)';
exports.white = white;
var customFontRegular = 'Nunito-Regular';
var customFontBold = 'Nunito-SemiBold';

var screenHeight = _reactNative.Dimensions.get('window').height;

var styles = _reactNative.StyleSheet.create({
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1
  },
  dropdown: {
    margin: 16,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textItem: {
    flex: 1,
    fontSize: 16
  },
  placeholderStyle: {
    fontSize: 16
  },
  selectedTextStyle: {
    fontSize: 16
  },
  iconStyle: {
    width: 20,
    height: 20
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16
  },
  topContainer: {
    paddingBottom: 10,
    justifyContent: 'flex-end'
  },
  'topContainer--withNotch': {
    paddingTop: 40
  },
  // 'topContainer--withoutNotch': {
  //     paddingTop: isAndroid ? 10 : 20
  // },
  centeredElement: {
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%',
    alignItems: 'center',
    paddingTop: '10%'
  },
  'centeredElement--noTopSpace': {
    paddingTop: 0
  },
  'centeredElement--mediumHorizontalPadding': {
    width: '92%',
    marginLeft: '4%',
    marginRight: '4%'
  },
  'centeredElement--lessHorizontalPadding': {
    width: '98%',
    marginLeft: '1%',
    marginRight: '1%'
  },
  centeredSimpleView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  coloredTopContainer: {
    backgroundColor: mainpink
  },
  listSearchWrapper: {
    marginBottom: 6
  },
  select: {
    flex: 1,
    margin: 2
  },
  labelText: {
    flex: 1,
    fontFamily: customFontRegular
  },
  smallSelect: {
    flex: 1,
    margin: 2
  },
  sectionLabel: {
    marginTop: 10,
    marginBottom: 10
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  commonDivider: {
    marginTop: 10,
    marginBottom: 10
  },
  verticalSpacer: {
    marginTop: 10,
    marginBottom: 10,
    height: 20
  },
  backupDivider: {
    width: '91%',
    marginLeft: '4.5%',
    marginRight: '4.5%',
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 10,
    marginBottom: 20
  },
  addBar: {
    display: 'flex',
    flexDirection: 'row',
    top: 3
  },
  addBarLeft: {
    backgroundColor: mainpink,
    flex: 1.5,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingBottom: 5
  },
  addBarRight: {
    backgroundColor: mainpink,
    flex: 18
  },
  addWordInput: _objectSpread({}, inputGlobalStyles, {
    borderRadius: 18,
    borderWidth: 1,
    padding: 5,
    borderColor: mainpink
  }),
  searchResultsContainer: {
    paddingBottom: 80
  },
  topSearchInput: _objectSpread({}, inputGlobalStyles),
  smallInput: _objectSpread({}, inputGlobalStyles, {
    borderRadius: 6
  }),
  inputExtraTopSpacing: {
    marginTop: 5
  },
  walletInstructions: {
    marginTop: 40,
    paddingLeft: 30,
    paddingRight: 30
  },
  tapInstructions: {
    position: 'absolute',
    bottom: 84,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  bottomZone: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '20%',
    left: 0,
    right: 0,
    width: '100%'
  },
  bottomWrapper: {
    paddingTop: 12,
    paddingBottom: 14
  },
  'bottomWrapper--withNotch': {
    paddingBottom: 30
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: customFontRegular,
    fontSize: 16.5
  },
  boldText: {
    fontFamily: customFontBold,
    fontWeight: '900'
  },
  biggerText: {
    fontSize: 18
  },
  veryBigText: {
    fontSize: 27
  },
  smallerText: {
    fontSize: 13
  },
  verySmallText: {
    fontSize: 10
  },
  leftAlignedText: {
    textAlign: 'left'
  },
  rightAlignedText: {
    textAlign: 'right'
  },
  centeredText: {
    textAlign: 'center'
  },
  lightText: {
    color: '#666'
  },
  greenText: {
    color: 'green'
  },
  strikedText: {
    textDecorationLine: 'line-through'
  },
  redText: {
    color: 'red'
  },
  textWithTopMargin: {
    marginTop: 10
  },
  whiteText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: customFontRegular
  },
  whiteTextBold: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: customFontBold
  },
  titleText: {
    color: mainpink,
    fontFamily: customFontBold,
    fontSize: 30
  },
  titleTextSmall: {
    color: mainpink,
    fontFamily: customFontBold,
    fontSize: 24
  },
  linkText: {
    textDecorationLine: 'underline'
  },
  centeredView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  plusIcon: {
    marginLeft: -1
  },
  icon: {
    width: 32,
    height: 32,
    textAlign: 'center',
    marginRight: 5
  },
  cardsScrollView: {
    width: '91%',
    marginLeft: '4.5%',
    marginRight: '4.5%',
    height: screenHeight - 170
  },
  cardMasteredIconContainer: {
    backgroundColor: mainpink,
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  'cardMasteredIconContainer--Back': {
    backgroundColor: secondColor
  },
  wordCard: {
    marginBottom: 10,
    backgroundColor: mainpink,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10
  },
  mainWord: {
    color: '#fff',
    fontSize: 22,
    fontFamily: customFontBold
  },
  translationWord: {
    color: '#fff',
    fontSize: 16,
    marginTop: 8,
    fontFamily: customFontRegular
  },
  deleteAction: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10
  },
  megaWrap: {
    height: '100%',
    backgroundColor: '#FFF'
  },
  mainViewWrapper: {
    width: '100%'
  },
  'mainViewWrapper--extraTopSpacing': {
    paddingTop: 10
  },
  emptyListWrapper: {
    height: '100%'
  },
  singleSearchResult: {
    width: '91%',
    marginLeft: '4.5%',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 2,
    display: 'flex',
    flexDirection: 'row'
  },
  singleSearchResultMainWord: {
    fontSize: 18,
    fontFamily: customFontRegular
  },
  singleSearchResultArticle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: customFontBold
  },
  enWord: {
    marginTop: 4,
    fontFamily: customFontRegular
  },
  searchResultWordBlock: {
    flex: 8.5
  },
  'searchResultWordBlock--Disabled': {
    opacity: 0.2
  },
  searchResultTypeOfWordBlock: {
    flex: 1.5,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  typeOfWord: {
    fontSize: 11,
    color: '#fff',
    textAlign: 'center',
    paddingTop: 3,
    paddingBottom: 3,
    fontFamily: customFontRegular
  },
  'typeOfWord--Noun': {
    backgroundColor: mainpink
  },
  'typeOfWord--Verb': {
    backgroundColor: secondColor
  },
  'typeOfWord--Adj': {
    backgroundColor: thirdColor
  },
  'typeOfWord--Adv': {
    backgroundColor: fifthColor
  },
  sliderWrapper: {
    flex: 2,
    maxWidth: '90%',
    marginLeft: '5%'
  },
  singleSlide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slideText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: customFontRegular
  },
  singleCardWrapper: {
    height: 400,
    width: 320
  },
  singleCard: {},
  cardFrontAndBack: {
    backgroundColor: mainpink,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 20
  },
  cardBack: {
    backgroundColor: secondColor
  },
  instructions: {
    paddingLeft: 13,
    paddingRight: 13
  },
  instructionsText: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'left'
  },
  instructionsTextExtraBlock: {
    marginTop: 0
  },
  ctaButton: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: mainpink,
    borderColor: mainpink,
    fontFamily: customFontRegular
  },
  'ctaButton--smallWidth': {
    width: '50%',
    marginLeft: '25%'
  },
  cardsTopNav: {
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: -10
  },
  firstSlideText: {
    fontSize: 16,
    fontWeight: 'normal',
    maxWidth: '90%',
    marginLeft: '5%'
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoColOne: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingRight: 20,
    paddingBottom: 18,
    paddingTop: 1.3
  },
  infoColTwo: {
    flex: 10,
    backgroundColor: 'transparent',
    alignItems: 'flex-start'
  },
  infoColThree: {
    flex: 4,
    backgroundColor: 'transparent'
  },
  versionBox: {
    width: '91%',
    marginLeft: '4.5%',
    marginRight: '4.5%'
  },
  iconImage: {
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  stackNavigatorWrapper: {
    width: '100%',
    flex: 1
  },
  standardModal: {
    width: '90%'
  },
  standardModalBackdrop: {
    backgroundColor: 'black',
    opacity: 0.8
  },
  decksWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: '2%',
    marginBottom: '2%'
  },
  singleDeck: {
    backgroundColor: mainpink,
    height: 140,
    flexBasis: '31%',
    flexDirection: 'column',
    justifyContent: 'center',
    borderColor: 'transparent',
    borderRadius: 8,
    marginLeft: '3.5%',
    marginRight: '3.5%',
    zIndex: 1
  },
  'singleDeck--noMargin': {
    marginLeft: 0,
    marginRight: 0
  },
  addDeck: {
    backgroundColor: '#EAC3CF',
    borderStyle: 'dashed',
    borderColor: mainpink,
    borderWidth: 2
  },
  addDeckPlus: {
    color: mainpink,
    textAlign: 'center',
    fontSize: 20
  },
  createDeckList: {
    width: '100%',
    height: '100%'
  },
  createDeckListContainer: {
    paddingBottom: 200
  },
  inputDialog: {
    height: '30%',
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    right: '5%',
    left: '5%',
    borderRadius: 20
  },
  createDeckCtaButton: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 4,
    margin: 2,
    width: '80%',
    backgroundColor: mainpink
  },
  'createDeckCtaButton--Disabled': {
    backgroundColor: '#EAC4CE',
    borderWidth: 0
  },
  deckAddRow: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    marginLeft: '5%',
    marginRight: '5%'
  },
  deckAddRowLeft: {
    flexBasis: '60%'
  },
  deckAddRowRight: {
    flexBasis: '40%'
  },
  editButtonSvg: {
    position: 'absolute',
    top: 5,
    right: 4,
    zIndex: 2
  },
  deckName: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  createNewDeckHeader: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 50
  },
  createNewDeckTitle: {
    flexBasis: '80%',
    justifyContent: 'center'
  },
  createNewDeckSideElement: {
    flexBasis: '10%',
    justifyContent: 'center'
  },
  // CHALLENGE MODE
  challengeModeCardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: mainpink
  },
  challengeModeCardLeftZone: {
    flexBasis: '60%',
    backgroundColor: mainpink
  },
  challengeModeCardLeftZoneTop: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: mainpink
  },
  challengeModeCardLeftZoneBottom: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: mainpink,
    marginTop: 8
  },
  challengeModeCardCenterZone: {
    flexBasis: '30%',
    backgroundColor: mainpink,
    justifyContent: 'center'
  },
  challengeModeCardPercentageText: {
    position: 'absolute',
    left: 9,
    width: 30
  },
  challengeModeCardRightZone: {
    flexBasis: '10%',
    backgroundColor: mainpink,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  // CHALLENGE MODE - Playing
  progressBarWrapper: {
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  challengeModeCloseButton: {
    marginRight: 20
  },
  bigEmoji: {
    fontSize: 100,
    textAlign: 'center'
  },
  graphsHolder: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around'
  },
  endOfChallengeGraph: {
    alignItems: 'center'
  },
  endOfChallengeGraphPercentage: {
    position: 'absolute',
    bottom: 48
  }
});

exports.styles = styles;