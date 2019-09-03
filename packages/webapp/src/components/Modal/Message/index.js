import React from 'react';
import Modal from '../Default';
import { Text } from '../../Text';
import { HDivider } from '../../Divider';
import { ButtonsContainer } from '../../../screens/Play/styled-wrappers';
import { Button } from '../../buttons';

export default ({ messages, confirmationText, confirmationAction }) => (
  <Modal>
    {messages.map(message => <Text color={'#333333'}>{message}</Text>)}
    <HDivider/>
    <ButtonsContainer>
      <Button
        text={confirmationText}
        action={confirmationAction}
      />
    </ButtonsContainer>
  </Modal>
)
