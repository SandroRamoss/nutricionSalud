import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import alfajorBg from '../img/alfajores.jpg'
import CardProducto from './CardProducto'

const Header = styled.header `
  background: no-repeat 50%;
  height: 39vh;
  background-image: ${`url(${alfajorBg})`};
  background-color: grey;
  background-blend-mode: multiply;
  background-size: cover;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  font-weight: 600;
`

const Grid = styled.div`
  display: grid;
  margin: 25px;
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

function Productos({ products }) {
  return (
    <>
      <Header>Productos</Header>
      <Grid>
        {products.map(({ name, image, price }) => (
          <CardProducto name={name} image={image} price={price} />
        ))}
      </Grid>
    </>
  )
}

function mapStateToProps({ productos: products }) {
  return { products }
}

Productos.propTypes = {
  products: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, {})(Productos)