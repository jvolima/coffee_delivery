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
  border: 1px solid var(--button);
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  :focus-within {
    border: 1px solid var(--yellow-dark);
  }
`;

export const TextInput = styled.input`
  background: transparent;
  border: 0;
  outline: none;
  width: 100%;

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
  cursor: default;
`;

export const FormErrorMessage = styled.span`
  display: block;
  margin-top: 4px;
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  color: red;
`;