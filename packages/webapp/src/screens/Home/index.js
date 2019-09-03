import React from 'react';
import Play from '../Play';
import { foodSelectors, Stages } from 'shared-store';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../../components/Modal';
import { HDivider } from '../../components/Divider';
import { Text } from '../../components/Text';
import { ButtonsContainer } from '../Play/styled-wrappers';
import { Button } from '../../components/buttons';
import { foodCreators } from 'shared-store/src/store/food';

export default () => {
  const dispatch = useDispatch();
  const stage = useSelector(foodSelectors.getStage);

  if (stage === Stages.PLAY) return <Play />;

  return (
    <Modal>
      <Text>
        {`Bem vindo! Este é um jogo onde a máquina tentará adivinhar um alimento
        que você escolher antes de iniciar (Agora mesmo!). A máquina fará uma
        série de perguntas que devem ser respondidas com 'sim' ou 'não', até que
        a máquina acerte ou não tenha mais perguntas que a auxiliem a conseguir
        a resposta.`}
      </Text>
      <Text>{`Caso a máquina não consiga adivinhar, ao final de tudo será pedido para que você diga uma característica que diferencie a sua escolha da última possibilidade, e com base nisso ela será adicionada ao corpo de conhecimento do nosso mecanismo de adivinhação. Quanto mais você jogar, melhor o jogo será em adivinhar!`}</Text>
      <HDivider />
      <ButtonsContainer>
        <Button
          text="Já escolhi minha comida!"
          action={() => dispatch(foodCreators.foodStartPlaying())}
        />
      </ButtonsContainer>
    </Modal>
  );
};
