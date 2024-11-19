import styled from 'styled-components'

export const TaskContainer = styled.div`
 display: flex;
 gap: 5px;
 align-items: center;
 justify-content: space-between;
 width: 400px;
 padding: 10px;
 border: 1px solid var(--color-border);
`

export const TaskText = styled.div`
 width: 200px;
 text-decoration: ${({ isCompleted }) => (isCompleted ? "line-through" : "none")};
`

export const ActionsContainer = styled.div`
    display: flex;
    gap: 5px;
`