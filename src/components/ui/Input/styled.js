import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 10px 15px;
  font-size: 16px;
  border: 1px solid var(--color-input-border);  
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--color-background);  
  color: var(--color-text); 

  &:focus {
    outline: none;
    border-color: #007BFF; 
  }
`;
