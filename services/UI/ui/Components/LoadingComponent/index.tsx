// UI/ui/Components/LoadingComponent/index.tsx
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Loading = () => {
  return (
    <div style={{ top: '50%', left: '50%' }}>
      <CircularProgress />
    </div>
  );
};
