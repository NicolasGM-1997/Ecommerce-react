import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '/src/autentificacion.jsx'
import '/src/styles/sesiones.css'

export function InicioSesion({initialState}){
	const [isLogin,setIsLogin] = useState(initialState.isLogin)
	const { isLoggedIn, setIsLoggedIn } = useAuth()
	const navigate = useNavigate()
	const botonIntercambio = ()=>{
		setIsLogin(!isLogin)
	}
	function login(){
		setIsLoggedIn(!isLoggedIn)
		navigate('/')
	}
	function registro(){
		alert('haz creado una cuenta inicia sesion')
		botonIntercambio()
	}
	return(
		<div id="datosUsuario">
			{isLogin?(
				<table id="formSesion">
					<tbody>
						<tr>
							<td><strong>Inicio de Sesion</strong></td>
						</tr>
						<tr>
							<td><input type="text" placeholder="...Nombre de Usuario o CC"/></td>
						</tr>
						<tr>
							<td><input type="password" placeholder="...Contraseña"/></td>
						</tr>
						<tr>
							<td><button onClick={login}>Ingresar</button></td>
						</tr>
						<tr>
							<td><Link to="">Olvidaste tu Contraseña?</Link></td>
						</tr>
						<tr>
							<td>Aun no tienes cuenta, registrate como nuevo usuario</td>
						</tr>
						<tr>
							<td><button onClick={botonIntercambio}>Registrarse</button></td>
						</tr>
					</tbody>
				</table>
			) : (
				<table id="formRegistro">
					<tbody>
						<tr>
							<td colSpan={2}><strong>Registro Nuevo Usuario</strong></td>
						</tr>
						<tr>
							<td><input type="text" placeholder="...Nombre Completo" /></td>
							<td><input type="text" placeholder="...Cedula o NIT" /></td>
						</tr>
						<tr>
							<td><input type="text" placeholder="...Direccion" /></td>
							<td><input type="email" placeholder="...Correo Electronico" /></td>
						</tr>
						<tr>
							<td><input type="number" placeholder="...Telefono Celular" /></td>
							<td><input type="password" placeholder="...Contraseña" /></td>
						</tr>
						<tr>
							<td colSpan={2}><button onClick={registro}>Registrarse</button></td>
						</tr>
						<tr>
							<td colSpan={2}>Ya tienes una cuenta, inicia sesion en nuestra pagina</td>
						</tr>
						<tr>
							<td colSpan={2}><button onClick={botonIntercambio}>Inciar Sesion</button></td>
						</tr>
					</tbody>
				</table>
			)}
			
			
		</div>
	)
}

