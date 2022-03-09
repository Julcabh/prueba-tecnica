import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { registroAsincrono } from '../actions/actionRegistro';
import "../styles/loginRegistro.css";

export const Registro = () => {

  const dispatch = useDispatch()
  const [registro, setRegistro] = useState({
    nombre: '',
    email: '',
    pass1: ''
    /*pass2: ''*/
  })

  const { nombre, email, pass1, /*pass2*/ } = registro;

  const handleInputChange = ({ target }) => {
    setRegistro({
      ...registro,
      [target.name]: target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registroAsincrono(email, pass1, nombre))
  }

  return (
    <div>
      <div className="body">
        <form className="formulario" onSubmit={handleSubmit}>
          <h1>Registrar cuenta</h1>

          <div className='contenedor'>

            <div className='input-contenedor'>
              <i className="fas fa-user icon"></i>
              <input
                type="text"
                placeholder="Nombre"
                name="nombre"
                onChange={handleInputChange}>
              </input>
            </div>

            <div className='input-contenedor'>
              <i className="fas fa-envelope icon"></i>
              <input
                type="text"
                placeholder="Correo electronico"
                name="email"
                onChange={handleInputChange}>
              </input>
            </div>
            <div className='input-contenedor'>
              <i className="fas fa-key icon"></i>
              <input
                type="password"
                placeholder="Contraseña"
                name="pass1"
                onChange={handleInputChange}>
              </input>
            </div>

            <div className='input-contenedor'>
              <i className="fas fa-key icon"></i>
              <input
                type="password"
                placeholder="Repita su contraseña"
                name="pass1"
                onChange={handleInputChange}>
              </input>
            </div>

          </div>

          <button className="button">Registrar cuenta</button>
          <p>¿Ya tienes una cuenta? <Link to="/">Iniciar Sesión</Link></p>
        </form>
      </div>
    </div>

  )
}
