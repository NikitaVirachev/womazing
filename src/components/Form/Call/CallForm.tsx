import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Input from '../Input.tsx';
import ButtonCTA from '../../ButtonCTA.tsx';
import useInput from '../../../hooks/useInput.tsx';
import useHTTP from '../../../hooks/useHTTP.tsx';
import { URL } from '../../../db/constants.ts';
import { modalWindowsActions } from '../../../store/modalWindowsSlice.tsx';

const CallFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`;

type CallFormProps = {
  onShowMessage: () => void;
};

const CallForm = (props: CallFormProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getJSON, error } = useHTTP();

  useEffect(() => {
    if (error) {
      navigate('error', { replace: true, state: { error } });
      dispatch(modalWindowsActions.setCallModalWindow(false));
    }
  }, [error]);

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
    (value) => !!value.trim().match(/(?:\+7|8)-?9\d{2}-?\d{3}-?\d{2}-?\d{2}/i),
  );

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredNumberIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const acceptAnswer = (data: string): void => {
      console.log(data);
      resetNameInput();
      resetEmailInput();
      resetNumberInput();
      props.onShowMessage();
    };

    const requestConfig = {
      url: `${URL}/callback_ordrs`,
      method: 'POST',
      body: JSON.stringify({
        name: enteredName,
        email: enteredEmail,
        phone: enteredNumber,
      }),
    };
    getJSON(requestConfig, 'Failed to register callback', acceptAnswer);
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
