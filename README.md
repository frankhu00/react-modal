# React Modal

A simple `react` + `styled-components` modal

## Package Interface

Named exports: `Modal`, `useModalContext`, `ModalContainer`, and `ModalContent`  
Default export: `Modal`

## Usages

### 1) Pass in a function as children to access modal methods

```javascript
<Modal content={() => <div>Modal Content</div>}>
    {({ showModal }) => <button onClick={showModal}>Button to trigger modal</button>}
</Modal>
```

### 2) Modal methods are passed to the direct descendant

```javascript
const SampleButton = ({ showModal }) => {
    return <button onClick={showModal}>Sample Button</button>;
};

<Modal content={() => <div>Modal Content</div>}>
    <SampleButton />
</Modal>;
```

### 3) Using ContextAPI to access modal methods

```javascript
const GrandchildButton = () => {
    const { showModal } = useModalContext();

    return <button onClick={showModal}>Grandchild Button</button>;
};

<Modal content={() => <div>Modal Content</div>}>
    <div className="component-container">
        <GrandchildButton />
    </div>
</Modal>;
```

## Modal Props

| Prop                  | Type                         | Default                 | Description                                                                                                                                                                                       |
| --------------------- | ---------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| content               | Component \| () => Component | undefined               | A component or function that returns a component to serve as the modal content                                                                                                                    |
| onModalShow           | func                         | undefined               | Function to trigger when the modal is shown                                                                                                                                                       |
| onModalClose          | func                         | undefined               | Function to trigger when the modal is closed                                                                                                                                                      |
| animationDuration     | number                       | 500                     | The fade in / out duration in ms                                                                                                                                                                  |
| showOnRender          | boolean                      | false                   | If true, modal will display when mounted                                                                                                                                                          |
| showXBtn              | boolean                      | true                    | If true, a "x" button will rendered at the top right of the modal                                                                                                                                 |
| persist               | boolean                      | false                   | If true, the modal will be mounted in dom and hidden / shown via CSS                                                                                                                              |
| closeOnBackdrop       | boolean                      | true                    | If true, clicking on the backdrop will close the modal                                                                                                                                            |
| addControls           | boolean                      | false                   | If true, modal will automatically append two action buttons: "Close" and "Confirm". The "Close" button will close the modal, and the action of the "Confirm" is dependent on "proceedAction" prop |
| proceedAction         | func                         | () => console.warn(...) | The onClick handler for the "Confirm" button created from "addControls" prop                                                                                                                      |
| proceedBtnText        | string                       | "Confirm"               | The text displayed for "Confirm" button                                                                                                                                                           |
| closeBtnText          | string                       | "Close"                 | The text displayed for "Close" button                                                                                                                                                             |
| CustomModalContainer  | Component                    | ModalContainer          | Defines the component that warps around the entire modal                                                                                                                                          |
| CustomModalContent    | Component                    | ModalContent            | Defines the component used to wrap around the modal content                                                                                                                                       |
| CustomPrimaryButton   | Component                    | button element          | The component that is used to generate the "Confirmed" button                                                                                                                                     |
| CustomSecondaryButton | Component                    | button element          | The component that is used to generate the "Closed" button                                                                                                                                        |

## Modal Methods

Below are the methods available to control the modal

| Method                 | Inputs                                           | Description                       |
| ---------------------- | ------------------------------------------------ | --------------------------------- |
| showModal              | none                                             | Displays the modal                |
| closeModal             | none                                             | Closes the modal                  |
| toggleModal            | none                                             | Toggles the state of the modal    |
| setDynamicContent      | Component \| Func Component                      | Updates the contents of the modal |
| updateOptions          | { showXBtn, addControls, ...etc }                | Updates the specified option      |
| updateCustomComponents | { Container, Content, PrimaryBtn, SecondaryBtn } | Updates the custom components     |

## Additional Notes

### ModalContainer styled component

**Extend ModalContainer with styled-components to make furthur css changes** since this component is looking for `show`, `zIndex`, `closeOnBackdrop`, `stage`, `animationDuration` prop for animations and default styling

-   `show` is used to toggle the css display rule
-   `zIndex` sets z-index rule
-   `closeOnBackdrop` will set the cursor rule
-   `stage` is used to determine the component's rendering stage (entering vs exiting) to use either fade in or fade out animation
-   `animationDuration` specifies the duration of the animation
