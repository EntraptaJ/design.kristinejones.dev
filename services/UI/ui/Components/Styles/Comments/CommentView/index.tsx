// UI/ui/Components/Styles/Comments/CommentView/index.tsx
import React, { FunctionComponent } from 'react';
import Paper from '@material-ui/core/Paper';

interface CommentViewProps {}

type CommentViewType = FunctionComponent<CommentViewProps>;

export const CommentView: CommentViewType = ({}) => {
  return (
    <Paper style={{ width: '100%', padding: '0.5em', overflowWrap: 'break-word', borderRadius: '1em' }}>
      <div style={{ overflowY: 'scroll', maxHeight: '40vh', padding: '1em' }}>
        <></>
      </div>
    </Paper>
  );
};
