import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { foodCreators, foodSelectors, Stages } from 'shared-store';

import { MessageModal } from '../../components/Modal';
import { FailScreen, LearningScreen, PlayScreen, SuccessScreen } from '../index';
import { Map } from 'immutable';
import { Food } from 'shared-store/src/food/model';
import { apiCreators } from 'shared-store/src/api';

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
      messages={[
        "Bem vindo! Este é um jogo onde a máquina tentará adivinhar um alimento que você escolher antes de iniciar (Agora mesmo!). A máquina fará uma série de perguntas que devem ser respondidas com 'sim' ou 'não', até que a máquina acerte ou não tenha mais perguntas que a auxiliem a conseguir a resposta.",
        'Caso a máquina não consiga adivinhar, ao final de tudo será pedido para que você diga uma característica que diferencie a sua escolha da última possibilidade, e com base nisso ela será adicionada ao corpo de conhecimento do nosso mecanismo de adivinhação. Quanto mais você jogar, melhor o jogo será em adivinhar!',
      ]}
      confirmationText={'Já escolhi minha comida!'}
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
