// UI/ui/Components/Styles/TextField/index.tsx
import React, { FunctionComponent } from 'react';
import TextField, { OutlinedTextFieldProps } from '@material-ui/core/TextField';
import { FieldStyle } from 'ui/lib/Styles';

interface BaseTextFieldProps extends OutlinedTextFieldProps {
  outlined?: boolean;
}

type BaseTextFieldType = FunctionComponent<BaseTextFieldProps>;

export const BaseTextField: BaseTextFieldType = ({ outlined = true, ...props }) => {
  return <TextField style={FieldStyle} variant={outlined ? 'outlined' : props.variant} {...props} />;
};
