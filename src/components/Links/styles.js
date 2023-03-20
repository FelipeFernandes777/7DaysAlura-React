import styled from "styled-components";

const Links = styled.a`
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  gap: 0.4rem;
  cursor: pointer;
  color: #202020;

  background-color: transparent;
`;

const Bar = styled.div`
  width: 1.7rem;
  height: 100%;
  border: 1px solid #202020;
  rotate: calc(115deg);
`;

export { Links, Bar };
