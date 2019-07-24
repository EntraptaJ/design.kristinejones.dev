// UI/ui/Components/User/Secret/PasswordEntry.tsx
import React, { FunctionComponent, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { BaseButton } from 'ui/Components/Forms/Button/BaseButton';

interface PasswordEntryProps {
  onPassword: (password: string) => Promise<any>
}

export const PasswordEntry: FunctionComponent<PasswordEntryProps> = ({ onPassword }) => {
  const [password, setPassword] = useState<string>('')

  return (
    <>
      <TextField value={password} onChange={({ target }) => setPassword(target.value)} label='Password' type='password' />
      <BaseButton onClick={() => onPassword(password)} label='Submit Password' />
    </>
  )



}