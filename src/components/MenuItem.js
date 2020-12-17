import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const DivProduct = styled.div`
  background: no-repeat 50%;
  background-image: ${(props) => `url(${props.background})` || 'palevioletred'};
  background-color: ${(props) => props.color};
  background-blend-mode: multiply;
  transition: all 0.25s ease-in-out;
  background-size: cover;
  height: 48vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content img {
    width: 4.3rem;
  }

  .content h3 {
    margin: 1.2rem 0;
    font-size: 1.95rem;
    text-transform: uppercase;
    font-family: AvenirBlack, helvetica, arial, sans-serif;
  }
`

export default function MenuItem({ title, icon, background, color }) {
  return (
    <DivProduct background={background} color={color}>
      <div className="content">
        <img src={icon} alt="icon" />
        <h3>{title}</h3>
      </div>
    </DivProduct>
  )
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}
