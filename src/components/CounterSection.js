import React from 'react'
import './counterSection.scss'
import CountTo from 'react-count-to';
import {throttle} from '../utils/helpers'

class CounterSection extends React.Component {
	state = {
		active: false
	}
	componentDidMount = () =>{
		document.addEventListener('scroll', throttle(this.handleScroll, 200))
	}
	handleScroll = () => {
		if(this.isInViewport() === true){
			console.log('aqui')
			this.setState({
				active: true
			})
		}
	}

	isInViewport = (offset = 0) => {
		let el = document.getElementById(`counterSection_${this.props.id}`)
	    if (!el) return false;
	    const top = el.getBoundingClientRect().top;
	    return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
	}
	render(){
		return (
			<div key={this.props.id} id={`counterSection_${this.props.id}`} className="counterSection">
				<span className="counterSection__icon" style={{'backgroundImage': `url(${this.props.image})`}}></span>
				<p className="counterSection__number">
					{this.state.active && 
						<CountTo to={parseInt(this.props.number)} speed={1000} />
					}
				</p>
				<p className="counterSection__text">{this.props.title}</p>
			</div>
		)
	}
}

export default CounterSection