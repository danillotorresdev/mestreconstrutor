import React, { Component } from 'react'
import "./Mapa.scss"
import MyMap from './MapLeafLet'

class Mapa extends Component {
    state = {
        title: '',
        text: '',
        latitude:'',
        longitude: ''

    }
    componentDidUpdate = (prev) => {
        if (prev !== this.props) {
            this.setState({
                title: this.props.data.sessao_8_titulo,
                text: this.props.data.sessao_8_texto,
                image: this.props.data.sessao_8_imagem,
                latitude: this.props.data.sessao_8_latitude,
                longitude: this.props.data.sessao_8_longitude
            })
        }
    }
    render() {
        return (
            <section className='mapa'>
                <div className='mapa__coluna'>
                    { this.state.latitude && this.state.longitude &&
                         <MyMap lat={this.state.latitude} lng={this.state.longitude} />                    
                    } 

                </div>
                <div className='mapa__coluna'>
                    <div className='mapa__colunaInterior'>

                        <h4 className="mapa__titulo"><span className='mapa__estrela'></span>{this.state.title}</h4>
                        <p className="mapa__texto" dangerouslySetInnerHTML={{ __html: this.state.text }}></p>
                    </div>
                    <div className='mapa__colunaInterior' style={{ backgroundImage: `url(${this.state.image})` }}> </div>
                </div>

            </section>
        )
    }
}

export default Mapa