import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '/src/autentificacion.jsx'
import '/src/styles/redes.css'

export function Carrito(){
	const { isLoggedIn, setIsLoggedIn } = useAuth()
	const navigate = useNavigate()
	function navInicioSesion(){
		navigate('/inicio-sesion')
	}
	return(
		<div id="carrito">
			<img src="/src/img/redes/carrito.png"/>
			{isLoggedIn?(
				<div id="compras">
					<p>Ya Iniciaste Sesion</p>
				</div>
			):(
				<div id="compras">
					<p>No haz Iniciado Sesion</p>
					<button onClick={navInicioSesion}>Iniciar Sesion</button>
				</div>
			)}
			
		</div>
	)
}