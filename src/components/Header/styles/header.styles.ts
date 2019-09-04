import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  height: 100vh;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid ${(props: any) => props.theme.secondary};
  background: ${(props: any) => props.theme.primary};
`;

export const HeaderTitle = styled.h1`
  color: ${(props: any) => props.theme.white};
  font-size: 1rem;
  text-align: center;
  margin-top: 1rem;
`;