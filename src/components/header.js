import React from 'react'
import './header.scss'
import { FaBars } from 'react-icons/fa'
import { throttle } from '../utils/helpers'

class Header extends React.Component {
	state = {
		menuActive: false,
		menuStyle: 'normal'
	}

	componentDidMount = () => {
		document.body.addEventListener('click', this.setInactive)
		document.addEventListener('scroll', throttle(this.setScroll))
	}

	toggleActive = (e) => {
		this.setState(current => ({
			menuActive: !current.menuActive
		}))
	}

	setScroll = (e) => {
		const top = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);
		this.setState({
			menuStyle: !isNaN(top) ? top < 150 ? 'normal' : 'fixed' : 'normal'
		})
	}
	setInactive = (e) => {
		// Fecha o menu		
		if (e && e.relatedTarget && e.target.classList.contains('header__toggler')) {
			e.relatedTarget.click();
		}
		this.setState({
			menuActive: false
		})
	}
	render() {
		return (
			<React.Fragment>

				<header className={`header header--${this.state.menuStyle}`}>
					<div className={`header__wrapper`}>
						<a href="/" className="header__logo">Mestre Construtor</a>
						<nav className={`header__items ${this.state.menuActive === true ? 'header__items--active' : ''}`}>
							<div className="header__itemsWrapper">
								<a href="#conheca" className="scroll header__item">O Programa</a>
								<a href="#porque" className="scroll header__item">Benefícios</a>
								<a href="#videos" className="scroll header__item">Nossos Vídeos</a>
								<a href="#contato" className="scroll header__item header__item--active">Seja um Mestre Construtor</a>
							</div>
						</nav>
						<span
							className="header__toggler"
							onClick={this.toggleActive}
						>
							<FaBars />
						</span>
					</div>
				</header>
			</React.Fragment>
		)
	}
}

export default Header