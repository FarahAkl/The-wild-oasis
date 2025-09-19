import styled from "styled-components";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  grid-row: 1/-1;
  border-right: 1px solid var(--color-grey-100);
`;

export default function Sidebar() {
  return <StyledSidebar>Sidebar</StyledSidebar>;
}
