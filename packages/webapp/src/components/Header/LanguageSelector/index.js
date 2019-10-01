import React, { useCallback, useMemo, useState } from 'react';
import { getCurrent, getLanguages, setLanguage, translate } from 'internationalization/src';

import { HoveringActiveDropdown } from '../../drop-down';
import { withRouter } from 'react-router';

const LanguageSelector = ({history, location}) => {
  const [selected, select] = useState(getCurrent());

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
      select(langKey);
      history.push(location.path)
    },
    [dispatch, history, location],
  );

  return <HoveringActiveDropdown options={options} onSelect={handleSelect} />;
};

export default withRouter(LanguageSelector);
