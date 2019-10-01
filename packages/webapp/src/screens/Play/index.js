import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { HDivider } from '../../components/Divider';
import Modal from '../../components/Modal/Default';
import { CenteredText } from '../../components/Text';
import { apiSelectors, foodCreators, foodSelectors, Stages } from 'shared-store';
import { ButtonsContainer } from './styled-wrappers';
import { NoBorderButton } from '../../components/buttons';
import { RingLoader } from '../../components/loader';
import { translate } from 'internationalization/src';

const Home = ({ history }) => {
  const stage = useSelector(foodSelectors.getStage);

  useEffect(() => {
    if (stage === Stages.SUCCESS) history.push(`/success`);
    else if (stage === Stages.FAIL) history.push(`/fail`);
  }, [stage, history]);

  const dispatch = useDispatch();

  const question = useSelector(foodSelectors.getCurrentQuestion);
  const fetching = useSelector(apiSelectors.isFetching);

  return (
    <Modal>
      <CenteredText>{question}</CenteredText>
      <HDivider />

      {fetching ? (
        <RingLoader />
      ) : (
        <ButtonsContainer>
          <NoBorderButton
            text={translate('yes')}
            action={() => dispatch(foodCreators.foodHandleYesOptionAsync())}
          />
          <NoBorderButton
            text={translate('no')}
            action={() => dispatch(foodCreators.foodHandleNoOptionAsync())}
          />
        </ButtonsContainer>
      )}
    </Modal>
  );
};
export default Home;
