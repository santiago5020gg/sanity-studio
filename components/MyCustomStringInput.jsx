// /components/MyCustomStringInput.jsx
import {Stack, Text, TextInput} from '@sanity/ui'
import {set, unset} from 'sanity'
import {userNameExists} from '../schemas/utils'
import React, {useState} from 'react'

export const MyCustomStringInput = (props) => {
  const {elementProps, onChange, value = ''} = props
  const [userExists, SetUserExists] = useState(false)

  console.log('aqui ', props)

  const handleChange = async (event) => {
    const nextValue = event.currentTarget.value
    if (await userNameExists(nextValue)) {
      SetUserExists(true);
      onChange(nextValue ? set('') : unset())
      return
    }
    onChange(nextValue ? set(nextValue) : unset())
    SetUserExists(false);
  }

  return (
    <Stack space={2}>
      <TextInput {...elementProps} onChange={handleChange} value={value} />
      {userExists && <p style={{ color: 'red' }}>The user already exists</p>}
      <Text>Characters: {value.length}</Text>
    </Stack>
  )
}
