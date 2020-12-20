"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useModalContext = exports.ModalContext = void 0;

var _react = require("react");

var ModalContext = /*#__PURE__*/(0, _react.createContext)(); //not exported in index.js, used in Modal hoc

exports.ModalContext = ModalContext;

var useModalContext = function useModalContext() {
  return (0, _react.useContext)(ModalContext);
};

exports.useModalContext = useModalContext;