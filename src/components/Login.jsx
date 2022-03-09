import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { loginEmailPassAsincrono, loginGoogleAsincrono, loginFacebookAsincrono /*logoutAsincrono*/ } from '../actions/actionLogin';
import { useDispatch } from 'react-redux';
import "../styles/loginRegistro.css";

function Login({ history }) {

    const dispatch = useDispatch();

    const [registro, setRegistro] = useState({
        email: '',
        password: ''
    })

    const { email, password } = registro;

    const handleInputChange = ({ target }) => {
        setRegistro({
            ...registro,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginEmailPassAsincrono(email, password))
    }

    const handleGoogleAsincrono = () => {
        dispatch(loginGoogleAsincrono())
    }

    const handleFacebookAsincrono = () => {
        dispatch(loginFacebookAsincrono())
    }

    /*const handleLogout = () => {
        dispatch(logoutAsincrono())
    }*/


    return (
        <div>
            <div className="body">
                <form className="formulario" onSubmit={handleSubmit}>
                    <h1>Iniciar Sesion</h1>
                    <div className='contenedor'>

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
                                name="password"
                                onChange={handleInputChange}>
                            </input>
                        </div>
                        <button className="button" type="submit">Iniciar Sesion</button>
                        <button className="button" onClick={() => handleGoogleAsincrono()}>Continuar con Google</button>
                        <button className="button" onClick={() => handleFacebookAsincrono()}>Continuar con Facebook</button>
                        <p><a href="/home">¿Se te olvido tu contraseña?</a></p>
                        <p>¿Aun no tienes una cuenta? <Link to="/registro">Registrate</Link></p>

                    </div>


                </form>
            </div>
        </div>
    );
}

export default Login;
