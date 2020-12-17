import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MyFooter = styled.div`
  min-width: 100%;
  min-height: 60px;
  background-color: #fdf3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  color: #858585;
  align-self: flex-end;
  text-align: center;
`

export default function Footer({ children }) {
  return <MyFooter>{children}</MyFooter>
}

Footer.propTypes = {
  children: PropTypes.node,
}
