import React from 'react';

import { InputModal } from '../../components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { foodCreators, foodSelectors } from 'shared-store';
import { translate } from 'internationalization/src';

export default ({history}) => {

  const dispatch = useDispatch();

  const newFoodName = useSelector(foodSelectors.getLearningFood);
  const currentFoodName = useSelector(foodSelectors.getCurrentName);

  return (
    <InputModal
      messages={[
        translate('iDontRecognizeThatFood'),
        translate('thinkInAPeculiarity', { newFoodName, currentFoodName }),
      ]}
      action={inputValue => {
        dispatch(foodCreators.foodFinishLearningAsync(inputValue));
        history.push(`/`);
      }}
    />
  );
};
