import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: rgba(110, 156, 159, 0.95);

  animation: modalAnimation 0.5s ease;

  @keyframes modalAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default Backdrop;
