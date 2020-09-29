import React from 'react';
import '../assets/sass/header.sass';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: false
        }

        this.toggleMenu = this.toggleMenu.bind(this);
    }
 
    toggleMenu() {
        this.setState(state => ({
            active: !state.active
        }));
        document.body.classList.toggle('fixed');
    }

    
    render() {

        let actualState = this.state.active;

        const menus = [
            {
                title: 'Trabajos',
                link: '/',
                isExternal: false
            },
            {
                title: 'Instagram',
                link: 'https://instagram.com/bydandelior',
                isExternal: true
            },
            {
                title: 'GitHub',
                link: 'https://github.com/dandelior',
                isExternal: true
            },
            {
                title: 'Perfil',
                link: '/profile',
                isExternal: false
            }
        ]

        return (
            <>
            {/* <Router> */}
                <header className={`pd-lr ${actualState ? "active" : ""}`}>
                    {/* Branding */}
                    <div className="branding">
                        <a href={menus[0].link}>Juan Berrios</a>
                    </div>
                    {/* Responsive Button */}
                    <button className={`hamburger ${actualState ? "active" : ""}`} onClick={this.toggleMenu} type="button">
                        <span className="hamburger-box-a"></span>
                        <span className="hamburger-box-b"></span>
                    </button>
                    {/* Navigation Menu */}
                    <nav className={`navigation ${actualState ? "active" : ""}`}>
                        <ul>
                            {menus.map((menu) => (                                
                                menu.isExternal 
                                ? <a href={menu.link} target="_blank">{menu.title}</a>
                                : <Link to={menu.link}>{menu.title}</Link>
                            ))}
                        </ul>
                    </nav>
                </header>
            {/* </Router> */}
            </>
        )
    }
}