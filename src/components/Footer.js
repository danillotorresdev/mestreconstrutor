import React from 'react'
import './footer.scss'
import logo from '../assets/images/logo.png'
import { FaRegFilePdf, FaRegFileWord, FaYoutube, FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__wrapper">
				<div className="footer__col">
					<img className="footer__logo" src={logo} alt='logo mestre' />
					<p className="footer__intro">
						Mestre Construtor é um programa de relacionamento MC-Bauchemie Brasil, sob a marca MC - Produtos Argatex.
					</p>
				</div>
				<div className="footer__col">
					<h2 className="footer__title">O Site</h2>
					<ul className="footer__list">
						<li className="footer__item"><a className="footer__item-text" href="#conheca">O Programa</a></li> 
						<li className="footer__item"><a className="footer__item-text" href="#porque">Benefícios</a></li>
						<li className="footer__item"><a className="footer__item-text" href="#videos">Nossos Vídeos</a></li>
						<li className="footer__item"><a className="footer__item-text" href="#contato">Seja um Mestre Construtor</a></li>
					</ul>
				</div>
				<div className="footer__col">
					<h2 className="footer__title">Materiais</h2>
					<ul className="footer__list">
						<li className="footer__item footer__item--material">
							<span className="footer__material-icon"><FaRegFilePdf /></span>
							<a className="footer__material" href="#download">Download Technical Data</a>
						</li>
						<li className="footer__item footer__item--material">
							<span className="footer__material-icon"><FaRegFileWord /></span>
							<a className="footer__material" href="#download">Download Brochure 2</a>
						</li>
					</ul>
				</div>
				<div className="footer__col">
					<h2 className="footer__title">Saiba Mais</h2>
					<p className="footer__news">
						Ficou com alguma dúvida? Envie uma mensagem para o mestre! 
					</p>
					<div className="topBar__socials">
						<a className="topBar__social" href="https://www.facebook.com/construtormestre/" target="_blank">Facebook <span className="topBar__social-icon topBar__social-icon--facebook"><FaFacebookF /></span></a>
						<a className="topBar__social" href="https://www.youtube.com/channel/UCG9iPXs2CyGduQ2a7PdoKfA" target="_blank">Youtube <span className="topBar__social-icon topBar__social-icon--youtube"><FaYoutube /></span></a>
						<a className="topBar__social" href="https://www.instagram.com/mestreconstrutor/" target="_blank">Instagram <span className="topBar__social-icon topBar__social-icon--instagram"><FaInstagram /></span></a>			
					</div>
				</div>
			</div>
			<div className="footer__bottom">
				<div className="footer__wrapper footer__wrapper--bottom">
					<div className="footer__col footer__col--bottom">
						<p className="footer__bottom-text">
							Desenvolvido por <a className="footer__layerUp" rel="noopener noreferrer" href="http://layerup.com.br" target="_blank">Layer Up</a>
						</p>
					</div>
					<div className="footer__col footer__col--bottom">
						<p className="footer__bottom-text footer__bottom-text--social">
							Acompanhe nosso canal no YouTube <FaYoutube />/<strong className="footer__strong"> <a className='footer__youtubeLink' target="_blank" href="https://www.youtube.com/channel/UCG9iPXs2CyGduQ2a7PdoKfA"> mestreconstrutor</a></strong>
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer