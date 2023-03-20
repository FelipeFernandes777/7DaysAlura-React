import React from 'react'

import { InfoContainer, MainInfo } from './styled'
import Label from './Label/Index'

import Planta from '../../assets/Home/Info/image 3.png'

import TextInfo from './Text/Index'
import TitleInfo from './Title/Index'

export default function Info() {
  return (
    <InfoContainer style={{
      overflow: 'hidden'
    }}>
      < MainInfo >
        <div className="img">
          <img src={Planta} alt="Imagem de planta" style={{ height: '30rem', width: 'auto' }} />
        </div>
        <div className="text_area" style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: "flex-start", gap: '1rem', justifyContent: 'center' }}>
          <div style={{ alignSelf: 'flex-start', background: 'white' }}>
            <TextInfo>
              Como conseguir
            </TextInfo>
            <TitleInfo>
              minha planta
            </TitleInfo>
          </div>
          <Label> Escolha suas plantas </Label>
          <Label> Faça seu pedido </Label>
          <Label> Aguarde na sua casa </Label>
        </div>
      </MainInfo>
    </ InfoContainer>
  )
}
