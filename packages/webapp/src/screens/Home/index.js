import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { foodCreators, foodSelectors } from 'shared-store';

import { MessageModal } from '../../components/Modal';
import { Map } from 'immutable';
import { Food } from 'shared-store/src/food/model';
import { apiCreators } from 'shared-store/src/api';
import { translate } from 'internationalization/src';
import { withRouter } from 'react-router';

const Home = ({history}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiCreators.apiSetOnlineAsync());
  }, [dispatch]);

  const foods = useSelector(foodSelectors.getAll);

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
        history.push(`/play`);
      }}
    />
  );
};

export default withRouter(Home);
