import { useState } from "react";

import {
  TitleForm,
  SubTitleForm,
  TextForm,
  InputForm,
  ButtonForm,
  SubmitContainer,
  ModalContainer,
} from "./styled";

export default function Form() {
  const [email, setEmail] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <div style={{ width: "50rem", height: "32.3rem" }}>
        <SubTitleForm>Sua casa com as </SubTitleForm>
        <TitleForm>melhores plantas</TitleForm>
        <TextForm>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
          torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
        </TextForm>
      </div>
      <SubmitContainer>
        <InputForm
          type="text"
          placeholder="Insira seu e-mail"
          onChange={(event) => setEmail(event.target.value)}
        />
        <ButtonForm>Assinar Newsletter</ButtonForm>
      </SubmitContainer>
    </form>
  );
}