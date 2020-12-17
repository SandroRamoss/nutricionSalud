import React from 'react'
import styled from 'styled-components'
import background from '../img/contactenos.jpg'

const StyledDiv = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Card = styled.div`
  margin: 1rem;
  background: white;
  width: 80%;
  padding: 1.5rem;
  /* border-radius: 15px; */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  @media screen and (min-width: 768px) {
    width: 70%;
  }

  @media screen and (min-width: 1024px) {
    width: 40%;
  }

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

const MyForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .form_field {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }

  label {
    margin-bottom: 7px;
  }

  input,
  textarea {
    font-size: 0.9rem;
    padding: 0.3rem;
    border: 1px solid #e5e5e5;
    border-radius: 0px;
  }

  input:focus,
  textarea:focus {
    outline: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: #b8bbbe;
  }

  textarea {
    resize: none;
    height: 100px;
  }

  h1 {
    height: 10%;
    margin: 0;
    font-weight: 300;
    font-size: 1.8rem;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 10px;
  }

  .form_content {
    height: 80%;
    overflow-y: scroll;
  }

  .btn {
    height: 10%;
    background-color: #6c4040;
    margin-top: 10px;
    border: none;
    padding: 10px;
    text-transform: uppercase;
    color: white;
    font-size: 16px;
  }
`

export default function Contacto() {
  return (
    <StyledDiv>
      <Card>
        <MyForm
          id="myForm"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <h1>Contáctenos</h1>
          <div className="fomr_content">
            <div className="form_field">
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" placeholder="Nombre" />
            </div>
            <div className="form_field">
              <label htmlFor="email">Correo Electronico:</label>
              <input type="email" id="email" placeholder="nombre@ejemplo.com" />
            </div>
            <div className="form_field">
              <label htmlFor="pnumber">Teléfono:</label>
              <input type="tel" id="pnumber" placeholder="Teléfono" />
            </div>
            <div className="form_field">
              <label htmlFor="message">Mensaje:</label>
              <textarea id="message" placeholder="Mensaje" />
            </div>
          </div>
          <input
            type="submit"
            className="btn"
            id="boton"
            value="Enviar Ahora"
          />
        </MyForm>
      </Card>
    </StyledDiv>
  )
}
