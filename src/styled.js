import styled from 'styled-components';

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ModalContainer = styled(FlexRow)`
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: ${({ zIndex }) => (zIndex ? zIndex : 99)};
    cursor: ${({ closeOnBackdrop }) => (closeOnBackdrop ? 'pointer' : 'initial')};
    ${({ show }) => (show === false ? `display: none;` : null)}
`;

export const ModalContent = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    min-width: 350px;
    cursor: initial;
    position: relative;
`;

export const ModalXButton = styled.div`
    cursor: pointer;
    position: absolute;
    top: -25px;
    right: -20px;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`;
