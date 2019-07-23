// UI/ui/Components/DesignExamples/Buttons/index.tsx
import React, { FunctionComponent, useState } from 'react';
import { BaseButton } from 'ui/Components/Forms/Button/BaseButton';
import { ProgressButton } from 'ui/Components/Forms/Button/ProgressButton';
import { Box } from 'ui/Components/Styles/Box';

type ButtonDesignExampleType = FunctionComponent;

const ButtonDesignExample: ButtonDesignExampleType = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const simulateLoad = () => {
    console.log()
    setLoading(true)
    setTimeout(() => setLoading(false),1500)
  }

  return (
    <>
      <Box title='Buttons'>
        <BaseButton variant='contained' label='Hello World' onClick={() => console.log('Hello')} />
        <ProgressButton label='Confirm' mainColor='red' loading={loading} onClick={() => simulateLoad()} />
      </Box>
    </>
  );
};


export default ButtonDesignExample;