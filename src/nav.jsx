import { Link, useNavigate } from 'react-router-dom'
import { InicioSesion } from '/src/componentes/inicioSesion'
import { useState } from 'react'
import { useAuth } from '/src/autentificacion.jsx'
import '/src/styles/nav.css'

export function NavBar(){
	const navigate = useNavigate()
	const { isLoggedIn, setIsLoggedIn } = useAuth()

	function cerrarSesion(){
		setIsLoggedIn(!isLoggedIn)
	}

	function navInicioSesion(){
		navigate('/inicio-sesion')
	}

	function navRegistro(){
		navigate('/registro')
	}

	return(
	  	<header id="nav">
	  		<div id="navItem">
	  			<Link to="/"><img src="/src/img/nav/icono.png"/></Link>
	  			<ul>
	  				<li><Link to="/">Inicio</Link></li>
	  				<li>
	  					<Link id="btn">Categorias</Link>
	  					<div className="contenido">
	  						<p className="categorias">Electrodomesticos</p>
	  						<ul>
	  							<li><Link to="/lavadoras">Lavadoras</Link></li>
	  							<li><Link to="/neveras">Neveras</Link></li>
	  							<li><Link to="/estufas">Estufas</Link></li>
	  							<li><Link to="/microondas">Microondas</Link></li>
	  							<li><Link to="/aspiradoras">Aspiradoras</Link></li>
	  							<li><Link to="/aire-acondicionado">Aire Acondicionado</Link></li>
	  						</ul>
	  						<hr/>
	  						<p className="categorias">Electronicos</p>
	  						<ul>
	  							<li><Link to="/televisores">Televisores</Link></li>
	  							<li><Link to="/computadores">Computadores</Link></li>
	  							<li><Link to="/celulares">Celulares</Link></li>
	  							<li><Link to="/impresoras">Impresoras</Link></li>
	  							<li><Link to="/relojes">Relojes</Link></li>
	  							<li><Link to="/modems">Modems</Link></li>
	  						</ul>
	  						<hr/>
	  						<p className="categorias">Hogar</p>
	  						<ul>
	  							<li><Link to="/muebles">Muebles</Link></li>
	  							<li><Link to="/camas">Camas</Link></li>
	  							<li><Link to="/colchones">Colchones</Link></li>
	  							<li><Link to="/ollas">Ollas</Link></li>
	  							<li><Link to="/platos">Platos</Link></li>
	  							<li><Link to="/vasos">Vasos</Link></li>
	  						</ul>
	  						<hr/>
	  						<p className="categorias">Herramientas</p>
	  						<ul>
	  							<li><Link to="/taladros">Taladros</Link></li>
	  							<li><Link to="/pulidoras">Pulidoras</Link></li>
	  							<li><Link to="/llaves">LLaves</Link></li>
	  							<li><Link to="/martillos">Martillos</Link></li>
	  							<li><Link to="/tornillos">Tornillos</Link></li>
	  							<li><Link to="/enchufes">Enchufes</Link></li>
	  						</ul>
	  					</div>
	  				</li>
	  				<li><Link to="/ofertas">Ofertas</Link></li>
	  				<li><Link to="/ventas">Ventas</Link></li>
	  				<li><Link to="/contacto">Contacto</Link></li>
	  			</ul>
	  		</div>
	  		<div id="ingresoDatos">
		  		<div id="busqueda">
		  			<img src="/src/img/nav/lupa.png"/>
		  			<input type="search" placeholder="...Buscar Producto" id="buscar"/>
		  		</div>
	  			{isLoggedIn?(
	  				<div id="loguear">
	  					<img src="/src/img/nav/usuario.png"/>
	  					<p>User #123</p>
	  					<button className="sesion" onClick={cerrarSesion}>Cerrar Sesion</button>
	  				</div>	
	  			):(
	  				<div id="loguear">
		  				<button className="sesion" onClick={navInicioSesion}>Iniciar Sesion</button>
		  				<button className="sesion" onClick={navRegistro}>Registrarse</button>
	  				</div>
	  			)}
	  		</div>
	  	</header>
  	)
}