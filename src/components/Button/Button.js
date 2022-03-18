import React from 'react'
import { string, oneOf, bool, shape } from 'prop-types'
import { space, layout, color, border, flexbox, variant, borderColor } from 'styled-system'
import styled from 'styled-components/native'

import { Text } from '../Text'
import { Icons } from '../Icons'
import { Row } from '../Row'
import { LottieLoader as Loader } from '../Loader'
import theme from '../../theme'

const PRIMARY = 'primary'
const SECONDARY = 'secondary'

const ButtonComponent = ({
  icon = {},
  variant,
  textProps = {},
  disabled,
  isLoading,
  text,
  onPress,
  ...props
}) => (
  <Button
    onPress={onPress}
    border='1px solid'
    borderColor={color}
    width='100%'
    height={56}
    disabled={isLoading || disabled}
    isLoading={isLoading}
    variant={variant}
    activeOpacity={0.9}
    {...props}
  >
    {isLoading ? (
      <Loader color='white' size='small' />
    ) : (
      <Row alignItems='center' justifyContent='center'>
        {!!icon.name && (
          <Icons
            icon={icon.name}
            color={variant === 'primary' ? 'white' : theme.colors.dark}
            marginRight={8}
          />
        )}
        <Text
          color={variant === 'primary' ? 'white' : 'dark'}
          variant='body-16-medium'
          fontFamily='MontserratSemiBold'
          {...textProps}
        >
          {text}
        </Text>
      </Row>
    )}
  </Button>
)

const Button = styled.TouchableOpacity(
  variant({
    variants: {
      [PRIMARY]: {
        backgroundColor: theme.colors.dark
      },
      [SECONDARY]: {
        backgroundColor: theme.colors.white,
        borderColor: theme.colors.dark,
        borderWidth: 1
      }
    }
  }),
  `
  width: 150px;
  height: 40px;
  align-items: center;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  `,
  flexbox,
  space,
  layout,
  color
)

ButtonComponent.defaultProps = {
  variant: 'primary',
  isLoading: false
}

ButtonComponent.propTypes = {
  icon: shape({ name: string, color: string }),
  variant: oneOf(['primary', 'secondary']),
  isLoading: bool
}

export default ButtonComponent
