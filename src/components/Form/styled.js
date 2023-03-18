import styled from "styled-components";

// Fonts Form
const SubTitleForm = styled.h4`
  font-weight: 400;
  font-size: 2.2rem;
  line-height: 2.682rem;
  color: #202020;
`;

const TitleForm = styled.h1`
  font-family: "Elsie Swash Caps", cursive;
  font-weight: 900;
  font-size: 8.2rem;
  line-height: 9.446rem;
  color: #202020;
`;

const TextForm = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
`;

// Newsletter

const SubmitContainer = styled.div`
  margin-top: 2rem;
  display: flex;
`;

const InputForm = styled.input`
  display: flex;
  gap: 2rem;
  text-align: start;
  background-color: #ffffff;
  font-size: 1.6rem;
  color: #202020;
  padding: 1.2rem;
  width: 40.8rem;
  height: 4.2rem;
  border: none;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
`;

const ButtonForm = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffcb47;
  color: #ffffff;
  box-shadow: 1rem 1rem 3rem rgba(255, 203, 71, 0.3);
  width: 16.5rem;
  height: 4.2rem;
  border: none;
  font-size: 1.6rem;
`;

export {
  TitleForm,
  SubTitleForm,
  TextForm,
  InputForm,
  ButtonForm,
  SubmitContainer,
};
