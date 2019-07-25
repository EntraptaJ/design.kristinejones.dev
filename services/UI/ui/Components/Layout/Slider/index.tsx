// UI/ui/Components/Layout/Slider/index.tsx
import React, { FunctionComponent, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';

interface SliderProps {
  title: string;
}

type SliderType = FunctionComponent<SliderProps>;

export const Slider: SliderType = ({ title, children }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Paper square style={{ minWidth: '90%', padding: '1rem' }} >
        <div onClick={() => setOpen(!open)} style={{ display: 'flex', flexDirection: 'row', alignContent: 'space-between', width: '100%' }}>
          <Typography variant='body1' style={{ width: '100%' }}>
            {title}
          </Typography>
          <IconButton size='small' color='primary' aria-label='Add to shopping cart'>
            <ExpandMoreIcon />
          </IconButton>
        </div>

        <Collapse in={open} style={{}}>
          <div style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column' }}>
            {children}
          </div>
        </Collapse>
      </Paper>
    </>
  );
};
