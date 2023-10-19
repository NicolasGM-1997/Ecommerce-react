import { CeldaDeOfertas } from '/src/componentes/celdas.jsx'
import { electrodomesticos, electronicos, hogar, herramientas, totalProductos, categorias, 
	rutasProductos } from '/src/componentes/index.jsx'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'; 

import '/src/styles/ofertas.css'

export function Ofertas(){
	const navigate = useNavigate()
	
	function clickImagen(ruta){
		navigate(ruta)
	}

	return(
		<div id="ofertas">
			<div className="grupo">
				<p className="tituloOferta">Electrodomesticos</p>
				<div>
					{electrodomesticos.map((elec,i)=>(
						<div key={i} onClick={()=>clickImagen(rutasProductos[i])}>
							<CeldaDeOfertas imagen={categorias[i]} descuento={"30, 50 y 75 "} producto={totalProductos[i]}/>
						</div>
					))}
				</div>
			</div>
			
			<div className="grupo">
				<p className="tituloOferta">Electronicos</p>
				<div>
					{electronicos.map((elec,i)=>(
						<div key={i} onClick={()=>clickImagen(rutasProductos[i+6])}>
							<CeldaDeOfertas imagen={categorias[i+6]} descuento={"30, 50 y 75 "} producto={totalProductos[i+6]}/>
						</div>
					))}
				</div>
			</div>

			<div className="grupo">
				<p className="tituloOferta">Hogar</p>
				<div>
					{hogar.map((elec,i)=>(
						<div key={i} onClick={()=>clickImagen(rutasProductos[i+12])}>
							<CeldaDeOfertas imagen={categorias[i+12]} descuento={"30, 50 y 75 "} producto={totalProductos[i+12]}/>
						</div>
					))}
				</div>
			</div>

			<div className="grupo">
				<p className="tituloOferta">Herramientas</p>
				<div>
					{herramientas.map((elec,i)=>(
						<div key={i} onClick={()=>clickImagen(rutasProductos[i+18])}>
							<CeldaDeOfertas imagen={categorias[i+18]} descuento={"30, 50 y 75 "} producto={totalProductos[i+18]}/>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}