import '/src/styles/celdas.css'

export function CeldaDeOfertas({imagen,producto,descuento,}){
	return(
		<div className="celdaOfertas">
			<img src={imagen}/>
			<hr/>
			<div>
				<p className="nombreProducto">{producto.toUpperCase()}</p>
				<p className="descuento">{descuento}% de descuento</p>
			</div>
		</div>
	)
}

export function CeldaDeProducto({imagen,producto,valor,descuento,color,}){
	var total = valor*descuento
	return(
		<div className="celdaProducto">
			<img src={imagen}/>
			<div className="informacion">
				<div>
					<p><b>Nombre Producto:</b> {producto}</p>
					<p><b>Color:</b> {color}</p>
					<p><b>Valor sin descuento: </b>{valor}</p>
					<p><b>Total Descuento:</b> {descuento}</p>
					<p><b>Valor Total:</b> {total}</p>
				</div>
				<div className="botones">
					<button>Comprar</button><br/>
					<button>Reservar</button>
				</div>
			</div>
		</div>
	)
}