import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { foodCreators, foodSelectors, Stages } from 'shared-store';

import { MessageModal } from '../../components/Modal';
import { FailScreen, LearningScreen, PlayScreen, SuccessScreen } from '../index';
import { Map } from 'immutable';
import { Food } from 'shared-store/src/food/model';
import { apiCreators } from 'shared-store/src/api';
import { translate } from 'internationalization/src';

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiCreators.apiSetOnlineAsync());
  }, [dispatch]);

  const stage = useSelector(foodSelectors.getStage);
  const foods = useSelector(foodSelectors.getAll);

  if (stage === Stages.PLAY) return <PlayScreen />;
  if (stage === Stages.SUCCESS) return <SuccessScreen />;
  if (stage === Stages.FAIL) return <FailScreen />;
  if (stage === Stages.LEARNING) return <LearningScreen />;

  return (
    <MessageModal
      messages={[translate('welcomeMessage.start'), translate('welcomeMessage.learning')]}
      confirmationText={translate('iveAlreadyChosenMyFood')}
      confirmationAction={() => {
        if (foods.isEmpty()) {
          dispatch(
            foodCreators.foodAddFoods(
              Map([[1, Food('bolo de cenoura', 2)], [2, Food('lasanha à bolonhesa')]]),
            ),
          );
        }
        dispatch(foodCreators.foodStartPlaying());
      }}
    />
  );
};
