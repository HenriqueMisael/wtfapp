import React from 'react';
import Modal from '../Default';
import { Text } from '../../Text';
import { HDivider } from '../../Divider';

export default ({ children, messages }) => (
  <Modal>
    {messages.map((message, index) => (
      <Text key={index} color={'#333333'}>
        {message}
      </Text>
    ))}
    <HDivider />
    {children}
  </Modal>
);
