import React from 'react';

import { foodCreators } from 'shared-store';

import { InputModal } from '../../components/Modal';
import { translate } from 'internationalization/src';

export default () => {
  return (
    <InputModal
      messages={[translate('iveGotOutOfIdeas'), translate('tellMeWhatYouHaveThought')]}
      actionCreator={foodCreators.foodSetLearning}
    />
  );
};
