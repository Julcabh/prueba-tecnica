import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { logoutAsincrono } from '../actions/actionLogin';
import { endpoint } from "../helpers/endpoint"

export const Home = () => {

  const [ingredientes, setIngredientes] = React.useState([])

  React.useEffect(() => {
    fetch(endpoint)
    .then(resp => resp.json())
    .then(data => setIngredientes(data.results))
  }, [])

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAsincrono())
  }


  return (
    <div className="App">
      <header className="center-max-size header">
        <img
          onClick={() => handleLogout()}
          src="https://res.cloudinary.com/julcabh/image/upload/v1643585731/login-xxl_rnvlgd.png"
          alt="LogIn"
          width="50"
        />
      </header>
      <form className="formulario" >
        <p>Ingredientes</p>
        <h1>Risotto de setas (vegano)</h1>
        <p><a href="/home">Seleccionar todo /</a><a href="/home"> Deseleccionar todo</a></p>
        <br></br>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Brand</th>
              <th scope="col">Price</th>
            </tr> 
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Margarina de maíz</td>
              <td>Artua</td>
              <td>2.95</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Arroz de Valencia</td>
              <td>De Nuestra Tierra</td>
              <td>2.4</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Caldo de verduras natural</td>
              <td>Aneto</td>
              <td>3.6</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Seta Shiitake ecológica</td>
              <td>NA</td>
              <td>3.55</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Paragoce, vino blanco</td>
              <td>Verdejo D.O. Rueda</td>
              <td>5.85</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Ajo</td>
              <td>NA</td>
              <td>1.49</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Cebolla chalotas</td>
              <td>NA</td>
              <td>2.99</td>
            </tr>
          </tbody>
        </table>

        <p>Items</p>
        <p>Sub total</p>
        <p>Gastos de envio</p>
        <p>Total</p>
        <button className="button" type="submit">Comprar ingredientes</button>
            
      </form>

    </div>
  )
}