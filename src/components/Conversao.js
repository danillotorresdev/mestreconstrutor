import React, { Component } from 'react'
import "./Conversao.scss"
import estrela from '../assets/images/Estrela.png'
import ContentText from './ContentText'
import {RD_TOKEN} from '../utils/token'
import {postRD} from '../utils/api'     

class Conversao extends Component {
    state = {
        title: '',
        text: '',
        email: '',
        result: 'null'
    }
    componentDidUpdate = (prev) => {
        if (prev !== this.props) {
            this.setState({
                title: this.props.data.sessao_7_titulo,
                text: this.props.data.sessao_7_texto
            })
        }
    }
    // POST - RD
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        const { email, result} = this.state
        
        postRD(
          {
            "token_rdstation": RD_TOKEN, //Obrigatório - Token Publico de autenticação
            "identificador": "MC__contato", //Obrigatório
            "email": email, //Obrigatório

          }
        )
       
        .then(res => {
          if(res.result === 'success'){
            this.formSuccess('success')
          }
          else{
            this.formSuccess('failure')
          }
        })
        this.clearForm()
      }

      formSuccess = (type) => {
        this.setState({
          result: type
        })
        setTimeout(() => this.setState({result: 'null'}), 5000);
      }

      resultMessage(type){
        const resultMessage = {
          success: 'Obrigado. Em breve um consultor entrará em contato!',
          failure: 'Ocorreu um erro. Tente novamente mais tarde',
          null: ''
        }
        return resultMessage[type]
      }


      clearForm = () => {
        this.setState({
           email: '',
           result: ''
         })
        }

    render() {
        const { email, result} = this.state
        return (
            <section className='conversao'>
                <span className='conversao__espatula'></span>
                <div className='container'>
                    <ContentText
                        title={this.state.title}
                        text={this.state.text}
                        hasSeparator={true}
                        separatorIcon={estrela}
                    />

                    <form className='conversao__form' onSubmit={this.onSubmit}>
                        <input className='conversao__textInput' type='email' required onChange={this.onChange} name="email" value={email} placeholder='E-mail' />
                        <button className='conversao__btn'>Enviar</button>
                    </form>
                    <span className={`contato__message contato__message--${result}`}>{this.resultMessage(result)}</span>
                </div>
                <span className='conversao__capacete'></span>
            </section>
        )
    }

}

export default Conversao