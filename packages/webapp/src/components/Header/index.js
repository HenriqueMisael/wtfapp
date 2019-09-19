import React from 'react';
import { ButtonContainer, Container, HeaderText, Overlay } from './styled-wrappers';
import { Button } from '../buttons';
import { useDispatch, useSelector } from 'react-redux';
import { VDivider } from '../Divider';
import { foodCreators, foodSelectors } from 'shared-store';

const Header = () => {
  const dispatch = useDispatch();
  const online = useSelector(foodSelectors.isOnline);

  return (
    <Overlay>
      <Container>
        <HeaderText>What's The Food</HeaderText>
        <VDivider />
        <ButtonContainer>
          {online && (
            <Button background={'#44AA44'} text={'Online'} action={() => dispatch(foodCreators.foodSetOfflineAsync())} />
          )}
          {!online && (
            <Button background={'#AA4444'} text={'Offline'} action={() => dispatch(foodCreators.foodSetOnlineAsync())} />
          )}
        </ButtonContainer>
      </Container>
    </Overlay>
  );
};

export default Header;
