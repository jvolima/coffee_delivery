import styled from "styled-components";

interface ContainerInputProps {
  width: string | number;
}

export const Container = styled.div`
`;

export const ContainerInput = styled.div<ContainerInputProps>`
  width: ${({ width }) => width};
  padding: 12px;
  background-color: var(--input);
  border: 1px solid #E6E5E5;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextInput = styled.input`
  background: transparent;
  border: 0;
  outline: none;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: var(--text);

  ::placeholder {
    color: var(--label);
  }
`;

export const ExtraPlaceholder = styled.span`
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 0.75rem;
  color: var(--label);
`;

export const FormErrorMessage = styled.span`
  display: block;
  margin-top: 4px;
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  color: red;
`;