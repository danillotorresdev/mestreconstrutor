import React, { Component } from 'react'
import './conheca.scss'
import ContentText from './ContentText'
import ConhecaItem from './ConhecaItem'
import estrela from '../assets/images/Estrela.png'


class Conheca extends Component {

	state = {
		title: '',
		text: '',
		items: []
	}

	componentDidUpdate = (prev) => {
		if (prev !== this.props) {
			this.setState({ 
				title: this.props.data.sessao_2_titulo,
				text: this.props.data.sessao_2_texto,
				items: this.props.data.sessao_2_card ? Object.values(this.props.data.sessao_2_card) : [] })
		}
	}
	render() {
		return (
			<div className="conheca" id="conheca"> 
				<div className="conheca__info">
					<ContentText
						title={this.state.title}
						text={this.state.text}
						hasSeparator={true}
						separatorIcon={estrela}
					/>
				</div>
				<div className="conheca__compose">
					{this.state.items.map((i, index) => (
						<React.Fragment key={`card_${index}`}>
							<ConhecaItem
								text={i.texto}
								title={i.titulo}
								image={i.imagem}
							/>
						</React.Fragment>
					))}
				</div>
			</div>
		)
	}
}

export default Conheca