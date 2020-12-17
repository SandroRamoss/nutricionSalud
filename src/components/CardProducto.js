import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = styled.div`
  border: 1px solid #ece0e0;
  background: white;
  padding: 1rem;
  display: flex;
  flex-flow: column;
  align-items: center;

  img {
    max-width: 100%;
    width: 385px;
    height: 390px;
    object-fit: cover;
    cursor: pointer;
  }

  h3 {
    width: 100%;
    font-weight: 400;
    color: #696969;
    margin-top: 15px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
  }

  h3::after {
    content: '';
    height: 2px;
    display: block;
    margin-top: 15px;
    background: #ece0e0;
  }

  p {
    text-align: center;
    font-size: 1.9rem;
    margin: 15px;
  }

  button {
    border: 1px solid #ece0e0;
    background: white;
    padding: 10px;
    font-size: 1.3rem;
    font-weight: 300;
    color: #696969;
    cursor: pointer;
  }
  button: hover {
    background: white;
    color: rgb(27, 27, 27);
  }
`

const CustomFontIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`

function CardProducto({ name, image, price }) {
  const formatPrice = `S/ 
    ${price
      .split('.', 2)
      .map((n, i) => {
        if (i > 0) return n.padEnd(2, '0')
        return n
      })
      .join('.')}`

  return (
    <Card>
      <img src={image} alt={`${name}-img`} /> <h3> {name} </h3>{' '}
      <p> {formatPrice} </p>{' '}
      <button type="button">
        <CustomFontIcon icon={faShoppingBag} />
        Agregar al Carrito{' '}
      </button>{' '}
    </Card>
  )
}

CardProducto.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
}

export default CardProducto
