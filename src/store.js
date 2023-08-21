import { createStore } from 'redux'
import alfajor from './img/alfajor.jpg'
import milhojas from './img/milojas.jpg'
import empanadas from './img/Empanadas.jpg'
import keke from './img/keke3.jpg'
import pastel from './img/pastel.jpg'
const initialState = {
  productos: [
    {
      name: 'ALFAJOR DE MAISENA - CAJA DE 25 ALFAJORES',
      image: alfajor,
      price: '6.0',
    },
    {
      name: 'CAJA DE EMPANADAS',
      image: empanadas,
      price: '15.0',
    },
    {
      name: 'KEKE DE CHOCOLATE',
      image: keke,
      price: '16.0',
    },
    {
      name: 'PASTEL',
      image: pastel,
      price: '16.0',
    },
    {
      name: 'BOCADITOS DULCES - MILHOJAS',
      image: milhojas,
      price: '42.0',
    }
  ],
}

const reducer = (state = initialState, action) => state

export default createStore(reducer)
