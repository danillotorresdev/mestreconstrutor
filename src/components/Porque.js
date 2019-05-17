import React, { Component } from 'react'
import './porque.scss'
import ContentText from './ContentText'
import CircleMosaic from './CircleMosaic'
import estrela from '../assets/images/Estrela.png'

class Porque extends Component {
	state = {
		title: '',
		text: '',
		items: []
	}

	componentDidUpdate = (prev) => {
		if (prev !== this.props) {
			this.setState({
				title: this.props.data.sessao_4_titulo,
				text: this.props.data.sessao_4_texto,
				items:this.props.data.sessao_4_circulo_opcao ? Object.values(this.props.data.sessao_4_circulo_opcao ): []
			})
		}
	}
	render() {
		return (
			<div className="porque" id="porque">
				<div className="porque__intro">
					<div className="porque__pendente"></div>
					<ContentText
						title={this.state.title}
						hasSeparator={true}
						separatorIcon={estrela}
						text={this.state.text}
					/>
					<a className="porque__intro-link scroll" href="#contato">Eu quero ser um profissional completo!</a>
				</div>
				<div className="porque__info">
					<CircleMosaic
						items={this.state.items}
					/>
				</div>
			</div>
		)
	}
}

export default Porque