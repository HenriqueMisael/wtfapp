import React from 'react';

import { foodCreators } from 'shared-store/src/store/food';

import { InputModal } from '../../components/Modal';

export default () => {
  return (
    <InputModal
      messages={[
        'Ah não! Fiquei sem ideias...',
        'Me conta aí o que você pensou, fazendo o favor. Na próxima eu acerto!',
      ]}
      actionCreator={foodCreators.foodSetLearning}
    />
  );
};
