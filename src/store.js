import { createStore } from 'redux'
import alfajor from './img/alfajor.jpg'
import milhojas from './img/milojas.jpg'
import empanadas from './img/Empanadas.jpg'
import pionono from './img/pionono.jpg'
import tortachoco from './img/tortadechocolate.png'
import pastel from './img/pastel.jpg'
import orejitas from './img/orejita.jpg'
import brownies from './img/brownies.jpg'

const initialState = {
  productos: [
    {
      name: 'ALFAJOR DE MAISENA - CAJA DE 22 UND.',
      image: alfajor,
      price: '6.0',
    },
    {
      name: 'EMPANADAS - CAJA DE 6 UND.',
      image: empanadas,
      price: '18.0',
    },
    {
      name: 'TORTA DE CHOCOLATE',
      image: tortachoco,
      price: '14.0',
    },
    {
      name: 'PASTEL DE ACELGAS',
      image: pastel,
      price: '16.0',
    },
    {
      name: 'BOCADITOS DULCES - MILHOJAS',
      image: milhojas,
      price: '42.0',
    },
    {
      name: 'BOCADITOS DULCES - PIONONOS',
      image: pionono,
      price: '42.0',
    },
    {
      name: 'BOCADITOS DULCES - OREJITAS',
      image: orejitas,
      price: '42.0',
    },
    {
      name: 'BOCADITOS DULCES - BROWNIES',
      image: brownies,
      price: '58.0',
    },
    {
      name: 'BOCADITOS DULCES - ALFAJORES',
      image: alfajor,
      price: '40.0',
    },
  ],
}

const reducer = (state = initialState, action) => state

export default createStore(reducer)
