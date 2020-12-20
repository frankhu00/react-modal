var _this = this;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useState, useEffect } from 'react';
import CloseIcon from './CloseIcon';
import { FlexRow, ModalContainer, ModalContent, ModalXButton } from './styled';
import { ModalContext } from './ModalContext';

var defaultBtn = function defaultBtn(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button"
  }, props), typeof children === 'function' ? children(props) : children);
};

export var Modal = function Modal(_ref2) {
  var content = _ref2.content,
      children = _ref2.children,
      onModalShow = _ref2.onModalShow,
      onModalClose = _ref2.onModalClose,
      _ref2$proceedAction = _ref2.proceedAction,
      proceedAction = _ref2$proceedAction === void 0 ? function () {
    console.warn('Modal proceedAction not defined!');
  } : _ref2$proceedAction,
      _ref2$showOnRender = _ref2.showOnRender,
      showOnRender = _ref2$showOnRender === void 0 ? false : _ref2$showOnRender,
      _ref2$showXBtn = _ref2.showXBtn,
      showXBtn = _ref2$showXBtn === void 0 ? true : _ref2$showXBtn,
      _ref2$addControls = _ref2.addControls,
      addControls = _ref2$addControls === void 0 ? true : _ref2$addControls,
      _ref2$closeOnBackdrop = _ref2.closeOnBackdrop,
      closeOnBackdrop = _ref2$closeOnBackdrop === void 0 ? false : _ref2$closeOnBackdrop,
      _ref2$persist = _ref2.persist,
      persist = _ref2$persist === void 0 ? false : _ref2$persist,
      _ref2$proceedBtnText = _ref2.proceedBtnText,
      proceedBtnText = _ref2$proceedBtnText === void 0 ? 'Confirm' : _ref2$proceedBtnText,
      _ref2$closeBtnText = _ref2.closeBtnText,
      closeBtnText = _ref2$closeBtnText === void 0 ? 'Close' : _ref2$closeBtnText,
      _ref2$CustomModalCont = _ref2.CustomModalContainer,
      CustomModalContainer = _ref2$CustomModalCont === void 0 ? ModalContainer : _ref2$CustomModalCont,
      _ref2$CustomModalCont2 = _ref2.CustomModalContent,
      CustomModalContent = _ref2$CustomModalCont2 === void 0 ? ModalContent : _ref2$CustomModalCont2,
      _ref2$CustomPrimaryBu = _ref2.CustomPrimaryButton,
      CustomPrimaryButton = _ref2$CustomPrimaryBu === void 0 ? defaultBtn : _ref2$CustomPrimaryBu,
      _ref2$CustomSecondary = _ref2.CustomSecondaryButton,
      CustomSecondaryButton = _ref2$CustomSecondary === void 0 ? defaultBtn : _ref2$CustomSecondary,
      props = _objectWithoutProperties(_ref2, ["content", "children", "onModalShow", "onModalClose", "proceedAction", "showOnRender", "showXBtn", "addControls", "closeOnBackdrop", "persist", "proceedBtnText", "closeBtnText", "CustomModalContainer", "CustomModalContent", "CustomPrimaryButton", "CustomSecondaryButton"]);

  var _useState = useState(showOnRender),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      dynamicContent = _useState4[0],
      setDynamicContent = _useState4[1];

  var _useState5 = useState({
    showXBtn: showXBtn,
    addControls: addControls,
    closeOnBackdrop: closeOnBackdrop,
    persist: persist,
    proceedBtnText: proceedBtnText,
    closeBtnText: closeBtnText
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      options = _useState6[0],
      setOptions = _useState6[1];

  var updateOptions = function updateOptions(opts) {
    setOptions(function (prev) {
      return _objectSpread(_objectSpread({}, prev), opts);
    });
  };

  var _useState7 = useState({
    Container: CustomModalContainer,
    Content: CustomModalContent,
    PrimaryBtn: CustomPrimaryButton,
    SecondaryBtn: CustomSecondaryButton
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      CustomComponent = _useState8[0],
      setCustomComponent = _useState8[1];

  var updateCustomComponents = function updateCustomComponents(comps) {
    setCustomComponent(function (prev) {
      return _objectSpread(_objectSpread({}, prev), comps);
    });
  };

  useEffect(function () {
    if (show) {
      if (typeof onModalShow === 'function') {
        onModalShow();
      }
    } else {
      if (typeof onModalClose === 'function') {
        onModalClose();
      }
    }
  }, [show]);
  useEffect(function () {
    setOptions({
      showXBtn: showXBtn,
      addControls: addControls,
      closeOnBackdrop: closeOnBackdrop,
      persist: persist,
      proceedBtnText: proceedBtnText,
      closeBtnText: closeBtnText
    });

    if (showOnRender !== show) {
      setShow(showOnRender);
    }
  }, [showXBtn, addControls, closeOnBackdrop, persist, proceedBtnText, closeBtnText, showOnRender]);

  var setModalState = function setModalState(state) {
    setShow(state);
  };

  var closeModal = setModalState.bind(_this, false);
  var showModal = setModalState.bind(_this, true);
  var toggleModal = setModalState.bind(_this, !show);

  var prioritizeModalContent = function prioritizeModalContent() {
    if (content) {
      return content;
    } else {
      return dynamicContent;
    }
  };

  var propsToPassDown = {
    showModal: showModal,
    closeModal: closeModal,
    toggleModal: toggleModal,
    setDynamicContent: setDynamicContent,
    updateOptions: updateOptions,
    updateCustomComponents: updateCustomComponents
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ModalContext.Provider, {
    value: propsToPassDown
  }, typeof children === 'function' ? children(_objectSpread(_objectSpread({}, propsToPassDown), props)) : children), show || options.persist ? /*#__PURE__*/React.createElement(CustomComponent.Container, {
    show: show,
    closeOnBackdrop: options.closeOnBackdrop,
    onClick: function onClick() {
      options.closeOnBackdrop ? closeModal() : null;
    },
    title: options.closeOnBackdrop ? 'Click to close' : undefined
  }, /*#__PURE__*/React.createElement(CustomComponent.Content, {
    onClick: function onClick(e) {
      e.stopPropagation();
    },
    title: ""
  }, options.showXBtn ? /*#__PURE__*/React.createElement(ModalXButton, {
    onClick: closeModal
  }, /*#__PURE__*/React.createElement(CloseIcon, {
    style: {
      fill: '#fff',
      height: '20px'
    }
  })) : null, typeof prioritizeModalContent() === 'function' ? prioritizeModalContent()(_objectSpread(_objectSpread({}, propsToPassDown), props)) : prioritizeModalContent(), options.addControls ? /*#__PURE__*/React.createElement(FlexRow, {
    style: {
      paddingTop: '20px'
    }
  }, /*#__PURE__*/React.createElement(CustomComponent.SecondaryBtn, {
    onClick: closeModal
  }, options.closeBtnText), /*#__PURE__*/React.createElement(CustomComponent.PrimaryBtn, {
    onClick: function onClick() {
      closeModal();
      proceedAction();
    },
    style: {
      marginLeft: 'auto'
    }
  }, options.proceedBtnText)) : null)) : null);
};