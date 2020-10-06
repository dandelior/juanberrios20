import React from 'react';
import '../assets/sass/header.sass';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: false,
            // fixed: false
            isTop: true
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }
 
    toggleMenu() {
        this.setState(state => ({
            active: !state.active
        }));
        document.body.classList.toggle('fixed');
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
          const isTop = window.scrollY < 400;
          if (isTop !== this.state.isTop) {
              this.setState({ isTop })
          }
        });
    }

    render() {

        let actualState = this.state.active;
        // let fixedState = this.state.isTop;

        const menus = [
            {
                title: 'Trabajos',
                link: '/',
                isExternal: false
            },
            {
                title: 'Info',
                link: '/profile',
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
            }
        ]

        return (
            <>
                <header>
                    <div className={`header-inner pd-lr ${actualState ? "active" : ""} fixed`}>
                        {/* Branding */}
                        <div className="branding">
                            <Link to={menus[0].link}>Juan Berrios</Link>
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
                                    ? <a href={menu.link} target="_blank" rel="noopener noreferrer" onClick={this.toggleMenu}>{menu.title}</a>
                                    : <Link to={menu.link} onClick={this.toggleMenu}>{menu.title}</Link>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </header>
            </>
        )
    }
}