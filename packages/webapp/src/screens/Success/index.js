import React from 'react';
import { useDispatch } from 'react-redux';

import { foodCreators } from 'shared-store';

import { MessageModal } from '../../components/Modal';
import { translate } from 'internationalization/src';

export default () => {
  const dispatch = useDispatch();

  return (
    <MessageModal
      messages={[translate('successMessage')]}
      confirmationText={translate('tryAgain')}
      confirmationAction={() => dispatch(foodCreators.foodSetStart())}
    />
  );
};
