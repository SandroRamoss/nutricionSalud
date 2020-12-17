import React from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem'
import alfajorIcon from '../img/alfajoricon.png'
import alfajorBg from '../img/alfajor.jpg'
import kekeIcon from '../img/kekeicon.png'
import kekeBg from '../img/keke.jpg'
import pastelIcon from '../img/pastelicon.png'
import pastelBg from '../img/pastel.jpg'
import empanadaIcon from '../img/empandaicon.png'
import empanadaBg from '../img/empanada.jpg'
import bocaditoIcon from '../img/bocaditoicon.png'
import Wrapper from './Wrapper'

const Grid = styled.div`
  display: grid;
  row-gap: 25px;

  @media screen and (min-width: 480px) {
    & {
      grid-template-columns: 1fr;
      column-gap: 25px;
    }
  }

  @media screen and (min-width: 768px) {
    & {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 25px;
    }
  }

  @media screen and (min-width: 1024px) {
    & {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 25px;
    }
  }
`
const StyledProduct = styled.div`
  @media screen and (min-width: 768px) {
    & {
      grid-column: 1 / span 2;
    }
  }
`

export default function Menu() {
  return (
    <Wrapper>
      <Grid>
        <StyledProduct>
          <MenuItem
            title="Alfajores"
            icon={alfajorIcon}
            background={alfajorBg}
            color="#D4674A"
          />
        </StyledProduct>
        <MenuItem
          title="Kekes"
          icon={kekeIcon}
          background={kekeBg}
          color="#EC8704"
        />
        <MenuItem
          title="Pasteles"
          icon={pastelIcon}
          background={pastelBg}
          color="#C83D3C"
        />
        <MenuItem
          title="Empanadas"
          icon={empanadaIcon}
          background={empanadaBg}
          color="#F6B508"
        />
        <MenuItem
          title="Bocaditos"
          icon={bocaditoIcon}
          background={alfajorBg}
          color="#E18245"
        />
      </Grid>
    </Wrapper>
  )
}
