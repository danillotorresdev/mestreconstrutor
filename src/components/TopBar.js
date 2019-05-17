import React, {Component} from 'react'
import './topbar.scss'
import {FaFacebookF, FaYoutube, FaInstagram, FaLinkedin} from 'react-icons/fa'
import {IoIosMailUnread} from 'react-icons/io'

class TopBar extends Component {
	  // When the user clicks on the button, scroll to the top of the document
	topFunction = () => {
		console.log('clicou')
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
	render(){
		return (
			<React.Fragment>
				<div className="topBar">
					<div className="topBar--wrapper">
						<div className="topBar__contact">
							{/* <span className="topBar__phone">020 1234 56978</span>
							<a href="mailto:email@mestreconstrutor.com.br" className="topBar__mail">email@mestreconstrutor.com.br</a> */}
						</div>
						<div className="topBar__socials">
							<a className="topBar__social" href="https://www.facebook.com/construtormestre/" target="_blank">Facebook <span className="topBar__social-icon topBar__social-icon--facebook"><FaFacebookF /></span></a>
							<a className="topBar__social" href="https://www.youtube.com/channel/UCG9iPXs2CyGduQ2a7PdoKfA" target="_blank">Youtube <span className="topBar__social-icon topBar__social-icon--youtube"><FaYoutube /></span></a>
							<a className="topBar__social" href="https://www.instagram.com/mestreconstrutor/" target="_blank">Instagram <span className="topBar__social-icon topBar__social-icon--instagram"><FaInstagram /></span></a>			
						</div>
					</div>
				</div>
				
			</React.Fragment>
		)
	}
}

export default TopBar