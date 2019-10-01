import React, { useCallback, useMemo } from 'react';
import { getLanguages, setLanguage, translate } from 'internationalization/src';

import { HoveringActiveDropdown } from '../../drop-down';
import { useDispatch, useSelector } from 'react-redux';
import { internationalizationCreators, internationalizationSelectors } from 'shared-store';
import { withRouter } from 'react-router';

const LanguageSelector = ({history, location}) => {
  const selected = useSelector(internationalizationSelectors.getLangKey);
  const dispatch = useDispatch();

  const options = useMemo(
    () =>
      getLanguages()
        .map(value => ({ label: translate(`language.${value}`), value }))
        .sort((a, b) =>
          a.value === selected ? -1 : b.value === selected ? 1 : a.value - b.value,
        ),
    [selected],
  );

  const handleSelect = useCallback(
    langKey => {
      setLanguage(langKey);
      dispatch(internationalizationCreators.setLanguage(langKey));
      history.push(location.path)
    },
    [dispatch, history, location],
  );

  return <HoveringActiveDropdown options={options} onSelect={handleSelect} />;
};

export default withRouter(LanguageSelector);
