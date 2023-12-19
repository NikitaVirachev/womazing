import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const StyledInput = styled.input`
  color: #868686;
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 140%; /* 23.8px */
  letter-spacing: 0.34px;
  border: none;

  &:focus {
    outline: none;
  }
`;

const Line = styled.div`
  height: 1px;
  background: ${(props) => (props.$error ? '#ef5350' : '#000')};
`;

const Input = (props) => {
  return (
    <InputContainer>
      <StyledInput
        value={props.value}
        placeholder={props.placeholder}
        onBlur={props.onBlur}
        onChange={props.onChange}
        type={props.type}
      />
      <Line $error={props.hasError} />
    </InputContainer>
  );
};

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  type: PropTypes.string,
  hasError: PropTypes.bool,
};

export default Input;
