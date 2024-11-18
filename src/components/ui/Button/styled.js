import styled from 'styled-components'

export const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  border: 1px solid var(--color-button-border);
  border-radius: 4px;
  background-color: var(--color-button-background);
  color: var(--color-button-primary);
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-button-hover);
  }

  &:active {
    background-color: var(--color-button-active);
  }

  &:focus {
    outline: none;
  }
`;