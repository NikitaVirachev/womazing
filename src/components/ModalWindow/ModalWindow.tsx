import React from 'react';
import ReactDOM from 'react-dom';

import Backdrop from './Backdrop.tsx';
import ModalOverlay from './ModalOverlay.tsx';
import { ModalOverlayProps } from './ModalOverlay.tsx';

interface ModalWindowProps extends ModalOverlayProps {
  onClose: () => void;
}

const ModalWindow = (props: ModalWindowProps) => {
  const backdropRoot = document.querySelector('#backdrop-root');
  const overlayRoot = document.querySelector('#overlay-root');

  return (
    <React.Fragment>
      {backdropRoot &&
        ReactDOM.createPortal(
          <Backdrop onClick={props.onClose} />,
          backdropRoot
        )}
      {overlayRoot &&
        ReactDOM.createPortal(
          <ModalOverlay title={props.title}>{props.children}</ModalOverlay>,
          overlayRoot
        )}
    </React.Fragment>
  );
};

export default ModalWindow;
