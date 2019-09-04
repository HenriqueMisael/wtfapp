import React from 'react';

import { InputModal } from '../../components/Modal';
import { useSelector } from 'react-redux';
import { foodCreators, foodSelectors } from 'shared-store/src/store/food';

export default () => {

  const newFoodName = useSelector(foodSelectors.getLearningFood);
  const currentFoodName = useSelector(foodSelectors.getCurrentName);

  return <InputModal
    messages={[
      'Não conheço essa comida. Vou precisar mais um pouco da sua ajuda.',
      `Pense numa característica de ${newFoodName} que a diferencia de ${currentFoodName}.`
    ]}
    actionCreator={foodCreators.foodFinishLearningAsync}
  />;
}
