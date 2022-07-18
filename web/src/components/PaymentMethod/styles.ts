import styled, { css } from "styled-components";

interface ContainerProps {
  isSelected: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: 16px;
  border-radius: 6px;
  border: 1px solid var(--button);
  background-color: var(--button);

  display: flex;
  align-items: center;
  cursor: pointer;

  transition: background-color 0.2s;

  :hover {
    background-color: var(--hover);
  }

  ${({ isSelected }) => isSelected && css`
    border: 1px solid var(--purple);
  `}
`;

export const Title = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  color: var(--text);
  text-transform: uppercase;
  
  display: block;
  margin-left: 12px;
`;