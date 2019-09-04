import React from 'react';
import { ButtonsContainer } from '../../../screens/Play/styled-wrappers';
import { Button } from '../../buttons';
import { CustomFooterMessageModal } from '../index';

export default ({ messages, confirmationText, confirmationAction }) => (
  <CustomFooterMessageModal messages={messages}>
    <ButtonsContainer>
      <Button text={confirmationText} action={confirmationAction} />
    </ButtonsContainer>
  </CustomFooterMessageModal>
);
