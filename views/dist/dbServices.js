"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getDBConnection = void 0;
var react_native_sqlite_storage_1 = require("react-native-sqlite-storage");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_paper_1 = require("react-native-paper");
var okCallback = function () {
    console.log('Connected to DB');
};
var errorCallback = function (error) {
    console.log('DB connection error', error);
};
var okDeletionCallback = function () {
    console.log('I deleted the database');
};
var errorDeletionCallback = function (error) {
    console.log('Error while deleting DB', error);
};
exports.getDBConnection = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, react_native_sqlite_storage_1.openDatabase({ name: 'dictionary.db' }, okCallback, errorCallback)];
    });
}); };
var openNB = function (nbName) {
    if (!nbName) {
        react_native_1.Alert.alert('Notebook doesn\'t exist. Please create a Notebook first.');
        return;
    }
};
var AboutApp = function () {
    return (react_1["default"].createElement(react_native_paper_1.Text, null, "About App Info + User Manual"));
};
var CreateNB = function (nbName) {
    var query = 'CREATE TABLE IF NOT EXISTS ' + nbName + '(word_id INTEGER PRIMARY KEY AUTOINCREMENT,word TEXT NOT NULL,translation TEXT NOT NULL,word_type TEXT NOT NULL, morph_type TEXT NOT NULL, description TEXT NOT NULL)';
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS ' + nbName + '(word_id INTEGER PRIMARY KEY,word TEXT NOT NULL,translation TEXT NOT NULL,word_type TEXT NOT NULL, morph_type TEXT NOT NULL, description TEXT NOT NULL)', [], function (trans, results) {
            console.log('nbName after input = ', nbName);
            console.log('Notebook created - ', nbName);
        }, function (error) {
            console.log('nbName after input = ', nbName);
            console.log('Error creating notebook:', error);
        });
    });
};
var testNB = function () {
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO test (word) VALUES (testw)', [], function (trans, results) {
            console.log('Test notebook updated.');
        }, function (error) {
            console.log('Error updating test notebook:', error);
        });
    });
};
