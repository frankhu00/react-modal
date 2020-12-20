import React from 'react';
import { render } from 'react-dom';
import { Modal } from './src';

const Demo = () => (
    <div>
        <h1>Modal Demo</h1>
        <Modal content={<div>demo modal content</div>}>
            {({ showModal }) => <button onClick={showModal}>Click to trigger modal</button>}
        </Modal>
    </div>
);

render(<Demo />, document.getElementById('root'));
