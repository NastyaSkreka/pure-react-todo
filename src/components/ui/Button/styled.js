import styled from 'styled-components';

export const StyledButton = styled.button `
  padding: 10px 20px;
  font-size: 18px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, opacity 0.3s;

  background-color: ${({ variant, isActive }) => {
    if (variant === 'delete') return 'var(--color-button-delete)';
    if (variant === 'edit') return 'var(--color-button-edit)';
    return isActive ? 'var(--color-button-active)' : 'var(--color-button-background)';
  }};
  
  color: ${({ variant, isActive }) => {
    if (variant === 'delete') return 'var(--color-delete-text)';
    if (variant === 'edit') return 'var(--color-edit-text)';
    return isActive ? 'var(--color-button-text-active)' : 'var(--color-button-primary)';
  }};
  
  opacity: ${({ isActive }) => (isActive ? 1 : 0.7)};
  
  &:hover {
    opacity: 1;
  }
  
  &:active {
    background-color: ${({ variant, isActive }) => {
      if (isActive) return 'var(--color-button-active)';
      if (variant === 'delete') return 'var(--color-button-delete-active)';
      if (variant === 'edit') return 'var(--color-button-edit-active)';
      return 'var(--color-button-hover)';
    }};
  }

  &:focus {
    outline: none;
  }
`;