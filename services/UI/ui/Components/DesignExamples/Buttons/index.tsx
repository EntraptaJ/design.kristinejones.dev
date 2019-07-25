// UI/ui/Components/DesignExamples/Buttons/index.tsx
import React, { FunctionComponent, useState } from 'react';
import { BaseButton } from 'ui/Components/Forms/Button/BaseButton';
import { ProgressButton } from 'ui/Components/Forms/Button/ProgressButton';
import { Box } from 'ui/Components/Styles/Box';
import { Slider } from 'ui/Components/Layout/Slider';
import { FABButton, FABLocation, FABLocationENUM } from 'ui/Components/Forms/Button/FABButton';
import { Typography, Fab } from '@material-ui/core';
import { PositionProperty, AlignSelfProperty } from 'csstype';
import { BaseSelect, SelectChange } from 'ui/Components/Styles/Select/BaseSelect';

type ButtonsDesignExampleType = FunctionComponent;

interface FAB {
  location: FABLocation;
  position: PositionProperty;
  color: 'primary' | 'secondary';
}

export const ButtonsDesignExample: ButtonsDesignExampleType = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const [FAB, setFAB] = useState<FAB>({
    location: 'flex-end',
    position: 'relative',
    color: 'primary'
  });

  const handleFABSelect = (field: keyof FAB) => ({ target }: SelectChange) => setFAB({ ...FAB, [field]: target.value });

  const simulateLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  // "-webkit-sticky" | "absolute" | "fixed" | "relative" | "static" | "sticky"

  return (
    <>
      <Box title='Buttons'>
        <Slider title='Progress Buttons'>
          <ProgressButton label='Confirm' mainColor='red' loading={loading} onClick={() => simulateLoad()} />
          <ProgressButton label='Confirm' mainColor='green' loading={loading} onClick={() => simulateLoad()} />
        </Slider>
        <Slider title='Aligned FAB'>
          <BaseSelect
            label='FAB Location'
            value={FAB.location}
            onChange={handleFABSelect('location')}
            items={Object.values(FABLocationENUM).map((label) => ({ label }))}
          />
          <BaseSelect
            label='FAB Position'
            value={FAB.position}
            onChange={handleFABSelect('position')}
            fullWidth
            controlProps={{
              style: { marginTop: '1em' }
            }}
            items={[
              { label: 'Relative', value: 'relative' },
              { label: 'Absolute', value: 'absolute' },
              { label: 'Fixed', value: 'fixed' },
              { label: 'Static', value: 'static' },
              { label: 'Sticky', value: 'sticky' }
            ]}
          />
          <BaseSelect
            label='Color'
            value={FAB.color}
            onChange={handleFABSelect('color')}
            fullWidth
            controlProps={{
              style: { marginTop: '1em' }
            }}
            items={[{ label: 'Primary', value: 'primary' }, { label: 'Secondary', value: 'secondary' }]}
          />
          <FABButton color={FAB.color} location={FAB.location} position={FAB.position} />
        </Slider>

        <BaseButton variant='contained' label='Hello World' onClick={() => console.log('Hello')} />
      </Box>
    </>
  );
};
