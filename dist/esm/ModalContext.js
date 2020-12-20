import { useContext, createContext } from 'react';
export var ModalContext = /*#__PURE__*/createContext(); //not exported in index.js, used in Modal hoc

export var useModalContext = function useModalContext() {
  return useContext(ModalContext);
};