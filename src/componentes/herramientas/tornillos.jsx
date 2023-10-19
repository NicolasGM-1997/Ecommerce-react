import { CeldaDeProducto } from '/src/componentes/celdas.jsx'
import '/src/styles/productos.css'

export function Tornillos(){
	return(
		<div className="contenedor">
			<p className="tituloPagina">Todas Nuestros Productos</p>
			<p className="tituloProducto">Tornillos</p>
			<div className="division">
				<div className="filtros">
					<p className="tituloProducto">Filtros</p>
					<div>
						<p>Filtrar por valor:</p><br/>
						<select>
							<option>$100.000 - $300.000</option>
							<option>$300.000 - $700.000</option>
							<option>$700.000 - $1.500.000</option>
							<option>$1.500.000 - $3.000.000</option>
						</select>
						<br/><br/><p>Filtrar por descuento:</p><br/>
						<select>
							<option>0 %</option>
							<option>30 %</option>
							<option>50 %</option>
							<option>75 %</option>
						</select>
						<br/><br/><p>Filtrar por Marca:</p><br/>
						<select>
							<option>Samsung</option>
							<option>Whirlpool</option>
							<option>LG</option>
						</select>
					</div>
				</div>
				<hr/>
				<div className="productos">
					{Array.from({ length: 10 }, (_, index) => (
					  <CeldaDeProducto imagen="/src/img/categorias/tornillos.png" producto="Tornillos"
					  	color="Azul" key={index} valor={2210} descuento={34}/>
					))}
				</div>
			</div>
		</div>
	)
}