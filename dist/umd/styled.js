"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalXButton = exports.ModalContent = exports.ModalContainer = exports.FlexRow = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;\n    position: absolute;\n    top: -25px;\n    right: -20px;\n    font-size: 18px;\n    font-weight: bold;\n    color: #fff;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background: #fff;\n    padding: 20px;\n    border-radius: 5px;\n    min-width: 350px;\n    cursor: initial;\n    position: relative;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    top: 0px;\n    left: 0px;\n    width: 100vw;\n    height: 100vh;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: fixed;\n    z-index: ", ";\n    cursor: ", ";\n    ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FlexRow = _styledComponents["default"].div(_templateObject());

exports.FlexRow = FlexRow;
var ModalContainer = (0, _styledComponents["default"])(FlexRow)(_templateObject2(), function (_ref) {
  var zIndex = _ref.zIndex;
  return zIndex ? zIndex : 99;
}, function (_ref2) {
  var closeOnBackdrop = _ref2.closeOnBackdrop;
  return closeOnBackdrop ? 'pointer' : 'initial';
}, function (_ref3) {
  var show = _ref3.show;
  return show === false ? "display: none;" : null;
});
exports.ModalContainer = ModalContainer;

var ModalContent = _styledComponents["default"].div(_templateObject3());

exports.ModalContent = ModalContent;

var ModalXButton = _styledComponents["default"].div(_templateObject4());

exports.ModalXButton = ModalXButton;