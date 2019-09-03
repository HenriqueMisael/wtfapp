import React from 'react';
import { useDispatch } from 'react-redux';

import { foodCreators } from 'shared-store/src/store/food';

import { MessageModal } from '../../components/Modal';

export default () => {

  const dispatch = useDispatch();

  return (
    <MessageModal
      messages={['Consegui! HAHAHA! Tente outra vez com uma mais difícil... quem sabe não me ensina alguma coisa!']}
      confirmationText={'Tentar novamente'}
      confirmationAction={() => dispatch(foodCreators.foodSetStart())}
    />
  );
}
