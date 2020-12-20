import { useContext, createContext } from 'react';

export const ModalContext = createContext(); //not exported in index.js, used in Modal hoc

export const useModalContext = () => useContext(ModalContext);
