import React, { Component } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./Depoimentos.scss"
import ContentText from './ContentText'
import estrela from '../assets/images/Estrela.png'
import iconeDepoimento from '../assets/images/icone-Depoimento.png'


export default class Depoimentos extends Component {
    state = {
        title: '',
        text: '',
        itemsEsq: [],
        itemsDir: []
    }
    componentDidUpdate = (prev) => {
        if (prev !== this.props) {
            this.setState({
                title: this.props.data.sessao_6_titulo,
                text: this.props.data.sessao_6_texto,
                itemsEsq: this.props.data.sessao_6_depoimentos_da_esquerda ? Object.values(this.props.data.sessao_6_depoimentos_da_esquerda) : [],
                itemsDir: this.props.data.sessao_6_depoimentos_da_direita ? Object.values(this.props.data.sessao_6_depoimentos_da_direita) : [],

            })
        }
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        };
        return (
            <section className='depoimentos'>
                <div className="depoimentos__header">
                    <ContentText
                        title={this.state.title}
                        hasSeparator={true}
                        separatorIcon={estrela}
                        text={this.state.text}
                    />
                </div>
                <div className='depoimentos__coluna' >
                    <div className='depoimento'>
                        <Slider {...settings}>
                            {this.state.itemsEsq.map((item,i) =>
                               <div key={`depoimentoEsq_${i}`}>
                                    <div className='depoimento__borderImg'>
                                        <img className='depoimento__imagem' src={item.foto ? item.foto : iconeDepoimento} />
                                    </div>
                                    <p className='depoimento__texto'>{item.depoimento}</p>
                                    <span className='depoimento__divisor'></span>
                                    <p className='depoimento__nome'>{item.nome}</p>
                                    <p className='depoimento__cargo'>{item.cargo}</p>

                                </div>

                            )}

                        </Slider>
                    </div>
                </div>
                <div className='depoimentos__coluna depoimentos__coluna--lastChild' >
                    <div className='depoimento depoimento__dir'>
                        <Slider {...settings}>
                            {this.state.itemsDir.map((item, i) =>
                                <div key={`depoimentoDir_${i}`}>
                                    <div className='depoimento__borderImg'>
                                        <img className='depoimento__imagem' src={item.foto ? item.foto : iconeDepoimento} />
                                    </div>
                                    <p className='depoimento__texto'>{item.depoimento}</p>
                                    <span className='depoimento__divisor'></span>
                                    <p className='depoimento__nome'>{item.nome}</p>
                                    <p className='depoimento__cargo'>{item.cargo}</p>

                                </div>

                            )}

                        </Slider>
                    </div>
                </div>

            </section>
        )
    }
}