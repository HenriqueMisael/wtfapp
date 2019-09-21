import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { HDivider } from '../../components/Divider';
import Modal from '../../components/Modal/Default';
import { CenteredText } from '../../components/Text';
import { foodCreators, foodSelectors } from 'shared-store';
import { ButtonsContainer } from './styled-wrappers';
import { NoBorderButton } from '../../components/buttons';

const Home = () => {
  const dispatch = useDispatch();

  const question = useSelector(foodSelectors.getCurrentQuestion);

  return (
    <Modal>
      <CenteredText>{question}</CenteredText>
      <HDivider />
      <ButtonsContainer>
        <NoBorderButton
          text="Sim"
          action={() => dispatch(foodCreators.foodHandleYesOptionAsync())}
        />
        <NoBorderButton
          text="Não"
          action={() => dispatch(foodCreators.foodHandleNoOptionAsync())}
        />
      </ButtonsContainer>
    </Modal>
  );
};
export default Home;
