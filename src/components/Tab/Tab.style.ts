import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  gap: 2rem; // fdj spacing large
`;

interface TabWrapperProps {
  isSelected: boolean;
}

export const TabWrapper = styled.div<TabWrapperProps>`
  background: ${(props) => (props.isSelected ? "lightgrey" : "transparent")};
  font-weight: ${(props) => (props.isSelected ? "bold" : "normal")};
  width: 150px;
  height: 40px;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  line-height: 40px;
  border-radius: 5px;
  cursor: pointer;
`;
