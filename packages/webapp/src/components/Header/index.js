import React from 'react';
import {
  ButtonContainer,
  Container,
  EndContainer,
  HeaderText,
  Overlay,
} from './styled-wrappers';
import { Button } from '../buttons';
import { RingLoader } from '../loader';
import { useDispatch, useSelector } from 'react-redux';
import { VDivider } from '../Divider';
import { apiCreators, apiSelectors } from 'shared-store/src/api';

const Header = () => {
  const dispatch = useDispatch();
  const online = useSelector(apiSelectors.isOnline);
  const fetching = useSelector(apiSelectors.isFetching);

  return (
    <Overlay>
      <Container>
        <HeaderText>What's The Food</HeaderText>
        <VDivider />
        <EndContainer>
          {fetching ? (
            <RingLoader />
          ) : online ? (
            <ButtonContainer>
              <Button
                background={'#44AA44'}
                text={'Online'}
                action={() => dispatch(apiCreators.apiSetOfflineAsync())}
              />
            </ButtonContainer>
          ) : (
            <Button
              background={'#AA4444'}
              text={'Offline'}
              action={() => dispatch(apiCreators.apiSetOnlineAsync())}
            />
          )}
        </EndContainer>
      </Container>
    </Overlay>
  );
};

export default Header;
