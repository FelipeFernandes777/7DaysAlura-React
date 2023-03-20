import styled from "styled-components";

const LabelContainer = styled.div`
  width: 30rem;
  height: auto;

  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: white;
`;

const Circle = styled.div`
  background-color: #ffcb47;
  width: 3.2rem;
  height: 3.2rem;

  border-radius: 100%;
`;

const TextLabel = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: #202020;
  background-color: white;

  width: 17rem;
`;

export { Circle, TextLabel, LabelContainer };
