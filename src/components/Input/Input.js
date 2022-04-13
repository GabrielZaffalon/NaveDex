import React, { useState, useEffect } from 'react'
import { Platform, TouchableOpacity } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Column, Text } from 'src/components'
import theme from '../../theme'

const Input = ({
  label,
  error,
  onChange,
  placeholder,
  disabled,
  type,
  name,
  suffix,
  textArea,
  keyboardType,
  maxLength,
  value,
  autoCapitalize,
  secureTextEntry,
  options,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)

  const inputProps = {
    placeholder,
    fontSize: 16,
    secureTextEntry: type === 'password',
    type,
    editable: !disabled,
    onChangeText: text => {
      onChange(text)
    },
    value,
    multiline: textArea,
    keyboardType,
    maxLength,
    autoCapitalize,
    secureTextEntry
  }

  return (
    <Column {...props}>
      {label && (
        <Text
          color={theme.colors.black}
          variant='small'
          mb={1}
          fontFamily='MontserratBold'
          fontWeight='600px'
          fontSize={14}
        >
          {label}
        </Text>
      )}
      <Container error={!!error} isFocused={isFocused} editable={!disabled} multiline={textArea}>
        {options ? <StyledTextInputMask {...inputProps} /> : <InputComponent {...inputProps} />}
        {!!suffix && (
          <Text color={disabled ? 'gray.n500' : 'gray.n800'} lineHeight='16px' marginRight={10}>
            {suffix}
          </Text>
        )}
      </Container>
      {error && (
        <Text color='feedback.error' variant='smaller' marginTop='5px'>
          {error}
        </Text>
      )}
      {textArea && (
        <Text
          variant='smaller'
          lineHeight='12px'
          marginTop='5px'
        >{`${value.length} / ${maxLength}`}</Text>
      )}
    </Column>
  )
}

const Container = styled.View`
  border-color: ${theme.colors.borderDark};
  align-items: center;
  height: 40px;
  flex-direction: row;
  border: 1px solid;
  background-color: transparent;
  margin-bottom: 32px;
`

const InputComponent = styled.TextInput.attrs(({ multiline, ...props }) => ({
  autoCapitalize: 'none',
  placeholderTextColor: theme.colors.gray,
  textAlignVertical: multiline && Platform.OS === 'android' && 'top',
  color: theme.colors.black,
  fontFamily: 'MontserratMedium',
  ...props
}))`
  flex: 1;
  height: 100%;
  padding: 8px 10px;
  font-size: 16px;
  font-weight: 500;
`

const StyledTextInputMask = styled(TextInputMask)`
  flex: 1;
  height: 100%;
  padding: 8px 10px;
  font-size: 16px;
  font-weight: 500;
`

Input.defaultProps = {
  autoCapitalize: 'none'
}

Input.propTypes = {
  label: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  textArea: PropTypes.bool,
  keyboardType: PropTypes.string,
  sufix: PropTypes.string,
  autoCapitalize: PropTypes.string
}

export default Input
