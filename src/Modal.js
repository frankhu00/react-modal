import React, { useState, useEffect } from 'react';
import CloseIcon from './CloseIcon';
import { FlexRow, ModalContainer, ModalContent, ModalXButton } from './styled';
import { ModalContext } from './ModalContext';

const defaultBtn = ({ children, ...props }) => (
    <button type="button" {...props}>
        {typeof children === 'function' ? children(props) : children}
    </button>
);

export const Modal = ({
    content,
    children,
    onModalShow,
    onModalClose,
    proceedAction = () => {
        console.warn('Modal proceedAction not defined!');
    },
    showOnRender = false,
    showXBtn = true,
    addControls = false,
    closeOnBackdrop = true,
    persist = false,
    proceedBtnText = 'Confirm',
    closeBtnText = 'Close',
    CustomModalContainer = ModalContainer,
    CustomModalContent = ModalContent,
    CustomPrimaryButton = defaultBtn,
    CustomSecondaryButton = defaultBtn,
    ...props
}) => {
    const [show, setShow] = useState(showOnRender);
    const [dynamicContent, setDynamicContent] = useState(null);
    const [options, setOptions] = useState({
        showXBtn,
        addControls,
        closeOnBackdrop,
        persist,
        proceedBtnText,
        closeBtnText,
    });

    const updateOptions = (opts) => {
        setOptions((prev) => ({ ...prev, ...opts }));
    };

    const [CustomComponent, setCustomComponent] = useState({
        Container: CustomModalContainer,
        Content: CustomModalContent,
        PrimaryBtn: CustomPrimaryButton,
        SecondaryBtn: CustomSecondaryButton,
    });

    const updateCustomComponents = (comps) => {
        setCustomComponent((prev) => ({ ...prev, ...comps }));
    };

    useEffect(() => {
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

    useEffect(() => {
        setOptions({
            showXBtn,
            addControls,
            closeOnBackdrop,
            persist,
            proceedBtnText,
            closeBtnText,
        });
        if (showOnRender !== show) {
            setShow(showOnRender);
        }
    }, [
        showXBtn,
        addControls,
        closeOnBackdrop,
        persist,
        proceedBtnText,
        closeBtnText,
        showOnRender,
    ]);

    const setModalState = (state) => {
        setShow(state);
    };
    const closeModal = setModalState.bind(this, false);
    const showModal = setModalState.bind(this, true);
    const toggleModal = setModalState.bind(this, !show);

    const prioritizeModalContent = () => {
        if (content) {
            return content;
        } else {
            return dynamicContent;
        }
    };

    const propsToPassDown = {
        showModal,
        closeModal,
        toggleModal,
        setDynamicContent,
        updateOptions,
        updateCustomComponents,
    };

    return (
        <>
            <ModalContext.Provider value={propsToPassDown}>
                {typeof children === 'function'
                    ? children({ ...propsToPassDown, ...props })
                    : children}
            </ModalContext.Provider>
            {show || options.persist ? (
                <CustomComponent.Container
                    show={show}
                    closeOnBackdrop={options.closeOnBackdrop}
                    onClick={() => {
                        options.closeOnBackdrop ? closeModal() : null;
                    }}
                    title={options.closeOnBackdrop ? 'Click to close' : undefined}
                >
                    <CustomComponent.Content
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        title=""
                    >
                        {options.showXBtn ? (
                            <ModalXButton onClick={closeModal}>
                                <CloseIcon style={{ fill: '#fff', height: '20px' }} />
                            </ModalXButton>
                        ) : null}
                        {typeof prioritizeModalContent() === 'function'
                            ? prioritizeModalContent()({ ...propsToPassDown, ...props })
                            : prioritizeModalContent()}
                        {options.addControls ? (
                            <FlexRow style={{ paddingTop: '20px' }}>
                                <CustomComponent.SecondaryBtn onClick={closeModal}>
                                    {options.closeBtnText}
                                </CustomComponent.SecondaryBtn>
                                <CustomComponent.PrimaryBtn
                                    onClick={() => {
                                        closeModal();
                                        proceedAction();
                                    }}
                                    style={{ marginLeft: 'auto' }}
                                >
                                    {options.proceedBtnText}
                                </CustomComponent.PrimaryBtn>
                            </FlexRow>
                        ) : null}
                    </CustomComponent.Content>
                </CustomComponent.Container>
            ) : null}
        </>
    );
};
