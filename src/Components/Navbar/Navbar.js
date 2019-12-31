import React from 'react';
import './Navbar.css'
import { NavLink,Link } from 'react-router-dom'

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }
    showLi = () => {
        this.setState({ isVisible: true })
    }
    hideLi = () => {
        this.setState({ isVisible: false })
    }
    render() {
        return (
            <div id="Navbar" style={{ color: this.props.color, backgroundColor: this.props.backgroundColor }}>
                <div className='itemLogo'><li className={this.props.logo}>{/*logo muda de acordo com a tela*/}</li></div>
                <div className="itensNav">
                    <div className={this.props.className}><li><Link to='/'>HOME</Link></li></div>
                    <div className={this.props.className}><li><Link to='/empresa'>EMPRESA</Link></li></div>
                    <div className={this.props.className}><li><Link to='/mej'>MEJ</Link></li></div>
                   
                      < NavLink to='/serviços' className={this.props.className}onMouseEnter={this.showLi} onMouseLeave={this.hideLi}> <li>SERVIÇOS</li>
                        {this.state.isVisible ? 
                            <ul className='dropdownLi' >
                                
                                <li>PORTIFÓLIO</li>
                                <li>PROJETOS</li>
                            </ul>
                            : null}
                        </NavLink>
                    
                    <div className={this.props.className}><li><Link to='/equipe'>EQUIPE</Link></li></div>
                    <div className={this.props.className}><li><Link to='/blog'>BLOG</Link></li></div>
                </div>
            </div>
        )
    }
}