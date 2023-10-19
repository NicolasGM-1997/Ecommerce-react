import React from 'react'
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom'
import { CeldaDeOfertas } from '/src/componentes/celdas.jsx'
import { useState } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '/src/styles/index.css'

export const electrodomesticos = ['lavadoras','neveras','estufas','microondas','aire-acondicionado','aspiradoras']
export const electronicos = ['televisores','computadores','celulares','impresoras','relojes','modems']
export const hogar = ['muebles','camas','colchones','ollas','platos','vasos']
export const herramientas = ['taladros','pulidoras','llaves','martillos','tornillos','enchufes']
export const totalProductos = [...electrodomesticos,...electronicos,...hogar,...herramientas].map((tot)=>tot)
export const categorias = totalProductos.map((cat)=>`/src/img/categorias/${cat}.png`)
export const rutasProductos = totalProductos.map((rut)=>`/${rut}`)

export const marcas = ['samsung','LG','whirlpool','toshiba','apple','dell','hp','huawei','sony']
export const imgMarcas = [...marcas].map((mar)=>`/src/img/marcas/${mar}.png`)
export const rutasMarcas = [...marcas].map((rut)=>`http://www.${rut}.com`)

export function Index(){
	const navigate = useNavigate()
	const [numPag,setNumPag] = useState(1)

	const settings1 = { dots: true, infinite: false, speed: 750, slidesToShow: 4, slidesToScroll: 4,}
	const settings2 = { dots: true, infinite: true,	speed: 750,	slidesToShow: 4, slidesToScroll: 3,}

	function clickImagen(ruta){
		navigate(ruta)
	}

	function sitios(marca){
		window.open(marca)
	}

	function pagina(indice){
		setNumPag(indice)
	}

	function seleccionado(numero){
		if(numero==numPag){
			return {backgroundColor: '#444', color: 'white'}
		} else {
			return null
		}
	}

	function ocultar(numero){
		if((numero >= (numPag - 1) * 8 && numero < numPag * 8)){
			return {display: 'grid'}
		} else {
			return {display: 'none'}
		}
	}

	return(
		<div id="principal">
			<div id="carrusel">
				<p>Todas Nuestras Categorias</p>
				<Slider {...settings1}>
					{categorias.map((cat, i)=>(
		            <div key={i}>
		              <img src={cat} onClick={() => clickImagen(rutasProductos[i])}/>
		            </div>
			    	))}
				</Slider>
			</div>
			<div id="mejoresOfertas">
				<p>Mejores Ofertas</p>
				<div>
					{categorias.map((cat, i)=>(
		            <div key={i} onClick={() => clickImagen(rutasProductos[i])} style={ocultar(i)}>
		              <CeldaDeOfertas imagen={cat} descuento={75} producto={totalProductos[i]}/>
		            </div>
			    	))}
				</div>
				{(() => {
			    	const numberOfButtons = Math.ceil(categorias.length / 8);
			    	const buttons = [];

			      	for (let i = 0; i < numberOfButtons; i++) {
			        	buttons.push(
					        <button key={i} onClick={() => pagina(i+1)} style={seleccionado(i+1)}>
					            {i + 1}
					        </button>
			        	)
			   		}
			   		return buttons
 				})()}
			</div>
			<div id="sitios">
				<p>Tiendas Oficiales de Nuestros Productos</p>
				<Slider {...settings2}>
					{imgMarcas.map((marca,i)=>(
						<div key={i}>
							<img src={marca} onClick={() => sitios(rutasMarcas[i])}/>
						</div>
					))}
				</Slider>
			</div>
			<div id="infoPagos">
				<div>
					<p className="titulo">Pagos con Tarjeta de Credito</p><br/>
					<p className="info">
					Con Pagos en linea, paga en cuotas y aprovecha la comodidad de financiación que te da tu banco, 
					o hazlo con efectivo en puntos de pago. ¡Y siempre es seguro!
					</p>
				</div>
				<div>
					<p className="titulo">Envios Gratis desde $120.000</p><br/>
					<p className="info">
					Con solo estar registrado en nuestra pagina, tienes envíos gratis en miles de productos seleccionados.
					</p>
				</div>
				<div>
					<p className="titulo">Seguridad, de principio a fin</p><br/>
					<p className="info">
					¿No te gusta? ¡Devuélvelo! Aqui, no hay nada que no puedas hacer, porque estás siempre protegido.
					</p>
				</div>
			</div>
		</div>
	)
}

