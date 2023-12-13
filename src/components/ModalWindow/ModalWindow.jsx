import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Backdrop from './Backdrop.jsx';
import ModalOverlay from './ModalOverlay.jsx';

const ModalWindow = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        document.querySelector('#backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={props.title}>{props.children}</ModalOverlay>,
        document.querySelector('#overlay-root')
      )}
    </React.Fragment>
  );
};

ModalWindow.propTypes = {
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default ModalWindow;
