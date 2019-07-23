// UI/ui/Components/Forms/Field/AutoSuggest/index.tsx
// GraphQL based search AutoSuggest
import React, { FunctionComponent, useState, PropsWithChildren } from 'react';
import { useStyles } from './Styles';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useQuery } from '@apollo/react-hooks';
import { DocumentNode } from 'graphql';


interface AutoSuggestProps {
  label: string;
  query: DocumentNode
}

interface Props {
  label: string
  query: DocumentNode
}


type AutoSuggestType = FunctionComponent<AutoSuggestProps>

/**
 * React GraphQL AutoSuggest
 * ```js { "props": { "className": "checks" } }
 *   <Button>I’m transparent!</Button>
 * ```
 */
export const AutoSuggest: FunctionComponent<Props> = <Q extends {}>({ label, query }: PropsWithChildren<Props>) => {
  const { data, loading } = useQuery<Q>(query)
  const [value, setValue] = useState<string>();

  const classes = useStyles();

  return (
    <>
      <TextField 
        label={label}
      />
    </>
  );
};

type useAutoSuggest = () => [FunctionComponent<AutoSuggestProps>]
export const useAutoSuggest = () => {


  return (
    <AutoSuggest la /></AutoSuggest>
  )

}