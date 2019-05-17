import React, { Component } from 'react'
import './conhecaInfos.scss'
import CounterSection from './CounterSection'

class ConhecaInfos extends Component {
	state = {
		items: []
	}

	componentDidUpdate = (prev) => {
		if (prev !== this.props) {
			this.setState({ items: this.props.data.sessao_3_card ? Object.values(this.props.data.sessao_3_card) : [] })
		}
	}
	render() {
		return (
			<div className="conhecaInfos">
				<div className="conhecaInfos__compose">
					{this.state.items.map((i, index) => (
						<CounterSection
							title={i.titulo}
							image={i.imagem}
							id={`infoId_${index}`}
							number={i.numero}
						/>
					))}
				</div>
			</div>
		)
	}
}

export default ConhecaInfos