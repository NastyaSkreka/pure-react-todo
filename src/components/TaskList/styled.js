import styled from 'styled-components'

export const TaskListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  padding: 30px 0;
  height: 400px;
  width: 500px;
  overflow-y: auto;
`

export const NoTasksMessage = styled.div`
  color: #888;
  font-size: 16px;
  text-align: center;
  padding: 10px;
`;