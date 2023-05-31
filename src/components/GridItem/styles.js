import styled from "styled-components";

export const Tr = styled.tr``;

export const Td = styled.td`
  padding: 12px;
  padding-left: 20px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;
  svg {
    width: 18px;
    height: 18px;
  }
`;
