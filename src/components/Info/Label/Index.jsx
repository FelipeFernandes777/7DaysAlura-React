import React from 'react'

import { Circle, TextLabel, LabelContainer } from './styled'

export default function Label({ children }) {
  return (
    <LabelContainer>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white' }}>
        <Circle> </Circle>
      </div>
      <TextLabel>{children}</TextLabel>
    </LabelContainer >
  )
}
