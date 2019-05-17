import React, { Component } from 'react'
import "./Contato.scss"
import ContentText from './ContentText'
import { IoIosMail, IoIosPhonePortrait, IoMdPin } from "react-icons/io"
import { RD_TOKEN } from '../utils/token'
import { postRD } from '../utils/api'

import InputMask from 'react-input-mask';


class Contato extends Component {
  state = {
    nome: '',
    email: '',
    profissao: '',
    nascimento: '',
    telefone: '',
    endereco: '',
    endereco_form: '',
    cidade: '',
    result: 'null'
  }
  componentDidUpdate = (prev) => {
    if (prev !== this.props) {
      this.setState({
        title: this.props.data.sessao_9_titulo,
        text: this.props.data.sessao_9_texto,
        endereco: this.props.data.sessao_9_endereco
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

    const { nome, email, profissao, nascimento, telefone, endereco_form, cidade, result } = this.state

    postRD(
      {
        "token_rdstation": RD_TOKEN, //Obrigatório - Token Publico de autenticação
        "identificador": "MC__contato", //Obrigatório
        "nome": nome,
        "email": email, //Obrigatório
        "profissao": profissao,
        "nascimento": nascimento,
        "telefone": telefone,
        'endereco_form': endereco_form, // campo ASSUNTO no RD
        'cidade': cidade, // campo MENSAGEM no RD
      }
    )

      .then(res => {
        if (res.result === 'success') {
          this.formSuccess('success')
        }
        else {
          this.formSuccess('failure')
        }
      })
    this.clearForm()
  }

  formSuccess = (type) => {
    this.setState({
      result: type
    })
    setTimeout(() => this.setState({ result: 'null' }), 5000);
  }

  resultMessage(type) {
    const resultMessage = {
      success: 'Obrigado. Em breve um consultor entrará em contato!',
      failure: 'Ocorreu um erro. Tente novamente mais tarde',
      null: ''
    }
    return resultMessage[type]
  }


  clearForm = () => {
    this.setState({
      nome: '',
      email: '',
      profissao: '',
      nascimento: '',
      telefone: '',
      endereco_form: '',
      cidade: '',
      result: ''
    })
  }

  render() {
    const { nome, email, profissao, nascimento, telefone, endereco_form, cidade, result } = this.state
    return (
      <section className='contato' id='contato'>
        <div className="container">
          <ContentText
            title={this.state.title}
            hasSeparator='true'
            separatorIcon='Icon'
            text={this.state.text}
          />
          <form className='contato__form' onSubmit={this.onSubmit}>
            <div className="contato__coluna">
              <input className='contato__input' required type='text' onChange={this.onChange} name="nome" value={nome} placeholder='Nome completo' />
              <input className='contato__input' required type='email' onChange={this.onChange} name="email" value={email} placeholder='E-mail' />
              <input className='contato__input' type='text' onChange={this.onChange} name="profissao" value={profissao} placeholder='Informe se você é um pedreiro, empreiteiro ou outros' />
              <InputMask className="contato__input" type='text' maskChar={null} onChange={this.onChange} placeholder='Data de nascimento' mask="99/99/9999" name='nascimento' value={nascimento} />
            </div>
            <div className="contato__coluna">
            <InputMask className="contato__input" type='text' maskChar={null} onChange={this.onChange} placeholder='Telefone' mask="(99) 9 9999-9999" name='telefone' value={telefone} />
              <input className='contato__input' type='text' onChange={this.onChange} name="endereco_form" value={endereco_form} placeholder='Endereço completo' />
              <input className='contato__input' type='text' onChange={this.onChange} name="cidade" value={cidade} placeholder='Cidade' />

              <button className='contato__buttom'>Enviar</button>

            </div>
          </form>
          <span className={`contato__message contato__message--${result}`}>{this.resultMessage(result)}</span>
        </div>
        <div className="container info">
          <div className='info__coluna'>
            <IoMdPin />
            <p className='info__text'>{this.state.endereco}</p>
          </div>
        </div>

      </section>
    )
  }
}

export default Contato