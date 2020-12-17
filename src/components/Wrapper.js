import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const DivWrapper = styled.div`
  max-width: 1344px;
  min-width: 100%;
  padding: 2.5rem;

  @media screen and (min-width: 480px) {
    padding: 2.5rem;
  }

  @media screen and (min-width: 768px) {
    padding: 2.5rem 4rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 2.5rem 10rem;
  }
`

export default function Wrapper({ children }) {
  return <DivWrapper>{children}</DivWrapper>
}

Wrapper.propTypes = {
  children: PropTypes.node,
}
