import React from 'react';
import { render } from 'react-dom';
import { Modal } from './src';

const Demo = () => (
    <div>
        <h1>Modal Demo</h1>
        <Modal
            content={<div>demo modal content</div>}
            onModalClose={() => {
                console.log('on modal close');
            }}
            onModalShow={() => {
                console.log('on modal open');
            }}
        >
            {({ showModal }) => <button onClick={showModal}>Click to trigger modal</button>}
        </Modal>
    </div>
);

render(<Demo />, document.getElementById('root'));
