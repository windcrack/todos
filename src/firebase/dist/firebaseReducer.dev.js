"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FirebaseReducer = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var handlers = {
  SHOW_LOADER: function SHOW_LOADER(state) {
    return _objectSpread({}, state, {
      loading: true
    });
  },
  ADD_NOTE: function ADD_NOTE(state, _ref) {
    var payload = _ref.payload;
    return _objectSpread({}, state, {
      notes: [].concat(_toConsumableArray(state.notes), [payload])
    });
  },
  FETCH_NOTES: function FETCH_NOTES(state, _ref2) {
    var payload = _ref2.payload;
    return _objectSpread({}, state, {
      notes: payload
    });
  },
  REMOVE_NOTES: function REMOVE_NOTES(state, _ref3) {
    var payload = _ref3.payload;
    return _objectSpread({}, state, {
      notes: state.notes.filter(function (note) {
        return note.id !== payload;
      })
    });
  },
  DEFAULT: function DEFAULT(state) {
    return state;
  }
};

var FirebaseReducer = function FirebaseReducer(state, action) {
  var handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};

exports.FirebaseReducer = FirebaseReducer;