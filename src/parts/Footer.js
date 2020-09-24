import React from 'react';
import '../assets/sass/footer.sass';

export class Footer extends React.Component {
    render(){
        let year =  new Date().getFullYear();

        return(
            <>
                <footer className="pd-lr">
                    <h1>
                        Hagamos realidad tu proyecto digital
                    </h1>
                    <div className="contactOptions">
                        <div>
                            <p>Escríbeme a</p>
                            <a href="mailto:hola@juanberrios.com">hola@juanberrios.com</a>
                        </div>
                        <div>
                            <p>O a mi Instagram</p>
                            <a href="https://instagram.com/bydandelior">@bydandelior</a>
                        </div>
                    </div>
                    <div className="credits">
                        <p>
                            Juan Berrios
                        </p>
                        <p>
                            Copyright © {year}
                        </p>
                    </div>
                </footer>
            </>
        )
    }
}