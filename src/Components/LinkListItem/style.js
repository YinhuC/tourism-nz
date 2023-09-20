import styled from "styled-components";
import { ListGroupItem } from "reactstrap";

export const Link = styled.a`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  user-select: none;
  font-size: 20px;

  &:hover {
    text-decoration: none;
  }
`;
export const ListItem = styled(ListGroupItem)`
  display: flex;
  align-items: center;
  width: 110%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background-color: #f8f8f8;
  }
`;
