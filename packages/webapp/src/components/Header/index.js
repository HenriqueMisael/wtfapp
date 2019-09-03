import React from 'react';
import {
  ButtonContainer,
  Container,
  HeaderText,
  Overlay
} from './styled-wrappers';
import { Button } from '../buttons';
import { connect } from 'react-redux';
import { VDivider } from '../Divider';
import { bindActionCreators } from 'redux';
import { foodCreators } from 'shared-store/src/store/food';

const Header = ({ foodResetAsync }) => {
  return (
    <Overlay>
      <Container>
        <HeaderText>What's The Food</HeaderText>
        <VDivider />
        <ButtonContainer>
          <Button text={'Resetar'} action={foodResetAsync} />
        </ButtonContainer>
      </Container>
    </Overlay>
  );
};

export default connect(
  () => ({}),
  dispatch => bindActionCreators(foodCreators, dispatch)
)(Header);
