import React, { useState } from 'react';

import { CustomFooterMessageModal } from '../../Modal';
import { InputText } from '../../inputs';
import { CentralizedContainer } from '../../containers';
import { NextButton } from '../../buttons';

const InputModal = ({ messages, action }) => {
  const [inputValue, setInputValue] = useState('');

  let confirm = () => action(inputValue);
  return (
    <CustomFooterMessageModal messages={messages}>
      <CentralizedContainer>
        <InputText
          autoFocus={true}
          onChange={evt => setInputValue(evt.target.value)}
          value={inputValue}
          onEnter={confirm}
        >
          <NextButton action={confirm} />
        </InputText>
      </CentralizedContainer>
    </CustomFooterMessageModal>
  );
};

export default InputModal;
