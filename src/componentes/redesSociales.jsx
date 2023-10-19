import React, {Component} from 'react'
import '/src/styles/redes.css'

export function RedesSociales (){

	function navFacebook(){
		window.open("https:/\/www.facebook.com")
	}

	function navTwitter(){
		window.open("https:/\/www.twitter.com")
	}

	function navInstgram(){
		window.open("https:/\/www.instagram.com")
	}

	function navYoutube(){
		window.open("https:/\/www.youtube.com")
	}

	function navTikTok(){
		window.open("https:/\/www.tiktok.com")
	}

	return(
		<div id="redes">
			<img src="/src/img/redes/facebook.png" onClick={navFacebook}/>
			<img src="/src/img/redes/twitter.png" onClick={navTwitter}/>
			<img src="/src/img/redes/instagram.png" onClick={navInstgram}/>
			<img src="/src/img/redes/youtube.png" onClick={navYoutube}/>
			<img src="/src/img/redes/tik-tok.png" onClick={navTikTok}/>
		</div>
	)
}