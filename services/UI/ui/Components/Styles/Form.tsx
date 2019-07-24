// UI/ui/Components/Styles/Form.tsx
import React, { PropsWithChildren } from 'react';
import { useStyles, FieldStyle } from 'ui/lib/Styles';
import { Box } from 'ui/Components/Styles/Box';
import useForm from 'react-hook-form';
import { RegisterInput } from 'react-hook-form/dist/types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';

type FieldTypes = 'Text';

/**
 * Taken from https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types
 */
type HTMLInputTypes =
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

//type HTMLInputTypes = 'email' | 'username' | 'password' | 'date' | 'text';

/**
 * Taken from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#Values
 */
type HTMLAUTOCOMPLETETYPES =
  | 'off'
  | 'on'
  | 'name'
  | 'email'
  | 'username'
  | 'new-password'
  | 'current-password'
  | 'one-time-code'
  | 'organization-title'
  | 'organization'
  | 'street-address'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'address-level4'
  | 'address-level3'
  | 'address-level2'
  | 'address-level1'
  | 'country'
  | 'country-name'
  | 'postal-code'
  | 'cc-name'
  | 'cc-given-name'
  | 'cc-additional-name'
  | 'cc-family-name'
  | 'cc-number'
  | 'cc-exp'
  | 'cc-exp-month'
  | 'cc-exp-year'
  | 'cc-csc'
  | 'cc-type'
  | 'transaction-currency'
  | 'transaction-amount'
  | 'language'
  | 'bday'
  | 'bday-day'
  | 'bday-month'
  | 'bday-year'
  | 'sex'
  | 'tel'
  | 'tel-country-code'
  | 'tel-national'
  | 'tel-area-code'
  | 'tel-local'
  | 'tel-extension'
  | 'impp'
  | 'url'
  | 'photo';

interface Invalid {
  Field: string;
  Text?: string;
}

interface Field {
  type: FieldTypes;
  name: string;
  label: string;
  inputType: HTMLInputTypes;
  autoComplete?: HTMLAUTOCOMPLETETYPES;
  registerOpts?: { refOrValidateRule: any; validateRule?: RegisterInput | undefined };
}

interface FormProps<FormData> {
  title: string;
  Fields: Field[];
  invalid?: Invalid;
  submitLabel?: string;
  onSubmit: (data: FormData) => any;
}

export const Form = <T extends {}>({
  title,
  children,
  onSubmit,
  Fields,
  invalid = { Field: '', Text: undefined },
  submitLabel = title
}: PropsWithChildren<FormProps<T>>) => {
  const { register, handleSubmit, errors } = useForm<T>();

  const isInvalid = (fieldName: string) => invalid.Field === fieldName;

  return (
    // @ts-ignore
    <Box title={title} component='form' onSubmit={handleSubmit(onSubmit)}>
      {invalid.Field && (
        <FormHelperText error style={{ color: '#b00020' }}>
          {invalid.Text}
        </FormHelperText>
      )}

      {Fields.map(({ registerOpts, inputType, type, ...props }) => (
        <TextField
          key={props.name}
          type={inputType}
          variant='outlined'
          style={FieldStyle}
          error={isInvalid(props.name)}
          inputRef={registerOpts ? register(registerOpts) : register}
          {...props}
        />
      ))}
      {children}
      <Button color='primary' variant='contained' style={FieldStyle} type='submit'>
        {submitLabel}
      </Button>
    </Box>
  );
};
