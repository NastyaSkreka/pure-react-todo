import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--color-background);
  padding: 20px;
  box-sizing: border-box;
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 18px;
  color: var(--color-title);
  margin-bottom: 20px;
  text-align: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
`;