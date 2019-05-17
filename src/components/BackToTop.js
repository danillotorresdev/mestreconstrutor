import React, { Component } from 'react'
import { throttle } from '../utils/helpers'
import { IoMdArrowUp } from "react-icons/io"


export default class BacktoTop extends Component {
    state = {
        active: false
    }
    componentDidMount() {
        document.addEventListener('scroll', throttle(this.setScroll))
        let element = document.getElementById('banner');
        let [btn] = document.getElementsByClassName('backToTheTop');
        btn.addEventListener('click', () => {
            element.scrollIntoView({ behavior: "smooth" });
        })

    }
   

    setScroll = (e) => {
        const top = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0)
        this.setState({
            active: !isNaN(top) ? top < 450 ? false : true : false
        })
    }
    render() {
        return (
            <React.Fragment>
                <button className={`backToTheTop ${this.state.active === true ? '' : 'backToTheTop--leave'}`} title="Go to top"><IoMdArrowUp /></button>

            </React.Fragment>
        )
    }
}

