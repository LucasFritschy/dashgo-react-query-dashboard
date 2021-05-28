import { FormErrorMessage, FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError
}

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>
  = ({ name, label, error = null, ...rest }, ref) => {
    return (
      <FormControl isInvalid={!!error} >
        <FormLabel htmlFor={rest.id}>
          {label}
        </FormLabel>

        <ChakraInput
          name={name}
          id={name}
          focusBorderColor="pink.500"
          bg="gray.900"
          variant="filled"
          _hover={{
            bgColor: 'gray.900'
          }}
          size="lg"
          ref={ref}
          {...rest}
        />
        {!!error &&

          <FormErrorMessage>
            {error.message}
          </FormErrorMessage>
        }

      </FormControl>
    )
  }

export const Input = forwardRef(InputBase)