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

export const Container = styled.div`
  max-width: 1120px;
  width: 98%;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  margin-top: -50px;
  justify-content: space-around;
`;
