import React from 'react'
import './banner.scss'
import pedreiro from '../assets/images/pedreiro.png'
import pedrasFundo from '../assets/images/pedras-fundo.png'
import pedrasFrente from '../assets/images/pedras-frente.png'
import logoMestre from '../assets/images/Logo-Mestre.png'
import headerPedras from '../assets/images/Header-Pedras.png'
import capacete from '../assets/images/Header-Logo.png'
import { Throttle } from 'react-throttle';


const moveBaner = (elm) => {
	if(window.innerWidth < 768){
		return false
	}
	// eixos de movimento do mouse
	const x = elm.clientX;
	const y = elm.clientY;
	// elementos 
	// const pedrasFrente = document.getElementsByClassName('banner__pedrasFrente')[0]
	const logoWrapper = document.getElementsByClassName('banner__logoWrapper')[0]
	const wrapper = document.getElementsByClassName('banner__wrapper')[0]
	// tamanhos da tela
	const wrapperWidth = wrapper.offsetWidth;
	const wrapperHeight = wrapper.offsetHeight;
	// alteração de estilo
	// pedrasFrente.style.transform = `translate(${(x / wrapperWidth * 40) -4}px, ${(y / wrapperHeight * 40) -20}px)`
	logoWrapper.style.transform = `translate(${(x / wrapperWidth * 5) -8}px, ${(y / wrapperHeight * 5) -8}px)`
}

const Banner = () => {
	return (
		<div className="banner" id='banner'>
			<Throttle time="200" handler="onMouseMove">
				<div className="banner__wrapper" onMouseMove={(e) => moveBaner(e)}>
					<div className="banner__logoWrapper">
						<img className="banner__pedrasFundo" src={headerPedras} alt=""/>
						{/* <img className="banner__logo" src={logoMestre} alt=""/> */}
					</div>
					<img className="banner__pedreiro" src={capacete} alt=""/>
					{/* <img className="banner__pedrasFrente" src={pedrasFrente} alt=""/> */}
				</div>
			</Throttle>
		</div>
	)
}

export default Banner