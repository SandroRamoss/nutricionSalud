import { createStore } from 'redux'
import alfajor from './img/alfajor.jpg'
import milhojas from './img/milojas.jpg'
import pionono from './img/pionono.jpg'
import tortachoco from './img/tortadechocolate.png'
import pastel from './img/pastel.jpg'
import orejitas from './img/orejita.jpg'
import brownies from './img/brownies.jpg'
import kekeplatano from './img/kekeplatano.jpg'
import kekechoco from './img/kekechocolate.jpg'

const initialState = {
  productos: [
    {
      name: 'ALFAJOR DE MAISENA - CAJA PEQUEÑA.',
      image: alfajor,
      price: '6.0',
    },
    {
      name: 'EMPANADAS - CAJA DE 6 UND.',
      image: 'https://cuk-it.com/wp-content/uploads/2023/06/empanadas-criollas-stories01b-e1600379145405.jpg',
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
    {
      name: 'BOCADITOS SALADO - EMP. CARNE',
      image: 'https://lareceta.com.ar/uploads/notas/phpswzetG.jpg',
      price: '46.0',
    },
    {
      name: 'BOCADITOS SALADO - EMP. POLLO',
      image: 'https://lasrecetasdelchef.net/wp-content/uploads/2016/11/Empanadas-de-Pollo.jpg',
      price: '46.0',
    },
    {
      name: 'BOCADITOS SALADO - EMP. HOTDOG',
      image: 'https://www.recetasnestle.com.co/sites/default/files/srh_recipes/6362549667b81e68126c8aadd5d54fff.jpg',
      price: '46.0',
    },
    {
      name: 'BOCADITOS SALADO - EMP. QUESO',
      image: 'https://cuk-it.com/wp-content/uploads/2023/06/JuanGrande-Empanadas-03-e1635257276186.jpg',
      price: '46.0',
    },
    {
      name: 'KEKE INGLES',
      image: 'https://pasteleriasanantonio.com/wp-content/uploads/2022/12/KEKE_INGLES-1.jpg',
      price: '12.0',
    },
    {
      name: 'KEKE ZANAHORIA',
      image: 'https://www.guioteca.com/cocina/files/2015/09/queque-zanahoria.jpg',
      price: '11.0',
    },
    {
      name: 'KEKE PLÁTANO',
      image:  kekeplatano,
      price: '11.0',
    },
    {
      name: 'KEKE CHOCOLATE',
      image:  kekechoco,
      price: '11.0',
    },
    {
      name: 'KEKE MARMOLEADO',
      image:  'https://cocinandosalud.com.ar/wp-content/uploads/2021/03/Budin-marmolado-1-scaled.jpg',
      price: '11.0',
    }
  ],
}

const reducer = (state = initialState, action) => state

export default createStore(reducer)
