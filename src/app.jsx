import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
/* Estado de sesion */
import { AuthProvider } from '/src/autentificacion.jsx'
/* Componentes Principales */
import { NavBar } from '/src/nav.jsx'
import { Footer } from '/src/footer.jsx'
import { Index , electrodomesticos, electronicos, hogar, herramientas, 
	rutasProductos} from '/src/componentes/index.jsx'
/* Demas Componentes */
import { InicioSesion } from '/src/componentes/inicioSesion.jsx'
import { RedesSociales } from '/src/componentes/redesSociales.jsx'
import { Carrito } from '/src/componentes/carrito.jsx'
import { Ofertas } from '/src/componentes/ofertas.jsx'
/* Electrodomesticos */
import { Lavadoras } from '/src/componentes/electrodomesticos/lavadoras.jsx'
import { Neveras } from '/src/componentes/electrodomesticos/neveras.jsx'
import { Estufas } from '/src/componentes/electrodomesticos/estufas.jsx'
import { Microondas } from '/src/componentes/electrodomesticos/microondas.jsx'
import { AireAcondicionado } from '/src/componentes/electrodomesticos/aireAcondicionado.jsx'
import { Aspiradoras } from '/src/componentes/electrodomesticos/aspiradoras.jsx'
/* Electronicos */
import { Televisores } from '/src/componentes/electronicos/televisores.jsx'
import { Computadores } from '/src/componentes/electronicos/computadores.jsx'
import { Celulares } from '/src/componentes/electronicos/celulares.jsx'
import { Impresoras } from '/src/componentes/electronicos/impresoras.jsx'
import { Relojes } from '/src/componentes/electronicos/relojes.jsx'
import { Modems } from '/src/componentes/electronicos/modems.jsx'
/* Hogar */
import { Muebles } from '/src/componentes/hogar/muebles.jsx'
import { Camas } from '/src/componentes/hogar/camas.jsx'
import { Colchones } from '/src/componentes/hogar/colchones.jsx'
import { Ollas } from '/src/componentes/hogar/ollas.jsx'
import { Platos } from '/src/componentes/hogar/platos.jsx'
import { Vasos } from '/src/componentes/hogar/vasos.jsx'
/* Herramientas */
import { Taladros } from '/src/componentes/herramientas/taladros.jsx'
import { Pulidoras } from '/src/componentes/herramientas/pulidoras.jsx'
import { Llaves } from '/src/componentes/herramientas/llaves.jsx'
import { Martillos } from '/src/componentes/herramientas/martillos.jsx'
import { Tornillos } from '/src/componentes/herramientas/tornillos.jsx'
import { Enchufes } from '/src/componentes/herramientas/enchufes.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

const Electrodomesticos = [Lavadoras,Neveras,Estufas,Microondas,AireAcondicionado,Aspiradoras]
const Electronicos = [Televisores,Computadores,Celulares,Impresoras,Relojes,Modems]
const Hogar = [Muebles,Camas,Colchones,Ollas,Platos,Vasos]
const Herramientas = [Taladros,Pulidoras,Llaves,Martillos,Tornillos,Enchufes]
const Productos = [...Electrodomesticos,...Electronicos,...Hogar,...Herramientas].map((prd)=>prd)

function Navegacion(){
	return(
		<Router>
			<NavBar/>
			<Carrito/>
		  	<Routes>
		  		<Route path="/" exact element={<Index/>}></Route>
		  		<Route path="/ofertas" element={<Ofertas/>}></Route>
		  		<Route path="/ventas"></Route>
		  		<Route path="/contacto"></Route>
		  		<Route path="/inicio-sesion" element={<InicioSesion initialState={{isLogin:true}}/>}></Route>
		  		<Route path="/registro" element={<InicioSesion initialState={{isLogin:false}}/>}></Route>
		  		{Productos.map((Prd,i)=>(
		  			<Route path={rutasProductos[i]} key={i} element={<Prd/>}></Route>
		  		))}
		  	</Routes>
  		</Router>
	)
}
root.render(
	<React.StrictMode>
		<AuthProvider>
			<Navegacion/>
			<RedesSociales/>
			<Footer/>
		</AuthProvider>
	</React.StrictMode>
)


