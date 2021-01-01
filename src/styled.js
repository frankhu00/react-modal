import styled, { css } from 'styled-components';
import { DelayUnmountStage, fade } from '@frankhu00/react-animations';

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
    ${({ show }) =>
        show === false
            ? css`
                  display: none;
              `
            : null}
    ${({ stage, animationDuration }) =>
        stage === DelayUnmountStage.ENTERING
            ? css`
                  animation: ${fade.in()} ${Number(animationDuration) / 1000}s forwards;
              `
            : css`
                  animation: ${fade.out()} ${Number(animationDuration) / 1000}s forwards;
              `}
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
