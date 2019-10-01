import React from 'react';

import { foodCreators } from 'shared-store';

import { InputModal } from '../../components/Modal';
import { translate } from 'internationalization/src';
import { useDispatch } from 'react-redux';

export default ({history}) => {
  const dispatch = useDispatch();
  return (
    <InputModal
      messages={[translate('iveGotOutOfIdeas'), translate('tellMeWhatYouHaveThought')]}
      action={inputValue => {
        dispatch(foodCreators.foodSetLearning(inputValue));
        history.push(`/learning`);
      }}
    />
  );
};
