import '/src/styles/footer.css' 

export function Footer(){
	return(
		<footer id="pieDePagina">
			<div>
				<div>
					<p className="tituloFooter">Acerca de</p><br/>
					<ul>
						<li>Nuestra Empresa</li>
						<li>Inversiones</li>
						<li>Tendencias</li>
						<li>Informes</li>
					</ul>
				</div>
				<div>
					<p className="tituloFooter">Otros Sitios</p><br/>
					<ul>
						<li>Mercado Libre</li>
						<li>Amazon</li>
						<li>Exito</li>
						<li>Alkosto</li>
					</ul>
				</div>
				<div>
					<p className="tituloFooter">Redes Sociales</p><br/>
					<ul>
						<li>Facebook</li>
					<li>Twitter</li>
					<li>Instagram</li>
					<li>Youtube</li>
					<li>Tik Tok</li>
					</ul>
				</div>
				<div>
					<p className="tituloFooter">Mi cuenta</p><br/>
					<ul>
						<li>Bloqueo Cuenta</li>
						<li>Olvidaste Contraseña</li>
						<li>Recuperar Cuenta</li>
						<li>Politicas de Privacidad</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}