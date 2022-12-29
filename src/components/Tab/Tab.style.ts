import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  gap: 1rem; // fdj spacing large
  flex-wrap: wrap;
`;

interface TabWrapperProps {
  isSelected: boolean;
}

export const TabWrapper = styled.div<TabWrapperProps>`
  background: ${(props) => (props.isSelected ? "lightgrey" : "transparent")};
  height: 30px;
  width: 100px;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  border-radius: 5px;
  cursor: pointer;
`;
