import styled from "styled-components";

export const CmdList = styled.div`
  margin-bottom: 0.25rem;
`;

export const Cmd = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const CmdDesc = styled.span`
  color: ${({ theme }) => theme.colors.text[200]};
  margin-bottom: 0.75rem;
`;

export const KeyContainer = styled.div`
  font-size: 0.875rem;
  margin-top: 1rem;
  div {
    margin-top: 0.25rem;
  }
`;
