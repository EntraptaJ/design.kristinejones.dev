// UI/ui/Components/DesignExamples/Buttons/index.tsx
import React, { FunctionComponent, useState } from 'react';
import { BaseButton } from 'ui/Components/Forms/Button/BaseButton';
import { ProgressButton } from 'ui/Components/Forms/Button/ProgressButton';
import { Box } from 'ui/Components/Styles/Box';
import { Slider } from 'ui/Components/Layout/Slider';

type ButtonsDesignExampleType = FunctionComponent;

export const ButtonsDesignExample: ButtonsDesignExampleType = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const simulateLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <>
      <Box title='Buttons'>
        <Slider title='Progress Buttons'>
          <ProgressButton label='Confirm' mainColor='red' loading={loading} onClick={() => simulateLoad()} />
          <ProgressButton label='Confirm' mainColor='green' loading={loading} onClick={() => simulateLoad()} />
        </Slider>
        <BaseButton variant='contained' label='Hello World' onClick={() => console.log('Hello')} />
      </Box>
    </>
  );
};
