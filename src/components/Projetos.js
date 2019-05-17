import React, {Component} from 'react'
import ContentText from './ContentText'
import './Projetos.scss'
import estrela from '../assets/images/Estrela.png'
import bgPadrao from '../assets/images/Thumb-Video-MC.png'

class Projetos extends Component {

    state ={
        modalActive: false,
        active: 0,
        title: '',
        text: '',
        items: []
    }
    
	componentDidUpdate = (prev) => {
		if (prev !== this.props) {
			this.setState({ 
				title: this.props.data.sessao_5_titulo,
                text: this.props.data.sessao_5_texto,
                items: this.props.projetos ? Object.values(this.props.projetos) : []

             })
		}
	}
    handleClick = (id) => {
        this.setState({
            active: id
        }, this.handleModal())
    }
    handleModal = () => {
       this.setState(prev => ({
           modalActive: !prev.modalActive
       }))
    }
    render(){
        return (
            <React.Fragment>
                <section className='projetos' id="videos">
                    <div className="intro">
                        <div className='container intro__container'>
                            <ContentText
                                title={this.state.title}
                                hasSeparator={true}
                                separatorIcon={estrela}
                                text={this.state.text}
                            />
                        </div>
                    </div>

                    <div className="videos">
                        {this.state.items.map( (item, i) =>
                                <div key={`videoThumb_${i}`} className='video' onClick={() => this.handleClick(i)}>                            
                                        <img className='video__thumb' src={item.acf.thumb ? item.acf.thumb : bgPadrao}></img>     
                                        <p className='video__title'>{item.acf.titulo}</p>                                         
                                </div>

                            )}
                    </div>
                </section>
                {this.state.modalActive === true && 
                    <div className='modal'>
                        <div className='modal__box'>
                            <div className='modal__header'>
                                <h1 className='modal__title'>{this.state.items[this.state.active].acf.titulo}</h1>
                                <span className='modal__close'onClick={this.handleModal}>x</span>
                            </div>
                            <div className='modal__videoWrapper'>
                                <div className='loader'>
                                    <div className='loader__content'></div>
                                </div>
                                <iframe title="Mapa" width="100%" height="100%" src={`https://www.youtube.com/embed/${this.state.items[this.state.active].acf.id_do_video}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default Projetos

