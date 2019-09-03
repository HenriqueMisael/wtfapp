import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { foodCreators, foodSelectors, Stages } from 'shared-store';

import { MessageModal } from '../../components/Modal';
import { PlayScreen, SuccessScreen } from '../index';

export default () => {
  const dispatch = useDispatch();
  const stage = useSelector(foodSelectors.getStage);

  if (stage === Stages.PLAY) return <PlayScreen/>;
  if (stage === Stages.SUCCESS) return <SuccessScreen/>;

  return (
    <MessageModal
      messages={[
        'Bem vindo! Este é um jogo onde a máquina tentará adivinhar um alimento que você escolher antes de iniciar (Agora mesmo!). A máquina fará uma série de perguntas que devem ser respondidas com \'sim\' ou \'não\', até que a máquina acerte ou não tenha mais perguntas que a auxiliem a conseguir a resposta.',
        'Caso a máquina não consiga adivinhar, ao final de tudo será pedido para que você diga uma característica que diferencie a sua escolha da última possibilidade, e com base nisso ela será adicionada ao corpo de conhecimento do nosso mecanismo de adivinhação. Quanto mais você jogar, melhor o jogo será em adivinhar!'
      ]}
      confirmationText={'Já escolhi minha comida!'}
      confirmationAction={() => dispatch(foodCreators.foodStartPlaying())}
    />
  );
};
