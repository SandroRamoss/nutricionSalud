import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
`

export default function MainContainer({ children }) {
  return <Container>{children}</Container>
}

MainContainer.propTypes = {
  children: PropTypes.node,
}
