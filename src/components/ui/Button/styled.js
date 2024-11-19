import styled from 'styled-components'

export const StyledButton = styled.button `
  padding: 10px 20px;
  font-size: 18px;
  border: 1px solid var(--color-button-border);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, opacity 0.3s;

  background-color: ${({ variant }) =>
    variant === 'delete' ? 'var(--color-button-delete)' : 
    variant === 'edit' ? 'var(--color-button-edit)' : 
    'var(--color-button-background)'};
  color: ${({ variant }) =>
    variant === 'delete' ? 'var(--color-delete-text)' : 
    variant === 'edit' ? 'var(--color-edit-text)' : 
    'var(--color-button-primary)'};
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }

  &:active {
    background-color: ${({ variant }) =>
      variant === 'delete' ? 'var(--color-button-delete-active)' : 
      variant === 'edit' ? 'var(--color-button-edit-active)' : 
      'var(--color-button-active)'};
  }

  &:focus {
    outline: none;
  }
`;