import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { Container, ContainerInput, ExtraPlaceholder, FormErrorMessage, TextInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: FieldError;
  extraPlaceholder?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement,InputProps> 
 = ({ name, error = null, type = 'text', extraPlaceholder = null, placeholder, width = '100%', height = '42px', ...rest }, ref) => {
  return (
    <Container>
      <ContainerInput width={width}>
        <TextInput 
          name={name}
          type={type}
          placeholder={placeholder}
          width={width}
          height={height}
          ref={ref}
          {...rest}
        />

        { !!extraPlaceholder && (
          <ExtraPlaceholder>{extraPlaceholder}</ExtraPlaceholder>
        )}
      </ContainerInput>
    
      {!!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      )}
    </Container>
  )
 }

export const Input = forwardRef(InputBase);