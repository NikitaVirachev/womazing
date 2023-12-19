import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Input from '../Input.jsx';
import ButtonCTA from '../../ButtonCTA.jsx';
import useInput from '../../../hooks/useInput.jsx';

const CallFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`;

const CallForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => !!value.trim().match(/[\d\w]+@(\w+\.)+\w\w\w?/i));

  const {
    value: enteredNumber,
    isValid: enteredNumberIsValid,
    hasError: numberInputHasError,
    valueChangeHandler: numberChangedHandler,
    inputBlurHandler: numberBlurHandler,
    reset: resetNumberInput,
  } = useInput(
    (value) => !!value.trim().match(/(?:\+7|8)-?9\d{2}-?\d{3}-?\d{2}-?\d{2}/i)
  );

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredNumberIsValid) {
    formIsValid = true;
  }
  console.log(formIsValid);

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    resetNameInput();
    resetEmailInput();
    resetNumberInput();

    props.onShowMessage();
  };

  return (
    <CallFormContainer onSubmit={formSubmissionHandler}>
      <Input
        placeholder={'Имя'}
        type="text"
        onChange={nameChangedHandler}
        onBlur={nameBlurHandler}
        value={enteredName}
        hasError={nameInputHasError}
      />
      <Input
        placeholder={'E-mail'}
        type="email"
        onChange={emailChangedHandler}
        onBlur={emailBlurHandler}
        value={enteredEmail}
        hasError={emailInputHasError}
      />
      <Input
        placeholder={'Телефон'}
        type="tel"
        onChange={numberChangedHandler}
        onBlur={numberBlurHandler}
        value={enteredNumber}
        hasError={numberInputHasError}
      />
      <ButtonCTA disabled={!formIsValid} $isOutline={false}>
        Заказать звонок
      </ButtonCTA>
    </CallFormContainer>
  );
};

CallForm.propTypes = {
  onShowMessage: PropTypes.func,
};

export default CallForm;
