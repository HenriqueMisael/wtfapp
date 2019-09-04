import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { CustomFooterMessageModal } from '../../Modal';
import { InputText } from '../../inputs';
import { CentralizedContainer } from '../../containers';
import { NextButton } from '../../buttons';

export default ({ messages, actionCreator }) => {

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  let confirm = () => dispatch(actionCreator(inputValue));
  return (
    <CustomFooterMessageModal
      messages={messages}
    >
      <CentralizedContainer>
        <InputText autoFocus={true} onChange={(evt) => setInputValue(evt.target.value)} value={inputValue}
                   onEnter={confirm}>
          <NextButton action={confirm}/>
        </InputText>
      </CentralizedContainer>
    </CustomFooterMessageModal>
  );
}
