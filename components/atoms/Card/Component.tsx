import styled from 'styled-components';

export const Card = styled.div`
  padding: 20px;
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white[200]};
`;
