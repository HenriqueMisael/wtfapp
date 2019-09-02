import React from 'react';
import { connect } from 'react-redux';

import Divider from '../../components/Divider';
import Modal from '../../components/Modal';
import { CenteredText } from '../../components/Text';
import { foodCreators, foodSelectors } from 'shared-store';
import { ButtonsContainer } from './styled-wrappers';
import { NoBorderButton } from '../../components/buttons';
import { bindActionCreators } from 'redux';

const Home = ({
  question,
  foodHandleYesOptionAsync,
  foodHandleNoOptionAsync
}) => (
  <Modal>
    <CenteredText>{question}</CenteredText>
    <Divider />
    <ButtonsContainer>
      <NoBorderButton text="Sim" action={foodHandleYesOptionAsync} />
      <NoBorderButton text="Não" action={foodHandleNoOptionAsync} />
    </ButtonsContainer>
  </Modal>
);

const mapStateToProps = state => ({
  question: foodSelectors.getCurrentQuestion(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...foodCreators }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
