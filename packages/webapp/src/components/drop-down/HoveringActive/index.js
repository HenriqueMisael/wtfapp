import React, { useState } from 'react';
import Option from '../option';
import { ListCard, SingleOptionContainer } from '../styled-wrappers';

const HoveringActive = ({ options, onSelect }) => {
  const [active, setActive] = useState(false);

  return active ? (
    <ListCard onMouseLeave={() => setActive(false)}>
      {options.map((option, index) => {
        if(index === 0) {
          return (
            <Option
              width={'8em'}
              key={option.value}
              highlighted={true}
              option={option}
            />
          )
        }
        return (
          <Option
            width={'8em'}
            key={option.value}
            option={option}
            onSelect={key => {
              onSelect(key);
              setActive(false);
            }}
          />
        );
      })}
    </ListCard>
  ) : (
    <SingleOptionContainer onMouseEnter={() => setActive(true)}>
      <Option width={'8em'} option={options[0]} />
    </SingleOptionContainer>
  );
};

export default HoveringActive;
